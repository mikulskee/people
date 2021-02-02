import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: 'Montserrat', sans-serif;
  }

  body {
      background-color: #051d4d;
  }

`;
