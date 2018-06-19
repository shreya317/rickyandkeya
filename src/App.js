import React, { Component } from 'react';

// CSS
import './App.css';

// Components
import Accommodations from './Accommodations';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="App">
          <div className='App-main'>
            <div className='App-intro'>
              <div className='flex-dir-row'>
                <div className='flex-grow'>
                  <h1 className="App-title">Ricky & Keya</h1>
                  <p className="App-date">April 13, 2019</p>
                </div>
                <div className='flex-grow'></div>
                <div className='flex-grow'>
                
                </div>
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
        <Accommodations/>
      </div>
    );
  }
}

export default App;
