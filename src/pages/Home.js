import React, { useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { getApi } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import ShowsGrid from '../components/shows/ShowsGrid'
import ActorGrid from '../components/actor/ActorGrid';
import {InputStyle} from '../pages/Input.styled'

const Home = () => {
    const [input,setInput] = useLastQuery();
    const [results,setResults] = useState(null);
    const [radioInput,setRadioInput] = useState("shows");

    const isRadioInput = radioInput === "shows";
    // Click For Search
    const onInputSearch = () => {
        // https://api.tvmaze.com/search/shows?q=thor
        getApi(`/search/${radioInput}?q=${input}`)
        .then(result => {
            setResults(result);
            console.log(result);
        });
    }
    // Enter Input for show
    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    // Key Down (Enter)
    const onKeyDown = (e) => {
        if (e.keyCode === 13){
            onInputSearch();
        }
    }
    // change the search option
    const onRadioChange = (e) => {
        setRadioInput(e.target.value);
    }
    // result show function
    const randerResults = () => {
        if(results && results.length === 0){
            return <div>Not Found</div>
        }
        if(results && results.length > 0){
            return results[0].show ? <ShowsGrid data={results} /> : <ActorGrid data={results} />;
        }
        return null;
    }
    return (
        <MainPageLayout>
            <InputStyle>
                <input type='text' className="searchInput" onChange={onInputChange} placeholder="Enter Search item" value={input} onKeyDown={onKeyDown} />
                <div>
                    <label htmlFor="shows">
                        Shows
                        <input type="radio" value="shows" id="shows" checked={isRadioInput} onChange={onRadioChange} />
                    </label>
                    <label htmlFor="actor">
                        Actors
                        <input type="radio" value="people" id="actor" checked={!isRadioInput} onChange={onRadioChange}  />
                    </label>
                </div>
                <button type="button" onClick={onInputSearch}>Search</button>
                {randerResults()}
            </InputStyle>
        </MainPageLayout>
    )
}

export default Home
