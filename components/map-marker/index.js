import React, { Component } from "react";
import { Box, Text } from "~/components";
import { Transition, Spring, config } from "react-spring/renderprops.cjs";

export default class extends Component {
  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.animate === this.props.animate) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    const { left, top, style, animate } = this.props;
    return (
      <Box
        flex
        row
        style={{
          position: "relative",
          left: left,
          top: top
        }}
      >
        <Transition
          items={animate}
          from={{ r1: 0, r2: 0, bw: 0 }}
          enter={{ r1: 14, r2: 26, bw: 2 }}
          leave={{ r1: 0, r2: 0, bw: 0 }}
        >
          {show =>
            show &&
            (({ r1, r2, bw }) => (
              <Box style={{ position: "absolute" }} acenter jcenter flex>
                <Box
                  br="50%"
                  bg="#091E42"
                  width={`${r1}px`}
                  height={`${r1}px`}
                  style={{ position: "absolute" }}
                ></Box>
                <Box
                  br="50%"
                  bg="transparent"
                  width={`${r2}px`}
                  height={`${r2}px`}
                  bs="solid"
                  bw={bw}
                  bc="#091E42"
                  style={{ position: "absolute" }}
                ></Box>
              </Box>
            ))
          }
        </Transition>

        <Box
          flex
          row
          width={100}
          style={{
            position: "relative",
            left: -14,
            top: -55,
            overflow: "hidden"
          }}
        >
          <Transition
            items={animate}
            delay={300}
            from={{ transform: "translate3d(0,35px,0)", overflow: "hidden" }}
            enter={{ transform: "translate3d(0,0px,0)" }}
            leave={{ transform: "translate3d(0,35px,0)" }}
          >
            {show =>
              show &&
              (props => (
                <Box
                  style={props}
                  bg="#091E42"
                  width="30px"
                  height="30px"
                  flex
                  acenter
                  jcenter
                  br={4}
                  margin={[0, 0.25, 0, 0]}
                  z={1}
                >
                  <Text>{220}</Text>
                </Box>
              ))
            }
          </Transition>
          <Transition
            items={animate}
            delay={600}
            from={{ transform: "translate3d(-250px,0,0)" }}
            enter={{ transform: "translate3d(35px,0,0)" }}
            leave={{ transform: "translate3d(-250px,0,0)" }}
          >
            {show =>
              show &&
              (props => (
                <Box
                  style={{ ...props, position: "absolute", height: "100%" }}
                  bg="white"
                  flex
                  acenter
                  br={4}
                  padding={[0.25, 0.5, 0.25, 0.5]}
                >
                  <Text color="black">Casa de Campo</Text>
                </Box>
              ))
            }
          </Transition>
        </Box>
      </Box>
    );
  }
}
