import { createGlobalStyle } from "styled-components";

import "./assets/css/font/index.css";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: "border-box";
    font-family: "Poppins", sans-serif;
  }
`;

export default GlobalStyle;
