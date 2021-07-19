import React, { useState } from 'react';
import { Button } from 'react-foundation';

const apiKey = '&appid=' + process.env.REACT_APP_API_KEY;
const apiCity = 'api.openweathermap.org/data/2.5/weather?q=';
const apiZip = 'api.openweathermap.org/data/2.5/weather?zip=';

const Search = () => {

    const [search, setSearch] = useState('');

    const handleChange = (evt) => {
        setSearch(evt.target.value)
        console.log(evt.target.id)
    }

    const handleSubmit = (evt) => {
        evt.target.id = 'city-search' ?
          console.log(apiCity + evt.target.value + apiKey)
            // .then(res => res.json())
            // .then(data => console.log(data))
            // .catch(err => console.log(err))
            :
          fetch(apiZip + evt.target.value + apiKey)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <input 
            id="city-search"
            className="search-field"
            type="text"
            placeholder="Search by City & State" 
            onChange={handleChange}
            />
            <h3>OR</h3>
            <input 
            id="zip-search"
            className="search-field"
            type="text"
            placeholder="Search by Zip/Postal Code" 
            onChange={handleChange}
            />
            <Button isExpanded onClick={handleSubmit}>Search</Button>
        </>
    )
}

export default Search;