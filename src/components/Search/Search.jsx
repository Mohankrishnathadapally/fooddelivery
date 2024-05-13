import React, { useState } from 'react';
import './Search.css';

const Search = ({ setSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(query);
    };

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search...'
                    value={query}
                    onChange={handleInputChange}
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
};

export default Search;
