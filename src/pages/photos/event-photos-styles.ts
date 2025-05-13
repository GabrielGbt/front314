import styled from "styled-components";

export const PhotosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15vh 0;
    height: 100vh;
    margin: 0 auto 5vh;
    padding-top: 10vh;

    .searchBox {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        margin: 4vh 0;
        gap: 5px;

        .Search {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 5vh;
            width: 40vh;
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
            box-shadow: 10px;
    
            &:enabled {
                background-color: blue;
            }
    
            .icon {
                height: 2.2vh;
                width: 2.2vh;
                margin: 0 1.5vh;
            }
    
            input {
                width: 100%;
                height: 100%;
                border: white;
                outline: none;
            }
        }
    }

    .content {
        display: grid;
        grid-template-columns: repeat(5,auto);
        grid-template-areas: inherit;
        justify-content: center;
        gap: 1.5vh;

        height: 100%;
        width: 60%;
    }
`