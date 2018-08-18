import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

import {PROPOSAL_IMAGES} from './proposal.js'
import {ENGAGEMENT_IMAGES} from './ceremony.js'
import {US_IMAGES} from './us.js'

//CSS
import './App.css';
import './Photos.css';

export default class Photos extends Component {
    render() {
        return (
            <div className='Photos'>
                {/* <div className='Photos-main'>
                    <div className='Comming-soon'>
                        <h1 className="App-title">Coming soon...</h1> 
                    </div>
                </div> */}
                <h1 className='Photos-title'>Photos</h1>
                <h2 className='Photos-info-section'>PROPOSAL | APRIL 23, 2017</h2>
                <div className='Photos-gallery'>
                    <Gallery 
                        images={PROPOSAL_IMAGES}
                        enableImageSelection={false}
                        rowHeight={200}
                        backdropClosesModal={true}
                        showLightboxThumbnails={true}
                        maxRows={1}
                    />
                </div>
                <h2 className='Photos-info-section'>ENGAGEMENT CEREMONY | OCTOBER 21, 2017</h2>
                <div className='Photos-gallery'>
                    <Gallery 
                        images={ENGAGEMENT_IMAGES}
                        enableImageSelection={false}
                        rowHeight={200}
                        backdropClosesModal={true}
                        showLightboxThumbnails={true}
                        maxRows={1}
                    />
                </div>
                <h2 className='Photos-info-section'>US</h2>
                <div className='Photos-gallery'>
                    <Gallery 
                        images={US_IMAGES}
                        enableImageSelection={false}
                        rowHeight={200}
                        backdropClosesModal={true}
                        showLightboxThumbnails={true}
                        maxRows={1}
                    />
                </div>
            </div>
        )
    }
}