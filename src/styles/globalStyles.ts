import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        h1 {
            font-size: 6vh;
            font-family: 'Space Grotesk', sans-serif;
            color: white;
        }

        h2 {
            font-size: 2vh;
            font-family: "Special Gothic Expanded One", sans-serif;
            font-weight: 800;
            color: white;
        }

        h3 {
            font-size: 1.5vh;
            font-family: "Special Gothic Expanded One", sans-serif;
            color: white;
        }

        h4 {
            font-family: 'Space Grotesk', sans-serif;
            color: white;
            font-weight: 700;
            font-size: 2vh;
            white-space: pre-line;
        }

        a {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 100;
            font-size: 1.5vh;
            color: white;
        }

        span {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 100;
            font-size: 2vh;
            color: white;
        }

        p {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 100;
            font-size: 1.2vh;
            color: rgb(197, 191, 191);
            white-space: pre-line;
        }

        button {
            font-size: 1vw;
            font-family: 'Space Grotesk', sans-serif;
        }
        
    }

    body {
        background-color: black;
        overflow-x: hidden;
    }
`