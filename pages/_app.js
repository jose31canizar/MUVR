import React from "react";
import Layout from "~/components/layout";
import { Box } from "~/components";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import withReduxStore from "../lib/with-redux-store";
import { createStore } from "redux";
import { Provider } from "react-redux";

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#091E42"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "SF-Pro"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  }
};

const GlobalStyle = createGlobalStyle`
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 300;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 500;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 700;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 900;
        }
        body {
          margin: 0;
          overflow-y: scroll;
          background-color: #091E42;
        }
        html {
          width: 100%;
          position: absolute;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          -webkit-tap-highlight-color: transparent;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        li,
        ul,
        a,
        button {
          font-family: "SF-Pro";
          font-weight: 100;
          letter-spacing: 0.02rem;
          margin: 0;
          padding: 0;
          user-select: none;
          color: #555056;
        }
        * {
          box-sizing: border-box;
        }
      `;

class AluxionApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Box>
        <GlobalStyle fontName="SF-Pro" />
        <ThemeProvider theme={theme}>
          <Provider store={reduxStore}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </Box>
    );
  }
}

export default withReduxStore(AluxionApp);
