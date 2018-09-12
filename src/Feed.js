import React, { Component } from 'react';

//CSS
import './App.css';
import './Feed.css';

export default class Feed extends Component {
    render() {
        return (
            <div className='Feed'>
                <h1 className='Feed-title'>#RicKeya2019</h1>
                <div className='Feed-info'>
                    <p>To help us document our wedding festivities, please tag pictures on Instagram with the hashtag above.</p> 
                    <p>Your post won't appear publicly if your account is set to private and you add the hashtag.</p>
                </div>
                <div className='Feed-ig'>
                    <ul class="juicer-feed" data-feed-id="rickeya2019">
                        <h1 class="referral"></h1>
                    </ul>
                </div>
            </div>
        )
    }
}