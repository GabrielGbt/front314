import styled from "styled-components";

export const EventCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 20vh;
    width: 20vh;
    border-radius: 10px;
    margin: 3vh;

    img {
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
    }

    h1 {
        font-size: 2vh;
        font-weight: 100;
        font-family: Arial, Helvetica, sans-serif;
    }

    span {
        color: white;
        font-size: 1.2vh;
    }

    p {
        color: white;
        font-size: 1.5vh;
    }
    
    &:hover {
        cursor: pointer;
        height: 22vh;
        width: 22vh;
        margin: 2vh 0 0 2vh;
        margin-right: 0;
        margin-bottom: 0;
        transition: 0.4s;
        position: relative;
    }

    :active {
        height: 15vh;
        width: 15vh;
        transition: 0.4s;
    }

`