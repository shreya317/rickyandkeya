import React, { Component } from 'react';

// CSS
import './NavBar.css'

import heart from './pictures/heart.png'

const getCountDownDays = () => {
    const weddingDay = new Date('April 13, 2019').getTime();
    const today = new Date;
    const distance = weddingDay - today;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    return days
}

export default class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <div className='NavBar-container'>
                    <div className='NavBar-main'>
                        <img className='NavBar-heart' src={heart} alt="heart"/>{getCountDownDays()} Days
                    </div>
                    <div className='NavBar-options'>
                        <div className='NavBar-option'>Our Story</div>
                        <div className='NavBar-option'>Birdal Party</div>
                        <div className='NavBar-option'>Events</div>
                        <div className='NavBar-option'>Accommodations</div>
                        <div className='NavBar-option'>Gallery</div>
                    </div>
                </div>
            </div>
        )
    }
}