import React from 'react'
import {DetailStyle} from './Detail.styled'

const Detail = ({ status, lauch }) => {
    return (
        <DetailStyle>
            <p>Status : {status}</p>
            <p>Premiere Date : {lauch}</p>
        </DetailStyle>
    )
}

export default Detail
