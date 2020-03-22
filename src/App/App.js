import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { Navbar } from '../components/Navbar/Navbar';
import { Home } from '../components/Home/Home';
import { Login } from '../components/Login/Login';
import { News } from '../components/News/News';
import { Profile } from '../components/Profile/Profile';
import firebase from '../Api/Firebase';

export const App = () => {
  const [firebaseInit, setFirebaseInit] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val=> {
      setFirebaseInit(val)
    })
  })

  return firebaseInit ? (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  ) : <p>Initializing firebase</p>;
};
