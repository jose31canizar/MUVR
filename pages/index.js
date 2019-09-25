import Head from "next/head";
import React, { Component } from "react";
import { withTheme } from "styled-components";
import { Grid, Header, Box } from "~/components";
import Nav from "~/components/layout/nav-bar";

class Home extends Component {
  render() {
    const { theme } = this.props;
    return (
      <main>
        <Head>
          <title>Home</title>
        </Head>
        <Nav />
        <Box bg={theme.colors.blue} scroll margin={[40, 0, 0, 0]}>
          <Header />
          <Grid />
        </Box>
      </main>
    );
  }
}

export default withTheme(Home);
