import React, { useState } from 'react';
import { Button } from 'react-foundation';
import CardContainer from './cardContainer';
import Card from './card';
import { render } from '@testing-library/react';

const apiKey = '&appid=' + process.env.REACT_APP_API_KEY;
const apiCity = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiZip = 'http://api.openweathermap.org/data/2.5/weather?zip=';

const Search = () => {

    const [citySearch, setCitySearch] = useState('');
    const [zipSearch, setZipSearch] = useState('');
    const [results, setResults] = useState([]);

    const handleCityChange = (evt) => {
        let value = evt.target.value;
        let noSpace = value.replace(/\s/g, 'us-')
        setCitySearch(noSpace.toLowerCase())
    }
    const handleZipChange = (evt) => {
        setZipSearch(evt.target.value)
    }

    const handleSubmit = () => {
        citySearch ?
            fetch(apiCity + citySearch + apiKey)
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    
                })
                .catch(err => console.log(err))
            :
            fetch(apiZip + zipSearch + apiKey)
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    
                })
                .catch(err => console.log(err));


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
            { !results ? 
                <div id='weather-results'>
                    <Card
                        name={results.name}
                        description={results.weather[0].description}
                        temp={results.main.temp}
                        feelsLike={results.main.feels_like}
                        maxTemp={results.main.max_temp}
                        minTemp={results.main.min_temp}
                    />
                </div> :
                <div></div>
            }
        </>
    )
}

export default Search;