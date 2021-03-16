import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core'
import Search from './Search'
function Home() {
    return (
        <div className = 'home'>
            
            <div className="home_header">
                <div className="header_left">
                <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
                
                </div>
                <div className="header_right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home_body">
            <img src= "https://www.google.be/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
            alt=""/>
            <div className="input_container">
            {/* Search */}
            <Search hideButtons/>
            </div>
            </div>
        </div>
    )
}

export default Home
