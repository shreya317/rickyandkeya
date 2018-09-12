import React, { Component } from 'react';

// CSS
import './App.css';

// Components
import Accommodations from './Accommodations';
import WeddingParty from './WeddingParty';
import Events from './Events';
import Photos from './Photos';
import NavBar from './NavBar';
import Story from './Story';
import Contact from './Contact';
import Feed from './Feed'

//Utils
import {NAV_OPTIONS} from './constants.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNavOption: NAV_OPTIONS.HOME
    }
}

  render() {
    return (
      <div className='Main'>
        <NavBar onSelectedNavOption={selectedNavOption => {
          this.setState({selectedNavOption})
        }}/>
        {this.state.selectedNavOption === NAV_OPTIONS.HOME && (
          <div className="App">
            <div className='App-main'>
              <div className='App-intro'>
                <div className='flex-dir-row'>
                  <div className='flex-grow'>
                    <h1 className="App-title">Ricky & Keya</h1>
                    <p className="App-date">April 13, 2019</p>
                  </div>
                  <div className='flex-grow'></div>
                  <div className='flex-grow'></div>
                </div>
                <div className='flex-dir-row'>
                  <div className='flex-grow'></div>
                  <div className='flex-grow'></div>
                  <div className='flex-grow'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.selectedNavOption === NAV_OPTIONS.STORY && (<Story/>)}
        {this.state.selectedNavOption === NAV_OPTIONS.WEDDING_PARTY && (<WeddingParty/>)}
        {this.state.selectedNavOption === NAV_OPTIONS.EVENTS && (<Events/>)}
        {this.state.selectedNavOption === NAV_OPTIONS.ACCOMMODATIONS && (<Accommodations/>)}
        {this.state.selectedNavOption === NAV_OPTIONS.PHOTOS && (<Photos/>)}
        {this.state.selectedNavOption === NAV_OPTIONS.FEED && (<Feed/>)}
        {this.state.selectedNavOption === NAV_OPTIONS.CONTACT && (<Contact/>)}
      </div>
    );
  }
}

export default App;
