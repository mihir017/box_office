import React from 'react'
import { Link } from 'react-router-dom';
import {StyledShowCard} from './ShowCard.styled';


const ShowCard = ({id, name, image, summary, onStarClick, isStarred}) => {
    const desc = summary ? `${summary.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,"")}...`
        : "No Description";
    
    return (
        <StyledShowCard>
            <div className="img-wrapper">
                <img src={image} alt="show"/>
            </div>

            <h1>{name}</h1>
            <p>{desc}</p>
            <div className="btn">
                <Link to={`/show/${id}`}>Read More</Link>
                <button className="star-btn" type="button" onClick={onStarClick}><i className={`fas fa-star ${isStarred?'active':''}`}></i></button>
            </div>
        </StyledShowCard>
    )
}

export default ShowCard
