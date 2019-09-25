import { Component } from "react";
import { Box, MapMarker, Text } from "~/components";
import Map from "pigeon-maps";
import { withSize } from "~/hocs";
import { BusRouteSearch } from "~/components";
import { Spring } from "react-spring/renderprops.cjs";
import { BREAKPOINTS } from "~/constants";
import styled from "styled-components";
import { compose } from "~/helpers";
import { connect } from "react-redux";

class Results extends Component {
  state = {
    animateMarker: true
  };
  componentDidUpdate(prevProps) {
    if (
      !prevProps.coordinates.every((c, i) => c === this.props.coordinates[i])
    ) {
      this.setState({ animateMarker: false });
    } else if (!this.state.animateMarker) {
      setTimeout(() => {
        this.setState({ animateMarker: true });
      }, 1000);
    }
  }
  render() {
    const { width, coordinates } = this.props;
    const { animateMarker } = this.state;
    return (
      <Spring
        from={{ transform: `translate3d(-100vw,0,0)` }}
        to={{ transform: `translate3d(0vw,0,0)` }}
      >
        {props => (
          <Box bg="#091E42" width={100}>
            <BusRouteSearch
              style={props}
              isMobile={width < BREAKPOINTS.TABLET}
            />
            <Map
              center={[coordinates[0], coordinates[1] - 0.007]}
              zoom={16}
              width={this.props.width}
              height={this.props.height}
            >
              <MapMarker
                anchor={coordinates}
                animate={animateMarker}
                offset={[0, 0]}
                coordinates={coordinates}
              />
            </Map>
          </Box>
        )}
      </Spring>
    );
  }
}

export default compose(
  withSize,
  connect(({ coordinates }) => ({ coordinates }))
)(Results);
