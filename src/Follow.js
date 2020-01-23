import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import { device } from './device';

export default function Follow () {
    return (
            <>
            <Wrapper>
                <NavBar>
                        <Link style={{margin: "3px", color: "#FFF5EE"}} to="/activate">Activate</Link>
                        <Link style={{margin: "3px", color: "#fffafa"}} to="/home">BRC 2020</Link>
                        {firebase.auth().currentUser ?
                        <Link style={{margin: "3px", color: "#fffafa"}} onClick={() => firebase.auth().signOut()}>SignOut</Link> :
                        <Link style={{margin: "3px", color: "#fffafa"}} to="/">SignIn</Link>
                        }
                </NavBar>
                <QuoteText>
                "If anyone should come after me he must deny himself,
                </QuoteText>
                <QuoteTextII>
                 take up His cross and follow me...”― Jesus of Nazareth
                {/* “Until a man begins to read, then He will discover himself.” ― Lailah Gifty Akita */}
                </QuoteTextII>
                {/* <Title>FOLLOW</Title> */}
                <WelcomeText>
                    <br/>
                    <p>Jesus called ordinary people to follow Him as disciples. Then He turned them into the leaders of the</p>
                    <p>greatest spiritual movement ever in history - a movement that continues to change the world till this day.</p>
                    <p></p>
                    <p>Jesus still calls ordinary people today to follow Him as disciples, in total obedience, not a passive</p>
                    <p>confession of faith. Without true discipleship, there is no Christianity.</p>
                    <p></p>
                    <p><i>FOLLOW</i> is a journey to experience what it means to be an OBEDIENT DISCIPLE of Jesus who makes disciples that multiply.</p>
                    <p>Hear the invitation… answer the call… take the next step and FOLLOW!</p>
                    <ul>
                        <ListItem style={{"list-style-type": "square"}}>Join or start a FOLLOW Group</ListItem>
                        <ListItem style={{"list-style-type": "square"}}>Opt in for the FOLLOW e-Newsletter</ListItem>
                        <li style={{"list-style-type": "square"}}> 
                            <a href="https://www.youtube.com/watch?v=2gWjVybf6_Q&list=PL4Ji-3Z8niZM41RM-zzagjw550Oh6JXp_"> Watch a FOLLOW video
                            </a>
                        </li>
                        <li style={{"list-style-type": "square"}}> 
                            <a href="https://www.facebook.com/groups/1385507514949821/?source_id=102033831291368"> Join the FOLLOW FB group
                            </a>
                        </li>
                    </ul>
                    <p></p>
                    <p><b>Call or send us a message on 0746622211, or drop an email at info@activatekenya.org to participate</b></p>
                </WelcomeText>
            </Wrapper>
            <Footer>Initiated by <Link style={{color: "#87CEFA"}} to="/activate">Activate Kenya</Link></Footer>
            </>
        )
    }

const Wrapper = styled.section`
  padding: 2px;
//   background: #FEFCFC;
//   display: flex;
//   flex-direction: row;
//   justify-space: space=between;

`;
const ListItem = styled.li`
    list-style-type: square;
    display:list-item;
    list-style-position:outside;
`;

const WelcomeText = styled.div`
    font-size: 12px;
    position: absolute;
    top: 160px;
    margin-left: 30px;
    font-family: 'Roboto Mono', monospace;
    @media ${device.mobileL} { 
        position: absolute;
        top: 170px;
        font-size: 11.5px;
        margin-left: 20px;
    }
`;
const QuoteText = styled.div`
    font-size: 20px;
    position: absolute;
    top: 90px;
    margin-left: 30px;
    margin-left: 30px;
    font-family: 'Beth Ellen', cursive;
    @media ${device.mobileS} { 
        position: absolute;
        top: 50px;
        font-size: 15px;
    }
`;
const QuoteTextII = styled.div`
    font-size: 20px;
    position: absolute;
    top: 200px;
    margin-left: 30px;
    margin-left: 30px;
    font-family: 'Beth Ellen', cursive;
    @media ${device.mobileS} { 
        position: absolute;
        top: 100px;
        font-size: 15px;
    }
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
        position: fixed;
        top: 0;
    }
    `;
const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    // height: 23px;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 20px;
    font-family: 'Open Sans Condensed', sans-serif;
`;