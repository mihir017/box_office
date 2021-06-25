import React from 'react'
import {ShowDataWrapper, MainData} from './ShowMainData.styled'

const ShowMainData = ({image, name, summary, genres, rating}) => {
    // console.log(genres,rating,name);
    return (
        <ShowDataWrapper>
            <div className="imgwrapper">
                <img src={image} alt="Show" />
            </div>
            <MainData>
                <h1>{name}</h1>
                <p className="rating"><i className="fas fa-star"></i><span>{rating}</span></p>
                <div dangerouslySetInnerHTML = {{__html:summary}} />
                <div>
                    <h3>Genres:</h3>
                    <div>
                        {genres.map( (tag, index) => <span key={index}>{tag}</span> )}
                    </div>
                </div>
            </MainData>
        </ShowDataWrapper>
    )
}

export default ShowMainData
