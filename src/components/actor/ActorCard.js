import React from 'react'
import {SearchCards} from '../styled'
const ActorCard = ({ name, birthday, deathday, image, gander, country }) => {
    return (
        <SearchCards>
            <div className="img-wrapper">
                <img src={image} alt="person" />
            </div>

            <h1>{name}<span>{`(${gander})`}</span></h1>
            <p>{country ? `Comes from ${country}`:"No country known"}</p>
            {birthday ? <p>{`Born on ${birthday}`}</p> : null}
            {deathday ? <p>{`Died on ${deathday}`}</p> : <p>Alive</p>}
        </SearchCards>
    )
}

export default ActorCard
