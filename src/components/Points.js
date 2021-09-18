import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';

class Points extends Component {
  render() {
    return (
        <div className="points" style={{fontSize: '20px'}}>
        Current Points: 39 ∆<br/>
        <Link to="/dashboard">View Your Profile</Link>
    </div>
    );
  }
}

export default Points;