import React from 'react';
import { useParams } from "react-router-dom";
import {useShow} from '../misc/custom-hooks';
import ShowMainData from '../components/shows/ShowMainData';
import Detail from '../components/shows/Detail';
import Season from '../components/shows/Season';
import Cast from '../components/shows/Cast';
import IMG_NOT_FOUND from '../images/noimageavailable.png'
import {ShowPage, TagStyle} from '../pages/Show.styled';



const Show = () => {

    // const [show,setShow] = useState(null);
    // const [isLoding,setIsLoding] = useState(true);
    // const [error,setError] = useState(null);
    const {id} = useParams();
    // console.log(state);
    const { show, isLoding, error } = useShow(id)

    if(isLoding){
        return <div>Page is Loding</div>
    }
    if(error){
        return <div>Error is:{error}</div>
    }
    console.log(show);
    return (
        <ShowPage>
            <ShowMainData name={show.name} image={show.image? show.image.medium :IMG_NOT_FOUND} summary={show.summary} rating={show.rating.average?show.rating.average:"N/A"} genres={show.genres} />
            <TagStyle>
                <h1>Details</h1>
                <Detail status={show.status} lauch={show.premiered} />
            </TagStyle>
            <TagStyle>
                <h1>Seasons</h1>
                <Season seasons={show._embedded.seasons}/>
            </TagStyle>
            <TagStyle>
                <h1>Cast</h1>
                <Cast casts={show._embedded.cast} />
            </TagStyle>
        </ShowPage>
    )
}

export default Show
