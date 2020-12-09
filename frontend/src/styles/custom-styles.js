import { createGlobalStyle } from 'styled-components';

import { fontFamily } from './variables';

export const CustomStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.4;
    margin: 0;
  }
  body {
    font-family: ${fontFamily};
  }
  
  a:focus,
  [tabindex]:focus {
    outline: 0;
  }
  
  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
  
  img {
    max-width: 100%;
  } 
  p,
  label {
    line-height: 1.4;
  }
  
  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
  .font-normal {
    font-weight: normal;
  }
`;
