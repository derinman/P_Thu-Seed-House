import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`

*{
    font-family: "Quicksand","Helvetica", "Arial", "sans-serif", "黑體-繁", "微軟正黑體"; !important;
};

html {
    /*網頁版版 1rem 基準*/
    font-size: 16px;
    @media (max-width: 768px) {
    /*行動版 1rem 基準*/
    font-size: 14px;
    }
};

#root {
    width: 100vw;
    height: 100vh;
}

body {
    width:100%;
    height:100%;
    margin: 0;
    background-color: #FFF;
    overflow:hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
};
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
