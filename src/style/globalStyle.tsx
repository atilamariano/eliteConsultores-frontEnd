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
        cursor: pointer;
        background: rgba(0, 0, 0, 0.0);
    }
`;