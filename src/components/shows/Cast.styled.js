import styled from 'styled-components';

export const CastStyle = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    div{
        display: flex;
        margin-bottom: 1rem;
        width: 50%;
        /* align-items: center; */
        .img-wrapper{
            width: 4rem;
            height: 4rem;
            img{
                border-radius: 50%;
                width: 100%;
                height: 100%;
            }
        }
        p{
            font-size: .9rem;
            margin-top: 1.2rem;
            margin-left: 1rem;
        }
    }
    @media only screen and (max-width: 768px){
        div{
            width: 100%;
        }
    }
`;