import styled from 'styled-components';

export const ShowPage = styled.div`
    padding: 0 1.5rem;
    background-color: #333;
    color: white;

    @media only screen and (min-width: 516px){
        padding: 0 2.5rem;
    }
    @media only screen and (min-width: 768px){
        padding: 0 3.5rem;
    }
    @media only screen and (min-width: 992px){
        padding: 0 4.5rem;
    }
`;

export const TagStyle = styled.div`
    margin: 1rem 0;
    h1{
        font-size: 1.8rem;
        color: yellow;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 1rem;
    }
`; 