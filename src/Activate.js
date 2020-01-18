import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Logo from './Logo2.png';
import { device } from './device';


export default function Activate() {
    return (
        <>
        <Wrapper>
            <NavBar>
                <Link style={{margin: "3px", color: "#FFF5EE"}} to="/follow">Follow</Link>
                <Link style={{margin: "3px", color: "#fffafa"}} to="/home">BRC 2020</Link>
                {firebase.auth().currentUser ?
                <Link style={{margin: "3px", color: "#fffafa"}} onClick={() => firebase.auth().signOut()}>SignOut</Link> :
                <Link style={{margin: "3px", color: "#fffafa"}} to="/">SignIn</Link>
                }
            </NavBar>
            <Container>
                <img src={Logo} alt="Logo" style={{width: "180px", height: "80px"}} />
            </Container>
            <WelcomeText>
                Activate is a ministry of <i>GLOBAL ACTIVATION</i>, a missions organization committed to
                catalyzing Disciple Making Movements 
                <p></p>
                and mobilizing for mission towards the least reached people groups.
                <p></p>
                Our mission is to make, multiply and mobilize disciples for global mission.
                <br/>
                <p><b>Please call or send us a message on 0746622211 or drop an email at info@activatekenya.org to learn more </b> </p>
            </WelcomeText>
        </Wrapper>
        <Footer style={{color: "#87CEFA"}}> © 2019.  Activate Kenya</Footer>
        </>
    )
}

const Wrapper = styled.section`
  padding: 2px;
  // background: #FEFCFC;
`;
const WelcomeText = styled.text`
    // display: flex;
    // flex-wrap: wrap;
    font-size: 13px;
    position: absolute;
    top: 160px;
    margin-left: 30px;
    font-family: 'Roboto Mono', monospace;
    @media ${device.mobileL} { 
        margin-left: 20px;
    }
`;
const Container = styled.div`
        position: absolute;
        top: 55px;
        margin-left: 30px;
        width: 250px;
        height: 60px;
`;
const NavBar = styled.section`
    overflow: hidden;
    position: fixed;
    height: 20px;
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
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    @visited {
        color: blue;
    }
    color: white;
    text-align: center;
    font-size: 23px;
    font-family: 'Open Sans Condensed', sans-serif;
`;