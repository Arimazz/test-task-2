import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { store } from '../Store';
import './App.css';
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { News } from '../components/News';
import { Profile } from '../components/Profile';

export const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <main className="main">
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
      </main>
    </Router>
  </Provider>
);
