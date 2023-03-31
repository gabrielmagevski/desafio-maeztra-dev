import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-3-500:  #FAFAFA;
    --color-2-500: #353535;
    --color-2-400:  #4A4441;
    --white: #FFFF;
    --black: #000;
  }

  body, html {
    font-family: 'Titillium Web', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
