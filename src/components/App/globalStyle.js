import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background-color: #0079BF;
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;
