import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UlStyle = styled.ul`
    display: flex;
    justify-content: center;
    margin: .8rem 0;
    li{
        list-style: none;
    }
`;
export const NavStyle = styled(Link)`
    text-decoration: none;
    margin: 0 .7rem;
    color: lightgray;
    position: relative;
    padding: .5rem 0;
    outline: none;
    &.active{
        color:#dbdb04;
        &:after{
            content: "";
            width:100%;
            height:2px;
            position: absolute;
            top: 32px;
            left: 0;
            background-color: #dbdb04;
            animation: slide-in 0.3s ease-in forwards;
            @keyframes slide-in {
                from {
                    left:50%;
                    width: 0;
                }
                to {
                    left: 0;
                    width:100%;
                }
            }
        }
    }
`;