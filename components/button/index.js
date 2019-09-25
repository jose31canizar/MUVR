import React, { Component } from "react";
import { Box, Text } from "~/components";

export default class extends Component {
  render() {
    const A = [...Array(10).keys()];
    return (
      <Box
        bg="#091E42"
        br={25}
        width="100px"
        flex
        acenter
        jcenter
        pointer
        spacing={0.06}
        padding={[0.5, 1]}
        onClick={() => this.props.onClick(this.props.children)}
      >
        <Text color="white" h6>
          {this.props.children}
        </Text>
      </Box>
    );
  }
}
