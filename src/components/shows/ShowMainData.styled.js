import styled from 'styled-components';

export const ShowDataWrapper = styled.div`
    display: flex;
    padding: 2rem 0;
    .imgwrapper{
        width: 40rem;
        height: 100%;
        margin-right: 2rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 2.5rem;
        }
    }

    @media only screen and (max-width:768px){
        flex-wrap: wrap;
        .imgwrapper{
            margin: auto;
            width: 25rem;
        }
    }
`;
export const MainData = styled.div`
    margin-top: 2rem;
    h1{
        font-size: 1.8rem;
        font-family: 'Oswald', sans-serif;
    }
    p{
        margin-top: auto.8rem;
        i{
            color: yellow;
            margin-right: .4rem;
        }
        span{
            font-size: .9rem;
        }
    }
    div{
        margin-top: 1rem;
        p{
            font-size: .8rem;
        }
        h3{
            font-family: 'Oswald', sans-serif;
        }
        div{
            span{
                padding: .3rem .5rem;
                border: 1px solid yellow;
                font-size: .6rem;
                margin-right: 1rem;
                border-radius: 1rem;
            }
        }
    }
`;