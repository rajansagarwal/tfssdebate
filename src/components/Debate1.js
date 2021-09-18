import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Debate1 extends Component {
  render() {
    return (
        <div className="debate1">
        <b className="debatenowhead"><Link to='/'>The Vaccine Passport</Link></b><span role="img" aria-label="emoji"> 🛂</span>
        <p className='yomama'><span className="headlinemeta">Recent Canadian Law will now mandate the ownership of a digital vaccine passport for usage in small businesses, large areas and the vast moajority of enterprises. Some say that this initiative has been postponed, others disagree with the motion as a whole. What do you think?</span></p><br/>
        <Link to="/article" className="waitingroom">Read Our Article</Link><br></br>
        <Link to="/room1" className="waitingroom">Join The Discussion</Link>
    </div>
    );
  }
}

export default Debate1;