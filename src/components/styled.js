import styled from 'styled-components';

export const FlexGrid = styled.div`
    display: flex;
    /* justify-content: center; */
    justify-content: space-around;
    margin-top: 1rem;
    flex-wrap: wrap;
`;
export const SearchCards = styled.div`
        width: 15rem;
        height: 100%;
        margin: 1rem 1rem;
        /* margin: 0 1rem !important; */
        .img-wrapper{
            width: 100%;
            height: 19rem;
            border-radius: 10px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 20px;
            }
        }
        h1{
            font-size: 1.5rem;
            font-family: 'Oswald', sans-serif;
            font-weight: bold;
            margin: .5rem 0;
            color: lightgray;
        }
        p{
            font-size: .9rem;
            width: 90%;
            margin-bottom: .6rem;
            color: lightgray;
        }
`;