import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { device } from './device';
import './App.css'

export default function Home() {
    const name = firebase.auth().currentUser ? firebase.auth().currentUser.displayName : "Hello"
    return (
        <div>
            <Wrapper>
                <NavBar>
                        <Link style={{margin: "3px", color: "#FFF5EE"}} to="/activate">Activate</Link>
                        <Link style={{margin: "3px", color: "#fffafa"}} to="/follow">Follow</Link>
                        {firebase.auth().currentUser ?
                        <Link style={{margin: "3px", color: "#fffafa"}} onClick={() => firebase.auth().signOut()}>SignOut</Link> :
                        <Link style={{margin: "3px", color: "#fffafa"}} to="/">SignIn</Link>
                        }
                </NavBar>
                <QuoteText>
                "The Bible was not given for our information but for our transformation.”― Dwight Lyman Moody
                {/* “Until a man begins to read, then He will discover himself.” ― Lailah Gifty Akita */}
                </QuoteText>
                <WelcomeText>
                    <p><b>{name}</b>, Welcome to 2020 Bible Reading Challenge.</p>
                    {firebase.auth().currentUser ? <p>We're glad you have joined us!</p> : <p>Please <Link to="/">sign in</Link> here to register for the challenge!</p> }
                    <p></p>
                    <p>One of the most beneficial spiritual disciplines you can ever practice is reading the entire Bible from cover to cover.</p>
                    <p>This will give you a broad sweep of God's story as it unfolds throughout human history and your place in His grand purposes.</p>
                    <p>You are not an insignificant speck floating through time but an important part of what God is doing today. </p>
                    <p></p>
                    <p>However, you can only discover your purpose as you prepare your heart to seek God, spending time in His Word daily. </p>
                    <p>His voice becomes clearer to you when you acquaint yourself with His-story (past), His presence (present) and  </p>
                    <p>His plans (future).</p>
                    <p></p>
                    <p>This 2020 Bible Reading Challenge will require you to follow the plan to: </p>
                    <p>1. READ the daily passages </p>
                    <p>2. OBEY what God shows you and </p>
                    <p>3. SHARE particular insights with others </p>
                    <p></p>
                    <p>To make the journey even more exciting, you can join our online community at <a href="https://www.facebook.com/groups/2565141490259311/?source_id=102033831291368"> FB BRC 2020</a> to share lessons, </p>
                    <p>ask questions, participate in the monthly Facebook Live forum and be notified of periodic events you can attend </p>
                    <p> with others on this journey of discovering God through the scriptures. </p>
                    <p>By signing up for this, you will receive daily notifications of the passage for the day in your email box.</p>
                    <p>I'm looking forward to this journey with you as together we follow Jesus daily through the pages of the Bible </p>
                    <p>and apply His Word to our lives in this world. </p>
                </WelcomeText>
                <Name>Mark Kolo - International Team Leader</Name>
            </Wrapper>
            {/* <Footer>Initiated by <Link style={{color: "#87CEFA"}} to="/activate">Activate Kenya</Link></Footer> */}
        </div>
    )
}

const Wrapper = styled.section`
  padding: 2px;
  // background: #FEFCFC;
  display: flex;
  flex-direction: row;
  justofy-space: space=between;

`;
const WelcomeText = styled.text`
    font-size: 12px;
    position: absolute;
    top: 115px;
    margin-left: 30px;
    font-family: 'Roboto Mono', monospace;
    @media ${device.mobileL} { 
        position: absolute;
        top: 200px;
        font-size: 11px;
        z-index: 1;
    }
`;
const QuoteText = styled.text`
    font-size: 18px;
    position: absolute;
    top: 90px;
    margin-left: 30px;
    margin-left: 30px;
    font-family: 'Beth Ellen', cursive;
    @media ${device.mobileS} { 
        position: absolute;
        top: 50px;
        margin-top: 10px;
        font-size: 15px;
    }
`;
const Name = styled.text`
    font-size: 18px;
    position: absolute;
    top: 630px;
    margin-left: 30px;
    font-family: 'Beth Ellen', cursive;
    @media ${device.mobileL} { 
        position: absolute;
        top: 1000px;
        font-size: 12px;
    }
`;
const NavBar = styled.section`
    overflow: hidden;
    position: fixed;
    height: 10px;
    width: 96%;
    top: 0;
    margin-left: 5px;
    margin-right: 40px;
    margin: 3px;
    background: #333;
    color: #FFFFFF !important;
    font-size: 19px;
    text-align: right;
    padding: 14px 40px 16px 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Open Sans Condensed', sans-serif;
    @media ${device.mobileL} { 
        width: 83%;
        position:sticky;
        top: 0;
    }
    `;
const Footer = styled.div`
    position: fixed;
    overflow: hidden;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 23px;
    font-family: 'Open Sans Condensed', sans-serif;
    @media ${device.mobileL} { 
        width: 100%;
        // overflow: hidden;
        position: absolute;
        bottom: 0;
        z-index: 0;
    }
`;