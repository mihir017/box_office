import React from 'react'
import IMG_NOT_FOUND from '../../images/noimageavailable.png';
import {CastStyle} from './Cast.styled';

const Cast = ({ casts }) => {
    return (
        <CastStyle>
            {
                casts.map( ({person, character},key) => (
                    <div key={key}>
                        <div className="img-wrapper">
                            <img src={person.image?person.image.medium:IMG_NOT_FOUND} alt="person" />
                        </div>
                        <p>{person.name}<span>{`(${character.name})`}</span></p>
                    </div>
                ))
            }
        </CastStyle>
    )
}

export default Cast
