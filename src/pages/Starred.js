import React, { useState, useEffect } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { useShows} from '../misc/custom-hooks'
import { getApi} from '../misc/config'
import ShowsGrid from '../components/shows/ShowsGrid'


const Starred = () => {
    const [starred] = useShows();
    // console.log(starred);
    const [shows,setShows] = useState(null);
    const [isLoding, setIsLoding] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {

        if (starred && starred.length > 0) {
            const promises = starred.map(showId => getApi(`/shows/${showId}`));

            Promise.all(promises)
                .then(apiData => apiData.map(show => ({ show })))
                .then(results => {
                    setShows(results);
                    setIsLoding(false);
                }).catch(err => {
                    setError(err.massage);
                    setIsLoding(false);
                });
        } else {
            setIsLoding(false);
        }

    },[starred]);

    // console.log(shows)

    return (
        <MainPageLayout>
            {isLoding && <div>Shows are still loding</div>}
            {error && <div>Error occured : {error}</div>}
            {!isLoding && !shows && <div>No shows are Added</div>}
            {!isLoding && !error && shows && <ShowsGrid data={shows}/>}
        </MainPageLayout>
    )
}

export default Starred