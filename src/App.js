import React from "react";
import "./App.css";
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Article from './pages/Article';
import Waitingroom from './pages/Waitingroom';
import Debateroom1 from './pages/Debateroom1';

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
      <Route path="/waitingroom">
        <Waitingroom/>
      </Route>
      <Route path="/room1">
        <Debateroom1/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
