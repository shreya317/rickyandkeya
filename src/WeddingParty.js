import React, { Component } from 'react';

//CSS
import './App.css';
import './WeddingParty.css';

export default class BridalParty extends Component {
    render() {
        return (
            <div className='WeddingParty'>
                {/* <div className='WeddingParty-main'>
                    <div className='Comming-soon'>
                        <h1 className="App-title">Coming soon...</h1> 
                    </div>
                </div> */}
                <h1 className='WeddingParty-title'>Wedding Party</h1>
                <div className='WeddingParty-info'>
                    <div className='WeddingParty-desc'>
                        <h2 className='WeddingParty-info-section'>KEYA'S FAMILY</h2>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/k-parents.png')} alt="Keya's Parents" title="Keya's Parents" /></a></div>
                        <h3 className='WeddingParty-name'>Parents - Anil & Nita</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/k-siblings2.jpg')} alt="Keya's Siblings" title="Keya's Siblings" /></a></div>
                        <h3 className='WeddingParty-name'>Sister & brother-in-law - Shreya & Parag</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/k-siblings1.jpg')} alt="Keya's Siblings" title="Keya's Siblings" /></a></div>
                        <h3 className='WeddingParty-name'>Brother - Dhruvil</h3>

                        <h2 className='WeddingParty-info-section'>KEYA'S BRIDESMAIDS</h2>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/amra.png')} alt="Amra" title="Amra"/></a></div>
                        <h3 className='WeddingParty-name'>Amra</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/krupa.png')} alt="Krupa" title="Krupa"/></a></div>
                        <h3 className='WeddingParty-name'>Krupa</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/mansi.png')} alt="Mansi" title="Mansi"/></a></div>
                        <h3 className='WeddingParty-name'>Mansi</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/nisha.png')} alt="Nisha" title="Nisha"/></a></div>
                        <h3 className='WeddingParty-name'>Nisha</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/nishar.png')} alt="Nisha" title="Nisha"/></a></div>
                        <h3 className='WeddingParty-name'>Nisha</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/pranali.png')} alt="Pranali" title="Pranali"/></a></div>
                        <h3 className='WeddingParty-name'>Pranali</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/ritu.png')} alt="Ritu" title="Ritu"/></a></div>
                        <h3 className='WeddingParty-name'>Ritu</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/shreya.jpg')} alt="Shreya" title="Shreya"/></a></div>
                        <h3 className='WeddingParty-name'>Shreya</h3>

                    </div>
                    <div className='WeddingParty-desc'>
                        <h2 className='WeddingParty-info-section'>RICKY'S FAMILY</h2>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/r-parents.png')} alt="Ricky's Parents" title="Ricky's Parents" /></a></div>
                        <h3 className='WeddingParty-name'>Parents - Hema & Suresh</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/r-siblings1.jpg')} alt="Ricky's Sibings" title="Ricky's Sibings" /></a></div>
                        <h3 className='WeddingParty-name'>Sister, brother-in-law, niece, nephew - Ruma, Ashish, Shayla, Shaiyer</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/r-siblings2.png')} alt="Ricky's Sibings" title="Ricky's Sibings" /></a></div>
                        <h3 className='WeddingParty-name'>Sister, brother-in-law, nephew - Resha, Sarju, Niam</h3>

                        <h2 className='WeddingParty-info-section'>RICKY'S GROOMSMEN</h2>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/anip.png')} alt="Anip" title="Anip"/></a></div>
                        <h3 className='WeddingParty-name'>Anip</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/harnish.png')} alt="Harnish" title="Harnish"/></a></div>
                        <h3 className='WeddingParty-name'>Harnish</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/harsh.png')} alt="Harsh" title="Harsh"/></a></div>
                        <h3 className='WeddingParty-name'>Harsh</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/kevin.png')} alt="Kevin" title="Kevin"/></a></div>
                        <h3 className='WeddingParty-name'>Kevin</h3>
                        <div className='WeddingParty-img'><a href="" title=" "><img height="300" src={require('./pictures/weddingparty/kush.png')} alt="Kush" title="Kush"/></a></div>
                        <h3 className='WeddingParty-name'>Kush</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/preet.png')} alt="Preet" title="Preet"/></a></div>
                        <h3 className='WeddingParty-name'>Preet</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/raahi.png')} alt="Raahi" title="Raahi"/></a></div>
                        <h3 className='WeddingParty-name'>Raahi</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/rishin.png')} alt="Rishin" title="Rishin"/></a></div>
                        <h3 className='WeddingParty-name'>Rishin</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/rushi.png')} alt="Rushi" title="Rushi"/></a></div>
                        <h3 className='WeddingParty-name'>Rushi</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/saajan.png')} alt="Saajan" title="Saajan"/></a></div>
                        <h3 className='WeddingParty-name'>Saajan</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/sachin.png')} alt="Sachin" title="Sachin"/></a></div>
                        <h3 className='WeddingParty-name'>Sachin</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/sujay.png')} alt="Sujay" title="Sujay"/></a></div>
                        <h3 className='WeddingParty-name'>Sujay</h3>
                        <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require('./pictures/weddingparty/susheel.png')} alt="Susheel" title="Susheel"/></a></div>
                        <h3 className='WeddingParty-name'>Susheel</h3>
                    </div>
                </div>
            </div>
        )
    }
}