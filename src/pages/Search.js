import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MikeIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        console.log('you hit search', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    }
    return (
        <form className='search'>
            <div className="search_input">
                <SearchIcon className="input_icon"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MikeIcon />
        </div>

        {!hideButtons ? (
            <div className="search_btns">
        <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
        
        <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        ): (
                 <div className="search_btns">
                <Button className="search_btnsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                
                <Button className="search_btnsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
        )}
       
        </form>
    );
}

export default Search
