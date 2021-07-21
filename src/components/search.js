import React, { useState } from 'react';
import { Button } from 'react-foundation';

const apiKey = '&appid=' + process.env.REACT_APP_API_KEY;
const apiCity = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiZip = 'http://api.openweathermap.org/data/2.5/weather?zip=';

const Search = () => {

    const [citySearch, setCitySearch] = useState('');
    const [zipSearch, setZipSearch] = useState('');

    const handleCityChange = (evt) => {
        let value = evt.target.value;
        let noSpace = value.replace(/\s/g, '')
        setCitySearch(noSpace.toLowerCase())
    }
    const handleZipChange = (evt) => {
        setZipSearch(evt.target.value)
    }

    const handleSubmit = () => {
        if (citySearch && zipSearch) {
            console.log('ERROR: Choose 1 search method')
        }
        citySearch ?
            fetch(apiCity + citySearch + apiKey)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
            :
            fetch(apiZip + zipSearch + apiKey)
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
                onChange={handleCityChange}
            />
            <h3>OR</h3>
            <input
                id="zip-search"
                className="search-field"
                type="text"
                placeholder="Search by Zip/Postal Code"
                onChange={handleZipChange}
            />
            <Button isExpanded onClick={handleSubmit}>Search</Button>
        </>
    )
}

export default Search;