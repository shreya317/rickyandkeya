import React, { Component } from 'react';

// CSS
import './NavBar.css'
// Images
import heart from './pictures/heart.png'
// Utils
import {NAV_OPTIONS} from './constants.js';

const getCountDownDays = () => {
    const weddingDay = new Date('April 13, 2019').getTime();
    const today = new Date();
    const distance = weddingDay - today;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    return days
}

export default class NavBar extends Component {
    handleClick = (e) => {
        this.props.onSelectedNavOption(e.target.name);
      }

    render() {
        return (
            <div className='NavBar'>
                <div className='NavBar-container'>
                    <div className='NavBar-main'>
                        <a name={NAV_OPTIONS.HOME} onClick={e => this.handleClick(e)}>Ricky & Keya<img className='NavBar-heart' src={heart} alt="heart"/>{getCountDownDays()} Days</a>
                    </div>
                    <div className='NavBar-options'>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.HOME} onClick={e => this.handleClick(e)}>Home</a></div>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.STORY} onClick={(e) => this.handleClick(e)}>Our Story</a></div>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.WEDDING_PARTY} onClick={(e) => this.handleClick(e)}>Wedding Party</a></div>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.EVENTS} onClick={(e) => this.handleClick(e)}>Events</a></div>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.ACCOMMODATIONS} onClick={(e) => this.handleClick(e)}>Accommodations</a></div>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.PHOTOS} onClick={(e) => this.handleClick(e)}>Photos</a></div>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.FEED} onClick={(e) => this.handleClick(e)}>#RicKeya2019</a></div>
                        <div className='NavBar-option'><a name={NAV_OPTIONS.CONTACT} onClick={(e) => this.handleClick(e)}>Contact Us</a></div>                        
                    </div>
                </div>
            </div>
        )
    }
}