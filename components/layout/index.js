import { Component } from "react";
import Menubar from "./menu-bar";
import styled from "styled-components";
import { Box } from "~/components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

export default class extends Component {
  render() {
    return (
      <StyledLayout>
        {this.props.children}
        <Menubar />
      </StyledLayout>
    );
  }
}
