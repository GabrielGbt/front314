import styled from "styled-components";

export const EventosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vw;
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


    .list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, auto);
        justify-content: center;
    }

    .steps {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 4vh 0;
    }
`