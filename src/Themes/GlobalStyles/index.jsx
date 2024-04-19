import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  * {
    font-family: "Ubuntu", sans-serif;
  }

  ::-webkit-scrollbar-track {
	background-color: #e0e0e0;
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-thumb {
	background-color: #0072be;
}
`;
