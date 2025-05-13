import styled from "styled-components";

export const EventPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;

    .init {
        display: flex;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        img {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            overflow: hidden;
        }

        .intro {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70%;
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
    }

    .content {
        display: flex;
        justify-content: space-between;
        width: 50vw;
        margin: 7vh 0;

        .left {
            display: flex;
            flex-direction: column;
            width: 50%;
            gap: 3vh;

            div {
                display: flex;
                flex-direction: column;
                gap: 0.5vh;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: min-content;
            width: 30%;
            border: 1px solid white;
            border-radius: 20px;
            overflow: hidden;

            .title {
                display: flex;
                justify-content: start;
                align-items: center;
                width: 100%;
                padding: 0 1vh;
                height: 5vh;
                background-color: #2F2F2F;
            }

            .sector-unit {
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgb(118, 118, 118);
                padding: 1vh;

                h4 {
                    text-align: center;
                }

                h3 {
                    color: #61CE70
                }
            }
        }
    }
`
