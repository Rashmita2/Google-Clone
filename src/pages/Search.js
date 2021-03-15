import React from 'react'
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MikeIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';

function Search() {
    const search = e => {
        e.preventDefault();
    }
    return (
        <div className='search'>
            <div className="search_input">
                <SearchIcon className="input_icon"/>
                <input />
                <MikeIcon />
        </div>
        <div className="search_btns">
        <Button onClick={search} variant="outlined">Google Search</Button>
        
        <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        </div>
    )
}

export default Search
