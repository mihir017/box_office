import styled from 'styled-components';
import {SearchCards} from '../styled';

export const StyledShowCard = styled(SearchCards)`
    .btn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            font-size: .9rem;
            color: #dbdb04;
        }
        .star-btn{
            width:auto;
            background-color: lightgray;
            padding: .2rem .9rem;
            border-radius:15px;
            outline:none;
            font-size: .8rem;
            cursor:pointer;
            border: 1px solid #333;
            .active{
                color: orange;
            }
            i{
                color: gray;
            }
            :hover{
                background-color: lightgray;
                box-shadow: none;
            }
        }
    }
`;