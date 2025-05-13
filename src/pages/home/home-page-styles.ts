import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    margin-bottom: 8vh;


    .highlight {
        display: flex;
        flex-direction: column;
        color: white;
        width: 50%;
        gap: 1vh;

        a {
            text-decoration: none;
            color: #FF6A05;
        }

        img {
            height: 30vh;
            width: 100%;
            object-fit: cover;
        }

        &:hover {
            cursor: pointer;
        }
    }
    
    
    .week {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        color: white;
        width: 50%;

        .week-content {
            display: flex;
            gap: 2vh;
            overflow-x: scroll;
            overflow-y: visible;
            white-space: nowrap;
            padding-bottom: 1vh;
        }

    }

    .photos {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        gap: 2vh;

        .photo-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            p {
                font-size: 1.5vh;
                font-weight: lighter;
            }
        }

        .eventCardPhoto {
            width: 100%;
            display: flex;
            flex-direction: row;
            overflow-x: scroll;
            overflow-y: hidden;
            gap: 2vh;
            padding-bottom: 1vh;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5vh;
            width: 12vw;
            cursor: pointer;
            
            border: none;
            background-color: #2F2F2F;

            font-weight: lighter;
            font-size: 1.2vh;
            color: #FFFFFF;
        }
    }
`