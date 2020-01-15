import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 
import Home from './Home';
import { device } from './device';
class App extends Component {
  state={
    isSignedIn: false
    }
  uiConfig={
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  async componentDidMount () {
    await firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }
  render () {
    return (
      <div>
        {this.state.isSignedIn? (
          <Home/>
        ) : (
          <Wrapper>
            <Brc>2020</Brc>
            <BrcText>Bible Reading Challenge</BrcText>
              <SignIn>
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
              </SignIn>
              <InitiatedText>Initiated by <Link style={{color: "#87CEFA"}} to="/activate">Activate Kenya</Link></InitiatedText>
          </Wrapper> 
          )}
      </div>
      )
  }
}

const Wrapper = styled.section`
  padding: 2px;
  // background: #FEFCFC;
`;
const Brc = styled.text`
  font-size: 120px;
  position: absolute;
  top: 120px;
  margin-left: 30px;
  font-family: 'Roboto Mono', monospace;
  @media ${device.mobileL} { 
    top: 100px;
    margin-left: 20px;
    font-size: 100px;
  }
`;
const BrcText = styled.text`
  font-size: 45px;
  font-family: 'Merienda', cursive;
  position: absolute;
  top: 310px;
  margin-left: 30px;
  @media ${device.mobileL} { 
    top: 260px;
    font-size: 40px;
  }
`;
const SignIn = styled.button`
  position: absolute;
  top: 400px;
  margin-left: 30px;
  background:  #DCDCDC;
  border-radius: 10px;
  // font-size: 50px;
  padding: 0.25px;
  @media ${device.mobileL} { 
    top: 450px;
  }
`;
const InitiatedText = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 23px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export default App;
