import React from "react";
import "./App.css";
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Article from './pages/Article';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Waitingroom from './pages/Waitingroom';
import Debateroom1 from './pages/Debateroom1';
import Debateroom2 from './pages/Debateroom2';
import Debateroom3 from './pages/Debateroom3';
import Debateroom4 from './pages/Debateroom4';
import Visualize from './pages/Visualize';
import Profile from './pages/Profile';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/onboarding">
        <Onboarding/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/article">
        <Article/>
      </Route>
      <Route path="/article2">
        <Article2/>
      </Route>
      <Route path="/article3">
        <Article3/>
      </Route>
      <Route path="/article4">
        <Article4/>
      </Route>
      <Route path="/waitingroom">
        <Waitingroom/>
      </Route>
      <Route path="/room1">
        <Debateroom1/>
      </Route>
      <Route path="/room2">
        <Debateroom2/>
      </Route>
      <Route path="/room3">
        <Debateroom3/>
      </Route>
      <Route path="/room4">
        <Debateroom4/>
      </Route>
      <Route path="/visualize">
        <Visualize/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
