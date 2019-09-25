import React, { Component } from "react";
import { Image, Text, Box } from "~/components";
import { Distance, Time } from "~/components/icons";
import { withFade } from "~/hocs";
import { compose } from "~/helpers";
import { connect } from "react-redux";
import styled from "styled-components";
import { setCoordinates } from "~/actions";
import { differenceInMinutes, closestTo, isAfter, addDays } from "date-fns";

const StyledBox = styled(Box)`
  &:hover {
    background-color: white;
    h2,
    h4 {
      color: black;
    }
    h6 {
      color: #8993a4;
    }
  }
`;

class BusCard extends Component {
  state = {
    nearestArrivalTime: null
  };
  componentDidMount() {
    const { line, name, arrivalTimes } = this.props;
    const today = new Date();
    const arrivalTimesParts = arrivalTimes.map(time =>
      time.split(":").map(part => parseInt(part))
    );
    let arrivalTimesAfterToday = arrivalTimesParts
      .map(
        parts =>
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            ...parts
          )
      )
      .filter(date => isAfter(date, today));
    if (arrivalTimesAfterToday.length === 0) {
      arrivalTimesAfterToday = arrivalTimesParts
        .map(parts =>
          addDays(
            new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate(),
              ...parts
            ),
            1
          )
        )
        .filter(date => isAfter(date, today));
    }
    const nearestArrivalTime = closestTo(today, arrivalTimesAfterToday);

    this.setState({ nearestArrivalTime });
  }
  render() {
    //should rename data to arrivalTimes
    const {
      name,
      line,
      mode,
      arrivalTimes,
      setCoordinates,
      latitude,
      longitude,
      distance
    } = this.props;
    const { nearestArrivalTime } = this.state;
    const today = new Date();
    const [stop, place] = name.split("-");

    return (
      <StyledBox
        jcenter
        {...(mode === "cards" ? { astart: true } : { acenter: true })}
        width={100}
        height={100}
        flex
        {...(mode === "cards" ? { column: true } : { row: true })}
        pointer
        bg="#1D3051"
        padding={[1, 1]}
        br={4}
        onClick={() =>
          setCoordinates([parseFloat(latitude), parseFloat(longitude)])
        }
      >
        <Box flex row acenter>
          <Box width="48px">
            <Text h2 padding={[0, 1, 0, 0]} center>
              {line}
            </Text>
          </Box>
          <Box>
            <Text h4 padding={[0, 0, 0.25, 0]}>
              {stop}
            </Text>
            <Text h6 color="#EBECF0">
              {place}
            </Text>
          </Box>
        </Box>
        <Box
          flex
          row
          width={100}
          {...(mode === "cards" && { between: true })}
          {...(mode === "list" && { jend: true })}
          padding={[mode === "cards" ? 2 : 0, 0, 0, mode === "cards" ? 3 : 0]}
        >
          <Box flex row acenter>
            <Time />
            <Text
              h5
              color="#FFC121"
              padding={[0, mode === "cards" ? 0 : 2, 0, 0.5]}
            >
              {nearestArrivalTime &&
                `${differenceInMinutes(nearestArrivalTime, today)} min.`}
            </Text>
          </Box>
          <Box flex row acenter>
            <Distance />
            <Text h5 color="#2DC8A6" padding={[0, 0, 0, 0.5]}>
              {(distance * 1000).toFixed(0)} mt
            </Text>
          </Box>
        </Box>
      </StyledBox>
    );
  }
}

export default compose(
  withFade,
  connect(
    ({ mode }) => ({ mode }),
    { setCoordinates }
  )
)(BusCard);
