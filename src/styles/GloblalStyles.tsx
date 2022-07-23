import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #ffffff;
  }

  body {
    background: #f0f8ff;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

export default GlobalStyle;
