import styled from 'styled-components';

export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .searchInput{
        margin: .5rem 0;
        padding: 0.4rem .5rem;
        outline: none;
        width: 15rem;
        border-radius: 5px;
        border: 1px solid gray;
        color: gray;
    }
    div{
        margin: .4rem 0 .5rem 0;
        label{
            margin-right: 1.2rem;
            font-size: .9rem;
            text-transform: uppercase;
            color: lightgray;
            input{
                margin-left: .4rem;
                cursor: pointer;
            }
        }
    }
    button{
        padding: 0.4rem .8rem;
        width: 10rem;
        text-align: center;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        background-color: #dbdb04;
        border: 1px solid #dbdb04;
        color: black;
        margin-top: .6rem;
        :hover{
            box-shadow: 2px 2px 10px rgba(186,186,4,.5);
        }
    }
`;