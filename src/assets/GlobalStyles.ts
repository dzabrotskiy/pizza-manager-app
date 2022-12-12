import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: rgb(251, 254, 255);
    background: linear-gradient(to bottom, rgb(22, 38, 68) 60vh, rgb(251, 254, 255) 60vh);
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  #root {
    margin: 0 auto;
  }
`;
