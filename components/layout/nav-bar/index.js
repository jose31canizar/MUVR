import React, { Component } from "react";
import { compose } from "~/helpers";
import { BREAKPOINTS } from "~/constants";
import { withSize } from "~/hocs";
import { Box, Title, NextLink, Links, MenuBarIcon } from "~/components";
import styled, { withTheme } from "styled-components";
import MediaQuery from "react-responsive";
import Menubar from "../menu-bar";

const StyledBox = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

class Navbar extends Component {
  state = {
    showMenuBar: false
  };
  onMenuBarClick = () => {
    this.setState(({ showMenuBar }) => ({ showMenuBar: !showMenuBar }));
  };
  render() {
    const { showMenuBar } = this.state;
    const { theme } = this.props;
    return (
      <StyledBox
        between
        acenter
        flex
        row
        padding={[2, 1.5, 2, 1]}
        bg={theme.colors.blue}
        width={100}
      >
        <Title />
        <MediaQuery minWidth={BREAKPOINTS.MOBILE}>
          <Box>
            {Links.map(({ href, label }) => (
              <NextLink
                padding={[0, 1, 0, 0]}
                key={`nav-bar-link-${label}`}
                href={href}
              >
                {label}
              </NextLink>
            ))}
          </Box>
        </MediaQuery>
        <MediaQuery maxWidth={BREAKPOINTS.MOBILE}>
          <MenuBarIcon onClick={this.onMenuBarClick} />
        </MediaQuery>
        <Menubar show={showMenuBar} />
      </StyledBox>
    );
  }
}

export default compose(
  withSize,
  withTheme
)(Navbar);
