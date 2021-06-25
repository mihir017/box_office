import React from 'react'
import ActorCard from './ActorCard'
import NOT_FOUND_IMG from '../../images/noimageavailable.png'
import {FlexGrid} from '../styled';


const ActorGrid = ({ data }) => {
    return (
        <FlexGrid>
            {
                data.map(({person}) => <ActorCard key={person.id} name={person.name} birthday={person.birthday} deathday={person.deathday} gander={person.gender} image={person.image ? person.image.medium : NOT_FOUND_IMG} country={person.country? person.country.name : null} />)
            }
        </FlexGrid>
    )
}

export default ActorGrid
