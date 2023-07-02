import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Frank Ruhl Libre', serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
      background: rgb(200, 200, 200);
    } 

    button {
      padding: 3px;
      cursor: pointer;
      border-radius: 3px;
      border: 1px solid #ffffff;
      color: #ffffff;
      background: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
`;
