import React, { Component } from 'react';

//CSS
import './App.css';
import './Gallery.css';

export default class Gallery extends Component {
    render() {
        return (
            <div className='Gallery'>
                <div className='Gallery-main'>
                    <div className='Comming-soon'>
                        <h1 className="App-title">Coming soon...</h1> 
                    </div>
                </div>
            </div>
        )
    }
}