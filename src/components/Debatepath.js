import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Debatepath extends Component {
  render() {
    return (
        <div className="debatepath">
        <b className="debatenowhead"><Link to='/'>Debate Now</Link></b><span role="img" aria-label="emoji"> 🎙️</span>
        <p className='yomama'><span className="headlinemeta">Immerse yourself into a LIVE debate with a random person with different views. We have quick facts to support your arguments and a points system to quantify your argumentative skills. We suggest <Link to="/waitingroom">The Canadian Election</Link><br/><br/>
            <i>12:39pm</i> The Canadian Election<br/><br/>
            
        
        <Link to="/waitingroom" className="waitingroom">Go to Waiting Room</Link></span></p>
    </div>
    );
  }
}

export default Debatepath;