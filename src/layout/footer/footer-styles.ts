import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2vh;

    width: 100vw;
    background-color:  #181818;

    .content {
        display: flex;
        flex-direction: column;
        gap: 4vh;
        width: 50%;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            height: 12vh;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 4vh;
            width: 12vw;
            cursor: pointer;
            
            border: none;
            background-color: #2F2F2F;

            font-weight: lighter;
            font-size: 1.2vh;
            color: #FFFFFF;
        }
    }
    
    .mid {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: start;

        .columns {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;

            gap: 2vh;

            a {
                line-break: auto;
                text-decoration: none;
                color:rgb(197, 191, 191);
                text-align: center;
                align-items: center;

                &:hover {
                    color: white;
                }
            }
        }
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        p {
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 1vh;
        }

        a {
            color: white;
        }
    }
`