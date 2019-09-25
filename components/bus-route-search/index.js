import React, { Component } from "react";
import {
  Text,
  Box,
  SearchInput,
  Title,
  BusCard,
  BusCardGroup,
  MenuBarIcon
} from "~/components";
import { BackArrow, Cards, List } from "~/components/icons";
import styled from "styled-components";
import Nodes from "~/data/nodes.json";
import { connect } from "react-redux";
import { toggleMode, setMode } from "~/actions";
import { compose } from "~/helpers";
import { withRouter } from "next/router";
import MediaQuery from "react-responsive";
import { BREAKPOINTS } from "~/constants";
import MenuBar from "~/components/layout/menu-bar";

const StyledBox = styled(Box)`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
`;

class BusRouteSearch extends Component {
  state = {
    showMenuBar: false,
    groups: []
  };
  onMenuBarClick = () => {
    this.setState(({ showMenuBar }) => ({ showMenuBar: !showMenuBar }));
  };
  goBack = () => {
    this.props.router.back();
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.destination.error !== this.props.destination.error &&
      this.props.destination.error
    ) {
      return this.setState({ groups: [] });
    } else if (prevProps.destination.stop !== this.props.destination.stop) {
      this.findClosestStops();
    }
  }
  findClosestStops = () => {
    const { destination } = this.props;
    const { DocumentElement: stops } = Nodes;
    function closestLocation(destinationCoordinates, stops) {
      //haversine formula
      function locationDistance(
        { latitude: lat1, longitude: lon1 },
        { latitude: lat2, longitude: lon2 }
      ) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
      }

      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }

      return stops.reduce((acc, curr) => {
        const distance = locationDistance(destinationCoordinates, curr);
        const max = Math.max(...[...acc].map(a => a.distance));
        if (acc.size < 10) {
          return acc.add({ ...curr, distance });
        } else if (distance < max) {
          acc.forEach(stop => {
            if (stop.distance === max) {
              acc.delete(stop);
              acc.add({ ...curr, distance });
            }
          });
        }
        return acc;
      }, new Set());
    }

    const nearbyStops = [
      ...closestLocation(
        {
          latitude: destination.latitude,
          longitude: destination.longitude
        },
        stops
      )
    ];

    const lines = nearbyStops.map(({ Lines: lines }) => {
      const lineNumbers = lines.split(" ").map(line => line.split("/")[0]);
      return lineNumbers.reduce(
        (acc, line) => (acc.includes(line) ? acc : [...acc, line]),
        []
      );
    });

    //as of now, every stop gets to appear under one line
    const groups = nearbyStops.reduce(
      (groups, item, i) => ({
        ...groups,
        [lines[i][0]]: [
          ...(groups[lines[i][0]] || []),
          { ...item, name: item.Name }
        ]
      }),
      {}
    );

    this.setState({ groups });
  };
  componentDidMount() {
    const { error } = this.props.destination;
    if (!error) {
      this.findClosestStops();
    }

    if (this.props.isMobile) {
      this.props.setMode("list");
    }
  }
  render() {
    const { showMenuBar, groups } = this.state;
    const {
      style,
      mode,
      toggleMode,
      isMobile,
      destination: { stop, name, error }
    } = this.props;

    const nameParts = name && name.split("-");
    const displayPlace = name && nameParts[nameParts.length - 1];

    return (
      <StyledBox
        jcenter
        center
        width={isMobile ? "100" : "50"}
        scroll
        bg="#091E42"
        padding={isMobile ? [2, 1, 1, 1] : [3, 3]}
        style={style}
      >
        <Box flex row acenter between>
          <Title />
          <MediaQuery minWidth={BREAKPOINTS.MOBILE}>
            <SearchInput width={50} bg="#081e41" />
          </MediaQuery>
          <MediaQuery maxWidth={BREAKPOINTS.MOBILE}>
            <MenuBarIcon onClick={this.onMenuBarClick} />
          </MediaQuery>
        </Box>
        <MediaQuery maxWidth={BREAKPOINTS.MOBILE}>
          <Box padding={[2, 0]}>
            <SearchInput width={100} />
          </Box>
        </MediaQuery>
        <Box margin={[isMobile ? 1 : 0, 0, 3, 0]}>
          <Box onClick={this.goBack} pointer>
            <BackArrow />
          </Box>
          <Box flex column>
            <Text h5 color="#42526E">
              Autobuses cercanos
            </Text>
            <Box flex row between>
              <Text h2>
                {stop},{displayPlace}
              </Text>
              <MediaQuery minWidth={BREAKPOINTS.MOBILE}>
                <Box flex row>
                  <Box padding={[0, 1, 0, 0]} onClick={toggleMode} pointer>
                    <Cards color={mode === "cards" ? "white" : "#42526E"} />
                  </Box>
                  <Box onClick={toggleMode} pointer>
                    <List color={mode === "list" ? "white" : "#42526E"} />
                  </Box>
                </Box>
              </MediaQuery>
            </Box>
          </Box>
          <hr style={{ borderColor: "#42526E" }} />
        </Box>
        {error ? (
          <Text>{error}</Text>
        ) : (
          Object.entries(groups).map(([line, stops]) => (
            <BusCardGroup
              line={line}
              stops={stops}
              key={`bus-card-group-${line}`}
            />
          ))
        )}
        <MenuBar show={showMenuBar} />
      </StyledBox>
    );
  }
}

export default compose(
  withRouter,
  connect(
    ({ mode, coordinates, destination }) => ({
      mode,
      coordinates,
      destination
    }),
    { toggleMode, setMode }
  )
)(BusRouteSearch);
