import React from 'react'
import styled from 'styled-components';
import firebase from 'firebase/app';
import { Data } from './Data';
import { device } from './device';
import { Link, useHistory } from 'react-router-dom';
export default function References() {
    const history = useHistory();
    const signOutHandler = () => {
        firebase.auth().signOut().then(() => history.push('/'))
    }
    const isLoggedIn = firebase.auth().currentUser;
    const name = isLoggedIn ? firebase.auth().currentUser.displayName : "Hello"
    const Scriptures = Data;
    return (
        <div>
            <NavBar>
                        <Link style={{margin: "3px", color: "#FFF5EE"}} to="/activate">Activate</Link>
                        <Link style={{margin: "3px", color: "#fffafa"}} to="/follow">Follow</Link>
                        {isLoggedIn ?
                        <SignOut onClick={signOutHandler}>SignOut</SignOut> :
                        <Link style={{margin: "3px", color: "#fffafa"}} to="/">SignIn</Link>
                        }
                </NavBar>
              <QuoteText>
                "The Bible was not given for our information but for our transformation.”― Dwight Lyman Moody
                </QuoteText>
                <WelcomeText>
                <p><b>{name}</b>, Welcome to 2020 Bible Reading Challenge.</p>
                    {isLoggedIn ? <p>We're glad you have joined us!</p> : <p>Please <Link to="/">sign in</Link> here to register for the challenge!</p> }
                    <p></p>
                    <p>Below are scripture references to read this week: </p>
                    <p></p>
                    <Container>
                    <Card>
                                <img src="https://source.unsplash.com/daily?bible"  alt='complementary-image' width="440" height="220"></img>

                            {Scriptures.map((Scripture, key) => (

                            <Wrapper key={key}>
                                {/* <img src="https://source.unsplash.com/daily?bible"  alt='complementary-image' width="440"></img> */}
                                <Item style={{background: "#98ffd9"}}> Day {Scripture.Day}, {Scripture.Date},
                                <Sspan> {Scripture.Scripture}</Sspan>
                                </Item>
                                {/* <DataDiv>{Scripture.Date}</DataDiv>
                                <DataDiv>{Scripture.Scripture}</DataDiv> */}
                                </Wrapper>

                        ))}
                        </Card>
                        </Container>
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
    z-index: 1;
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
    z-index: 1;
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
        position: absolute;
        bottom: 0;
        z-index: 0;
    }
`;
const SignOut = styled.div`
    margin: 3px;
    color: #fffafa;
    text-decoration: underline;
    cursor: pointer;
`;
const Container = styled.div`
position: absolute;
overflow: hidden;
top: 115px;
margin-left: 8px;
box-sizing: border-box;
font-family: Poppins, sans-serif; 
height: 100vh;
display: grid;
place-items: center;
`;

const Card = styled.div`
// background-color: #FFFFF9;
border-radius: 1rem;
// overflow: hidden;
box-shadow: 0px 30px 20px -10px rgba(0, 0, 0, 0.2); 
background-color: #F4F4F4;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2px 10px 2px 10px;
`;
const Item = styled.div`
text-align: center;
  padding: 20px 10px 20px 10px;
  border-radius: 5px;
  width: 400px;
  margin-bottom: 10px;
`;
const Sspan = styled.span`
text-transform: uppercase;
  font-weight: bold;
`;




