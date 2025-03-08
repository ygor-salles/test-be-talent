import { createGlobalStyle } from 'styled-components';

import { THEME } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    overflow-x: hidden;
    background-color: ${THEME.colors.gray.neutral0};
  }

  body, button, input, textarea, span, p, h1, h2, h3, h4, h5, h6, strong {
    font-family: "Helvetica Neue", sans-serif;
  } 

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
