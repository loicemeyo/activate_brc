import React from 'react'
import styled from 'styled-components';
import firebase from 'firebase/app';
import { Data } from './Data';
import { device } from './device';
import { Link } from 'react-router-dom';
export default function References() {
    const name = firebase.auth().currentUser ? firebase.auth().currentUser.displayName : "Hello"
    console.log(Data, 'Data')
    console.log(Data[0], 'first')
    const Scriptures = Data;
    console.log(Scriptures, 'scrree')
    return (
        <div>
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
                </QuoteText>
                <WelcomeText>
                <p><b>{name}</b>, Welcome to 2020 Bible Reading Challenge.</p>
                    {firebase.auth().currentUser ? <p>We're glad you have joined us!</p> : <p>Please <Link to="/">sign in</Link> here to register for the challenge!</p> }
                    <p></p>
                    <p>Below are scripture references to read this week: </p>
                    <p></p>
                        {Scriptures.map((Scripture, key) => (
                            <OuterDiv key={key}>
                                <DataDiv>Day {Scripture.Day}</DataDiv>
                                <DataDiv>{Scripture.Date}</DataDiv>
                                <DataDiv>{Scripture.Scripture}</DataDiv>
                            </OuterDiv>
                        ))}
                </WelcomeText>
                <Footer>Initiated by <Link style={{color: "#87CEFA"}} to="/activate">Activate Kenya</Link></Footer>
            
        </div>
    )
}
const WelcomeText = styled.div`
    font-size: 12px;
    position: absolute;
    top: 105px;
    margin-left: 30px;
    font-family: 'Roboto Mono', monospace;
    @media ${device.mobileL} { 
        position: absolute;
        top: 200px;
        font-size: 11px;
        z-index: 1;
    }
`;
const QuoteText = styled.div`
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
const OuterDiv = styled.div`
    display: flex;
`;
const DataDiv = styled.div`
    padding: 5px;
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
