import styled from "styled-components";

export const EventsPhotosCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 300px;
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h4 {
        color: white;
        font-family: 'Space Grotesk', sans-serif;
    }
`