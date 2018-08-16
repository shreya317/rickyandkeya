import React, { Component } from 'react';

//CSS
import './App.css';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
                <h1 className='Contact-title'>Contact Us</h1>
                <div className='Contact-info'>
                    <p>We are working with a premiere Indian destination wedding planning company, Shaadi Destinations.</p> 
                    <p>If you need additional help or have questions regarding bookings, you may contact Shaadi Destinations</p>
                    <p>by e-mailing <a href="mailto:hello@shaadidestinations.com">hello@shaadidestinations.com</a> with the subject line Ricky & Keya.</p>
                    <p>If you have any other questions or concerns please email us at <a href="mailto:rickyandkeya@gmail.com">rickyandkeya@gmail.com</a>.</p>
                </div>
                <div><img src={require('./pictures/acc.jpg')}/></div>
            </div>
        )
    }
}