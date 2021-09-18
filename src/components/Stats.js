import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Stats extends Component {
  render() {
    return (
        <div className="stats">
        <b className="debatenowhead"><Link to='/'>My Recent Statistics</Link></b><span role="img" aria-label="emoji"> 🎙️</span>
        <p className='yomama'><span className="headlinemeta"></span></p>
    </div>
    );
  }
}

export default Stats;