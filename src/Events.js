import React, { Component } from 'react';

//CSS
import './App.css';
import './Events.css';

export default class Events extends Component {
    render() {
        return (
            // <div className='Events'>
            //     <div className='Events-main'>
            //         <div className='Comming-soon'>
            //             <h1 className="App-title">Coming soon...</h1> 
            //         </div>
            //     </div>
            // </div>
            <div className='Events'>
                <h1 className='Events-title'>Events</h1>
                <h2 className='Event-info-section'>CHICAGO</h2>
                <div className='Events-info'>
                    <div className='Events-desc'>
                        <h3>Keya's Manglik Prasango</h3>
                        <p>Saturday, April 6, 2019</p>
                        <p>9:30 AM onwards</p>
                        <p>Lunch will be served</p>
                        <p>Shree Swaminarayan Temple</p>
                        <p>1020 Bapa Road, Streamwood, IL 60107</p>
                        <button className='Events-button'><a href='https://goo.gl/maps/u2zzSSfcwU82' target='_blank'>Directions</a></button>
                    </div>
                    <div className='Events-pic'>
                        <img src={require('./pictures/events-1.png')} width='700'/>
                    </div>
                </div>
                <div className='Events-info'>
                    <div className='Events-desc'>
                        <h3>Ricky's Manglik Prasango</h3>
                        <p>Saturday, April 6, 2019</p>
                        <p>3:00 PM onwards</p>
                        <p>Pearl Banquets Conference Center</p>
                        <p>1490 W Lake St., Riddle, IL 60172</p>
                        <button className='Events-button'><a href='https://goo.gl/maps/TRhuc2ZbbdQ2' target='_blank'>Directions</a></button>

                    </div>
                    <div className='Events-pic'>
                        <img src={require('./pictures/events-2.png')} width='700'/>
                    </div>
                </div>
                <hr/>
                <h2 className='Event-info-section'>RIVIERA MAYA, MEXICO</h2>
                <div className='Events-info'>
                    <div className='Events-desc'>
                        <h3>Mehndi & Sangeet</h3>
                        <p>Friday, April 12, 2019</p>
                        <p>6:00 PM - 10:00 PM</p>
                        <p>Dinner will be served</p>
                        <p>Woodstock Terrace - Hard Rock Hotel Riviera Maya</p>
                    </div>
                    <div className='Events-pic'>
                        <img src={require('./pictures/events-3.png')} width='700'/>
                    </div>
                </div>
                <div className='Events-info'>
                    <div className='Events-desc'>
                        <h3>Wedding</h3>
                        <p>Saturday, April 13, 2019</p>
                        <p>10:00 AM - Baraat at the Entrace of Hacienda Lobby</p>
                        <p>11:00 AM - Wedding ceremony at the Hacienda Beach</p>
                        <p>12:30 PM - Lunch at the Maracas Terrace</p>
                        <p>Hacienda Beach - Hard Rock Hotel Riviera Maya</p>
                    </div>
                    <div className='Events-pic'>
                        <img src={require('./pictures/events-4.jpg')} width='700'/>
                    </div>
                </div>
                <div className='Events-info'>
                    <div className='Events-desc'>
                        <h3>Reception</h3>
                        <p>Sunday, April 14, 2019</p>
                        <p>6:00 PM - Cocktails</p>
                        <p>7:00 PM - 11:30 PM - Reception</p>
                        <p>Dinner will be served</p>
                        <p>Convention Center Ballroom - Hard Rock Hotel Riviera Maya</p>
                    </div>
                    <div className='Events-pic'>
                        <img src={require('./pictures/events-5.jpg')} width='700'/>
                    </div>
                </div>
            </div>
        )
    }
}