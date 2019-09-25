import React, { Component } from "react";
import { Text, Box, BusCard } from "~/components";
import { Bus } from "~/components/icons";
import { compose } from "~/helpers";
import { connect } from "react-redux";

class BusCardGroup extends Component {
  render() {
    const { stops, line, mode } = this.props;
    return (
      <Box>
        <Box flex row padding={[1, 1]}>
          <Box padding={[0, 0.5, 0, 0]}>
            <Bus />
          </Box>
          <Text>Línea {line}</Text>
        </Box>
        <Box
          {...{
            ...(mode === "cards" && { grid: true }),
            ...(mode === "list" && { flex: true }),
            ...(mode === "list" && { wrap: true })
          }}
          columns={2}
          gap={1}
        >
          {stops
            .slice(0, 20)
            .map(({ name, arrivalTime, latitude, longitude, distance }, i) => (
              <BusCard
                name={name}
                line={line}
                arrivalTimes={arrivalTime}
                latitude={latitude}
                longitude={longitude}
                distance={distance}
                key={`bus-stop-${i}`}
                style={{ marginBottom: "1rem" }}
              />
            ))}
        </Box>
      </Box>
    );
  }
}

export default compose(connect(({ mode }) => ({ mode })))(BusCardGroup);
