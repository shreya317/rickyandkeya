import React, { Component } from 'react';

// CSS
import './Accommodations.css'

export default class Accommodations extends Component {
    render () {
        return (
            // <div className='Accommodations'>
            //     <div className='Accommodations-main'>
            //         <div className='Comming-soon'>
            //             <h1 className="App-title">Coming soon...</h1> 
            //         </div>
            //     </div>
            // </div>

            <div className='Accommodations'>
                <h1 className='Accommodations-title'>Accommodations</h1>
                <h2 className='Accommodations-location'>Hard Rock Hotel Riviera Maya | Luxury All-Inclusive Resort</h2>

                <div className='Accommodations-images'>
                    <img src={require('./pictures/acc-resort.png')} width='700'/>
                </div>

                <div className='Accommodations-book'>
                    <button><a href='https://www.shaadidestinations.com/reservation-ricky-and-keya' target='_blank'>CLICK HERE TO BOOK YOUR ROOM</a></button>
                    <button><a href='https://www.shaadidestinations.com/flights-ricky-and-keya' target='_blank'>CLICK HERE TO SHARE YOUR FLIGHT INFORMATION</a></button>
                </div>
                
                <div className='Accommodations-info'>
                    <h3>Hard Rock Hotel Riviera Maya is where luxury meets satisfaction.</h3>
                    <p>Ricky and Keya invite you to live large and enjoy the very best of paradise while celebrating their wedding on a stage of stunning tropical views with private white sand beaches and crystal-clear water.</p>
                    <p>Come kick into high gear with activities from tennis and rock climbing to kayaking and golf. Swim in style in one of the many large sparkling pools with swim-up bars or take a little dive and snorkel in the lagoons. Indulge in treatments from massages to facials to hydrotherapy and satisfy your palate at any of the seven exceptional all-inclusive restaurants. Even spoil yourself with free 24-hour room service. </p>
                    <p>Most important of all, get ready to party like a rock star with the bride and groom to be.</p>
                    <hr/>
                    <h3>GROUP BOOKING DETAILS</h3>
                    <p>Ricky and Keya have secured discounted group rates for all of their guests through Shaadi Destinations.</p>
                    <p>Reserve your room today for $200.00 / room by clicking the link above (final payments will be due at time of check-in). The above link will take you through Shaadi Destinations’ booking portal, where you will be able to select room type, amount and travel dates, to enter in number/names of guests and to securely pay your deposit.</p>
                    <p>All rooms MUST be booked through the group block ON THIS SITE in order to secure the discounted rate and group promotions (including double resort credit), complimentary round-trip airport transportation, and access to all wedding events.</p>
                    <p>Bookings made through other 3rd parties, private travel agents, or directly through the Hard Rock website will not be honored and an additional fee will be required to attend wedding events.</p>
                    <p>All bookings must be made by February 1, 2019.</p>
                    <hr/>
                    <h3>ALL INCLUSIVE EXPERIENCE</h3>
                    <p>Rates are ALL-INCLUSIVE, per room, per night and vary depending on which room type you select.</p>
                    <ul>
                        <li>Children under 4 are free</li>
                        <li>Children 4-12 years old are $60.00 per child / per night. </li>
                        <li>Children 13-17 years old are $ 120.00 per child / per night. </li>
                    </ul>
                    <p>All inclusive amenities include:</p>
                    <ul>
                        <li> 5-Star accommodations </li>
                        <li> Casual and à la carte dining </li>
                        <li> Beverages (alcoholic and otherwise) </li>
                        <li> Delicious snacks </li>
                        <li> Top-shelf, in-room liquor dispenser </li>
                        <li> 24/7 in-room service </li>
                        <li> Limitless World-Class Golf </li>
                        <li> Land sports </li>
                        <li> Fitness center </li>
                        <li> 'Born to Run' Jogging track </li>
                        <li> Pool and beachside service </li>
                        <li> Daily activities </li>
                        <li> Nightly entertainment </li>
                        <li> Live entertainment </li>
                        <li> Free Wi-Fi in room and resort wide </li>
                        <li> Parking Free </li>
                        <li> Unlimited phone calls to the Continental US and Canada </li>
                        <li> Gratuities included </li>
                    </ul>
                    <hr/>
                    <h3>CANCELLATION POLICY</h3>
                    <p>Cancellations made before February 22nd, 2019 are fully refundable</p>
                    <p>Cancellations made between February 23rd, 2019 and March 26th, 2019 will incur a 2-night charge</p>
                    <p>Cancellations made after March 26th, 2019 are non-refundable</p>
                    <hr/>
                    <h3>FREQUENTLY ASKED QUESTIONS</h3>
                    <ul>
                        <li>
                            <p><b>What are the visa and/or passport requirements for Mexico?</b></p>
                            <p>Travel to Mexico requires valid passports, even for US Citizens. Please ensure that your passport expires after October 12, 2019 (6 months from the date of entry into Mexico).</p>
                            <p>Mexico has no visa requirement for US Citizens, but you will be asked to fill out an FMM form (Mexico's visitor permit) on the plane or once you land. Once you get to immigration and customs at Cancún airport, the agents will give you the bottom half to retain until you leave the country. It is VERY important to keep this secure until you leave Mexico.</p>        
                        </li>
                        <li>
                            <p><b>Is there transportation being provided between the airport and the resort?</b></p>
                            <p>Yes - roundtrip airport transfers are being provided by Ricky and Keya for bookings made through the group reservation block. Please share your flight information with Shaadi Destinations as soon as you have flights reserved. A link to share your flight information can be found at the top of this page, or you can click <a href='https://www.shaadidestinations.com/flights-ricky-and-keya' target='_blank'>here.</a></p>
                        </li>
                        <li>
                            <p><b>What time is check-in and check-out at Hard Rock Hotel Riviera Maya?</b></p>
                            <p>Check-in time is at 3:00 pm and check-out time is at 12:00 pm. Reservations made through Shaadi Destinations will be given priority to early check-in times (however, this is not guaranteed)</p>
                            <p>Guests are welcome to stay on property all day the day of check-in and check-out. Bags will be stored with butler staff when you don't have access to your room.</p>
                        </li>
                        <li>
                            <p><b>Can I stay for just 2 nights?</b></p>
                            <p>While most destination wedding guests choose to stay 3-5 nights when flying to Mexico, we understand there may be certain limiting factors. Unfortunately, group discounts are only valid on a minimum of 3-night stays. </p>
                            <p>If you must stay 2 nights, please contact Shaadi Destinations by emailing hello@shaadidestinations.com with the subject line Ricky & Keya. Booking through Shaadi Destinations allows for certain group benefits to be conveyed and allows for the best rate possible.</p>
                        </li>
                        <li>
                            <p><b>Are kids welcome?</b></p>
                            <p>Ricky and Keya chose Hard Rock Hotel Riviera Maya because of the endless list of activities that will turn everyone into a child - so children are encouraged!</p>
                            <p>Designed for kids between 4-12 years old, the Kids Club provides playful and safe activities so that the entire family finds their paradise in Riviera Maya. Activities include treasure hunts, origami creative sessions, movie nights, gardening, magic shows, and more.</p>
                            <p>The Kids Club is loaded with all the amenities of an all-inclusive luxury resort, with fun, kid-oriented activities scheduled throughout the week, making for a vacation experience that parents will appreciate and children will never forget! Let them play and have fun in a secure environment while you enjoy too!</p>
                        </li>
                        <li>
                            <p><b>What if I need help with my room booking?</b></p>
                            <p>Ricky and Keya are working with a premiere Indian destination wedding planning company, Shaadi Destinations. You can contact Shaadi Destinations by e-mailing hello@shaadidestinations.com with the subject line Ricky & Keya if you need additional help or may have questions regarding bookings.</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
