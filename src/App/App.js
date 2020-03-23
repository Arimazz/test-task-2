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
          <Route path="/test-task-1/" exact>
            <Home />
          </Route>
          <Route path="test-task-1//news">
            <News />
          </Route>
          <Route path="test-task-1//login">
            <Login />
          </Route>
          <Route path="test-task-1//profile">
            <Profile />
          </Route>
        </Switch>
      </main>
    </Router>
  </Provider>
);
