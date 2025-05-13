import styled from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    cursor: grab;

    .inner {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            overflow: hidden;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
        }
    }


    .details {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 25%;
        gap: 1vh;

        h2  {
            line-break: normal;
        }


        button {
            display: flex;
            border: 3px solid  #61CE70;
            border-radius: 35px;
            width: 15vw;
            height: 3vw;
            padding-right: 0.5vh;
            padding-left: 2vh;
            background-color:rgb(33, 179, 91);
            color: white;
            cursor: pointer;
            justify-content: space-between;
            align-items: center;

            :last-child {
                border: 1px solid white;
                background-color: #61CE70;
                border-radius: 50%;
                padding: 7px;
            }

            &:hover {
                background-color: #61CE70;
                color: black;

                :last-child {
                    border: 1px solid transparent;
                    color: black;
                    border-radius: 50%;
                    padding: 7px;
                }
            }
        }
    }

    .controls {
        display: flex;
        gap: 1vw;
        position: absolute;
        top: 90%;
        right: 15%;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.7);
            cursor: pointer;
            background-color: transparent;
            width: 3vw;
            height: 3vw;
            border-radius: 50%;

            &:hover {
                background-color: #ff8c00;
            }
        }
    }
`