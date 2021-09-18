import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Debate3 extends Component {
  render() {
    return (
        <div className="debate1">
        <b className="debatenowhead"><Link to='/'>Cancel Culture</Link></b><span role="img" aria-label="emoji"> 🚫</span>
        <p className='yomama'><span className="headlinemeta">With everything going on, cancel culture is at it's peak. Share your thoughts in the discussion.</span></p><br/>
        <Link to="/article3" className="waitingroom">Read The Article</Link><br/>
        <Link to="/room3" className="waitingroom">Join The Discussion</Link>
    </div>
    );
  }
}

export default Debate3;