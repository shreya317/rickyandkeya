import React, { Component } from 'react';

//CSS
import './App.css';
import './Story.css';

export default class Story extends Component {
    render() {
        return (
            <div className='Story'>
                {/* <div className='Story-main'>
                    <div className='Comming-soon'>
                        <h1 className="App-title">Coming soon...</h1> 
                    </div>
                </div> */}
                <h1 className='Story-title'>Our Story</h1>
                <div className='Story-info'>
                    <div className='Story-desc'>
                        <h2 className='Story-info-section'>KEYA'S STORY</h2>
                        <p>
                            So, I’m going to tell this according to how I actually remember our story unfolding…Ricky 
                            may remember things a little different.
                        </p>
                        <p>
                            It was Thanksgiving break 2008, and my older sister Shreya was having some friends over at
                            her apartment in the city. Before leaving for her place, I remember getting a text message 
                            from our friends Preet and Rishin, “Hey, is it okay if we bring a few friends to Shreya’s 
                            place tonight?” I talked to Shreya and she was cool with it, so I told them, 
                            “Yeah that’s no problem at all.” Little did I know at that time that one of those friends 
                            would be the person I am about to get married to. I was wearing a yellow dress, black 
                            cardigan and black boots, probably one of the ugliest outfits that I have worn, but it was 
                            good enough to catch Ricky’s eye. We introduced ourselves, made some small talk and went 
                            about our nights; it was no big deal…at least I didn’t think so. In the following days, I 
                            saw that someone was trying to message me on Facebook messenger. It was Ricky, he literally 
                            had sent me like 20 messages. Not wanting to be rude, I responded and
                            accepted his friend request.
                        </p>
                        <p>
                            Fast forward to December 5, 2008; it was a Friday night, a huge blizzard was passing 
                            through, and it just so happened to be Shreya’s 21 st birthday. Her close girlfriends 
                            (shout out to the chucklees) and I were already in the city to go out and celebrate that 
                            night, but we didn’t expect anyone else to show up, after all it was blizzarding. 
                            We were sitting at a booth at Spoon, a few of us were dancing, and from the corner of 
                            my eye I saw two guys walking towards us. Any guesses on who one of them was? Yep, it was 
                            Ricky (the other guy was Rushi). I whispered to my sister “Omg why is he here? 
                            Is he stalking me?!?” She laughed and said, “I think he likes you.” That night, 
                            we ended up having our first slow dance; beecharo Rushi had to come to each place with 
                            us just so Ricky could spend some time with me.
                        </p>
                        <div className='Story-img'><img src={require('./pictures/story/story-2.jpeg')}/></div>
                        <p>
                            During the month of January 2009, we continued to message each other, talk over the phone,
                            and Ricky even made a few trips out to Champaign to see me. On one of those trips, I
                            remember Preet and Rishin warning me “don’t break his heart.” I was like, “relax guys, he
                            hasn’t even asked me out on a date yet.”
                            But, on Friday, February 13, Ricky finally asked me out on a date!! I was so excited; even though
                            I initially thought he was creepy because he kept stalking me, getting to know him over the past
                            few months made me realize that he was a sweet, kind hearted being, someone who my
                            parents would describe as a “seedho saadho dhaiyo chokro.” We went to Zorbas and got some
                            bomb paninis, but at dinner he told me that he had to go back home the next day. This
                            obviously made me super bummed as the next day was Valentine’s day, so I took my best
                            friend (and roommate), Mansi, to lunch at a fast food Chinese restaurant to eat away my
                            feelings.
                        </p>
                        <p>
                            After lunch, we headed back to our dorm room. I remember the elevator doors opening on our
                            floor and seeing a trail of rose petals leading up to our room. I opened the door and there were
                            tea light candles, flowers, and chocolates everywhere. “What is going on?” I asked Mansi; she
                            just nudged me and told me to go inside. I followed the rose petal trail to my closet; I could
                            hear someone chuckling inside, and as I went to open the door, Ricky came out of the closet, no
                            pun intended. He held both of my hands in his and asked me to be his girlfriend.
                        </p>
                        <div className='Story-img'><img src={require('./pictures/story/story-3.jpeg')}/></div>
                        <p>
                            That was almost 10 years ago; we have since built a life together. Even though it took us a
                            decade to finally tie the knot, we knew a long time ago that we were meant for each other and
                            would be spending the rest of our lives together. And while we have each individually matured,
                            Ricky is still the sweet, kind hearted, seedho sadho dhaiyo chokro that I met all those years ago.
                        </p>
                    </div>
                    <div className='Story-desc'>
                        <h2 className='Story-info-section'>RICKY'S STORY</h2>
                        <p>
                            Our story is not your traditional story where we go on dates, start to like each other,
                            and start a relationship. Instead, it’s a story of meeting each other at a party, and one
                            of us not even realizing we had met. It actually started senior year of high school
                            when we both went to a “402” party at the University of Illinois in Champaign.
                        </p>
                        <p>
                            I was with my buddies having a good time, scoping out the place to see if there were
                            any cute girls. Lo and behold, I saw this girl with the brightest smile, it was Keya. It
                            took me some time to build up the courage to ask her if she wanted to dance, and
                            when I did, she didn’t quite say yes, but she didn’t say no either. We had just started
                            dancing, when this girl half my size pulled Keya away while mumbling “get out of
                            here creep;” that girl was her sister Shreya. Till this day, I don’t think Keya will
                            actually admit to that night, but it’s okay, no hard feelings.
                        </p>
                        <p>
                            Fast forward one year later….it was freshman year of college, and of course, there
                            was another party to go to; my friends Rishin and Preet were going to a party by
                            UIC. I didn’t know who was throwing the party, but I asked them to see if I could get
                            an invite; sure enough, they said it was okay to come. While we were driving into the
                            city, I asked whose party are we going to, they said “Shreya’s.” Who would have
                            thought that I would be going to Shreya’s party…after all she did call me a creep.
                        </p>
                        <div className='Story-img'><img src={require('./pictures/story/story-1.jpeg')}/></div>
                        <p>
                            At the party I saw her again and my eyes lit up; she was just as beautiful, and her
                            smile was just as bright, or maybe she just got darker. This time, I didn’t waste any
                            time in approaching her; after playing a few games of pong and flippy cup, Keya and
                            I begin to have a basic conversation. I don’t think she remembered me from the last
                            party, but it’s okay, I wanted to start fresh anyways. We were both enjoying each
                            other’s company, shared a lot of laughs, and we really hit it off. But as the night wore
                            down, my buddies wanted to leave. You’re probably thinking I should have grabbed
                            her number to contact her later, but keep in mind that it was 2008 where Facebook
                            was big, especially chatting on FB. So, I never got her number, but as I was leaving,
                            she did give me a good-bye peck on the cheek, one that I remember to this day, but
                            somehow Keya conveniently doesn’t.
                        </p>
                        <p>
                            A few days later, I realized that I couldn’t get her out of my head, I was literally
                            sprung but didn’t have her number to call or text. So, I sent Keya a few messages on
                            Facebook, followed by a few more, and some more after that…I was just trying to be
                            thorough. She had mentioned that they were going out for Shreya’s birthday, so I
                            took the opportunity to go see her again; looking back at it, maybe that was too
                            aggressive considering it was blizzarding and Rushi and I were the only 2 guys
                            there.
                        </p>
                        <p>
                            As the months went on, and as we started to get closer, I decided to go see her at
                            UofI and kept going back to hang out with her almost every weekend. Of course, my
                            buddies Preet and Rishin came with me. One night, after we came out of a bar, they
                            literally pushed me to the wall and warned me, “if you ever do anything to hurt her,
                            we will beat you up.” I assured them that I wasn’t just playing around, I really liked
                            Keya and was planning to ask her to be my girlfriend.
                        </p>
                        <p>
                            It was Valentine’s day, and what better day to profess my feelings? I laid out flowers
                            leading up to her dorm room from the elevator, sprinkled rose petals all around her
                            floor and made a heart of rose petals on her bed. I left a note that directed her to her
                            closet, where she would find the question that she was looking for. Yes, I stood in
                            the closet this whole time and when she opened it, I asked her to be my girlfriend.
                        </p>
                        <div className='Story-img'><img src={require('./pictures/story/story-4.jpeg')}/></div>
                        <p> 
                            Looking back at it now, what the hell was I thinking coming out of the closet? She
                            never lets me forget it. But don’t worry, I definitely made up for it when I asked her
                            to marry me at the Camp Nou Stadium in Barcelona; now that I will never let her
                            forget.
                        </p>
                        <p>
                            In the end, even despite the worst way of asking a girl out, I got the girl of my
                            dreams. Fast forward almost 10 years, and here we are, ready to start the next
                            chapter of our lives together, still committed and focused on what we want to
                            accomplish together, and what we want to achieve as husband and wife….the rest is
                            history.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}