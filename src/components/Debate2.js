import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Debate2 extends Component {
  render() {
    return (
        <div className="debate1">
        <b className="debatenowhead"><Link to='/'>The Canadian Election</Link></b><span role="img" aria-label="emoji"> 🇨🇦 🗳️</span>
        <p className='yomama'><span className="headlinemeta">A key part of being a political scientist and active citizen is being socially aware. With an election in the coming days, it is important to know who is running, what they aim to provide as a candidate and their goals for the future of the nation. </span></p><br/>
        <Link to="/waitingroom" className="waitingroom">Read The Article</Link><br/>
        <Link to="/room2" className="waitingroom">Join The Discussion</Link>
    </div>
    );
  }
}

export default Debate2;