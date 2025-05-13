import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 12vh;
    justify-content: center;
    
    position: absolute;
    overflow: hidden;
    padding: 10px 0;
    z-index: 5;
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
    height: 100%;

    max-width: 70%;
    min-width: 0;

    @media (max-width: 1100px) {
        max-width: 90%;
    }

    img {
        height: 120%;
        object-fit: contain;
        cursor: pointer;
    }

    .tabs {
        display: flex;
        gap: 5vw;
    }

    a {
        line-break: auto;
        text-decoration: none;
        color: white;
        text-align: center;
        align-items: center;
    }

    .buttons {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    button {
        background-color: #ff8c00;
        color: white;
        border: none;
        width: 8vw;
        height: 4vh;
        border-radius: 30px;
        font-size: 1.5vh;

        &:hover {
            cursor: pointer;
        }
    }
    
`