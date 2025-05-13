import styled from "styled-components";

export const PhotosCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 450px;
    flex-shrink: 0;
    background-color: blue;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
`