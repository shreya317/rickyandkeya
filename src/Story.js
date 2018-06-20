import React, { Component } from 'react';

//CSS
import './App.css';
import './Story.css';

export default class Story extends Component {
    render() {
        return (
            <div className='Story'>
                <div className='Story-main'>
                    <div className='Comming-soon'>
                        <h1 className="App-title">Coming soon...</h1> 
                    </div>
                </div>
            </div>
        )
    }
}