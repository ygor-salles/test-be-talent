import { createGlobalStyle } from 'styled-components';

import { THEME } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;
    font-family: "Helvetica Neue", sans-serif;
    color: ${THEME.colors.black.neutral}
  }

  body {
    overflow-x: hidden;
    background-color: ${THEME.colors.gray.neutral0};
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
