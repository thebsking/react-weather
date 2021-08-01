import React from 'react';

const Card = (props) => {
    return (
        <div className='weather-card'>
            {console.log(props)}
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <p>Current Temperature: {props.temp}</p>
            <p>Feels like: {props.feelsLike} </p>
            <p>High: {props.maxTemp}  Low: {props.minTemp}</p>
        </div>
    )
}

export default Card;


