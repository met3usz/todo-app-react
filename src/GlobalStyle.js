import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Poppins', sans-serif;
  word-break: break-word;
  background-color: hsl(0, 0%, 93%);
}
`;
