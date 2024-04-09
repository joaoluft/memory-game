import { createGlobalStyle } from 'styled-components';  

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  
  body {
    margin: 0;
  }

  * {
    font-family: "Ubuntu", sans-serif;
  }
`;