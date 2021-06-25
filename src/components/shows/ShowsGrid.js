import React from 'react'
import ShowCard from './ShowCard';
import NOT_FOUND_IMG from '../../images/noimageavailable.png'
import { FlexGrid } from '../styled';
import { useShows } from '../../misc/custom-hooks'
// import { ShowPage } from '../../pages/Show.styled';

const ShowsGrid = ({ data }) => {
    const [starredShow,dispatchStarred] = useShows();

    return (
        <FlexGrid>
            {
                data.map(({ show }) => {

                    const isStarred = starredShow.includes(show.id);

                    const onStarClick = () => {
                        if(isStarred){
                            dispatchStarred({type:"REMOVE", showId:show.id});
                        } else {
                            dispatchStarred({type:'ADD', showId:show.id});
                        }
                    };

                    return (
                        <ShowCard key={show.id} 
                            id={show.id} 
                            name={show.name} 
                            image={show.image ? show.image.medium : NOT_FOUND_IMG} 
                            summary={show.summary} 
                            onStarClick={onStarClick}
                            isStarred={isStarred}
                        />)
                })
            }
        </FlexGrid>
    )
}

export default ShowsGrid
