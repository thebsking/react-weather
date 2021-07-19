import React from 'react';
import { Button } from 'react-foundation';

const Search = () => {
    return (
        <>
            <input className="search-field" type="text" placeholder="Search by City & State" />
            <input className="search-field" type="text" placeholder="Search by Zip/Postal Code" />
            <Button isExpanded>Search</Button>
        </>
    )
}

export default Search;