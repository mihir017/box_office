import React from 'react'
import {SeasonStyled} from './Season.styled';

const Season = ({ seasons }) => {
    return (
        <SeasonStyled>
            <p>Seasons in totals:<span>{seasons.length}</span></p>
            <p>Total Episodes:<span>{seasons.reduce((acc,season) => acc + season.episodeOrder , 0)}</span></p>
            <div>
                {
                    seasons.map( (season) => (
                        <div key={season.id}>
                            <h3>Season {season.number}</h3>
                            <p>Episodes:<span>{season.episodeOrder}</span></p>
                            <p>Release date: <span>{season.premiereDate}</span></p>
                        </div>
                    ))
                }
            </div>
        </SeasonStyled>
    )
}

export default Season
