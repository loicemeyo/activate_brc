import React from 'react';
import './App.css';
import firebase from 'firebase';
import Home from './Home';
import Landing from './Landing';
import Follow from './Follow';
import Activate from './Activate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const config = {
  apiKey: "AIzaSyAuwzIEheWzkLjH2nzj9gG1_gwT2wEpK_g",
  authDomain: "activatekenya.org",
  databaseURL: "https://brc2020-a64db.firebaseio.com",
  projectId: "brc2020-a64db",
  storageBucket: "brc2020-a64db.appspot.com"
};
firebase.initializeApp(config);

export default function App() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/activate' exact component={Activate}/>
        <Route path='/follow' exact component={Follow}/>
      </Switch>
      </BrowserRouter>
      )
  }
