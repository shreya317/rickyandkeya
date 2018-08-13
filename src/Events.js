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
                <div className='Events-info'>
                    <h2 className='Event-info-section'>CHICAGO</h2>
                    
                    <h3>Keya's Manglik Prasango</h3>
                    <p>Saturday, April 6, 2019</p>
                    <p>9:30 AM onwards</p>
                    <p>Lunch will be served</p>
                    <p>Shree Swaminarayan Temple of Itasca</p>
                    <p>~</p>
                    <h3>Ricky's Manglik Prasango</h3>
                    <p>Saturday, April 6, 2019</p>
                    <p>10:00 AM onwards</p>
                    <p>Lunch will be served</p>
                    <p>Location TBA</p>

                    <hr/>
                    
                    <h2 className='Event-info-section'>RIVIERA MAYA, MEXICO</h2>
                    
                    <h3>Welcome Dinner & Sangeet</h3>
                    <p>Help us kick off our wedding weekend with an evening full of food, dancing, and mehndi while enjoying the sunset over the beautiful Carribean Sea.</p>
                    <p>Friday, April 12, 2019</p>
                    <p>6:00 PM - 10:00 PM</p>
                    <p>Dinner will be served</p>
                    <p>Woodstock Terrace - Hard Rock Hotel Riviera Maya</p>
                    <p>~</p>
                    <h3>Wedding</h3>
                    <p>Be witness as we finally tie the know and start our journey as a newly wedded couple.</p>
                    <p>Saturday, April 13, 2019</p>
                    <p>10:00 AM Baraat at the Entrace of Hacienda Lobby</p>
                    <p>11:00 AM Wedding ceremony at the Hacienda Beach</p>
                    <p>12:30 PM Lunch at the Maracas Terrace</p>
                    <p>Hacienda Beach - Hard Rock Hotel Riviera Maya</p>
                    <p>~</p>
                    <h3>Reception</h3>
                    <p>Fill your bellies with some hour de vours and grab a few cocktails before you take your seats, because tonight is all about kicking back and letting loose while celebrating with a night full of fun, dancing, and unlimite partying.</p>
                    <p>Saturday, April 14, 2019</p>
                    <p>6:00 PM Cocktails</p>
                    <p>7:00 PM - 11:30 PM Reception</p>
                    <p>Dinner will be served</p>
                    <p>Convention Center Ballroom - Hard Rock Hotel Riviera Maya</p>
                </div>
            </div>
        )
    }
}