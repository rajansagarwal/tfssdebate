import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Debate4 extends Component {
  render() {
    return (
        <div className="debate1">
        <b className="debatenowhead"><Link to='/room4'>General Discussion</Link></b><span role="img" aria-label="emoji"> 🗣️</span>
        <p className='yomama smol'><span className="headlinemeta smol">Interested in debating a different topic? Start one in the general discussion channel! We suggest global issues, electoral candidate discussions, healthcare analysis and economic examination!</span></p><br/>
        <Link to="/room4" className="waitingroom">Join The Discussion</Link>
    </div>
    );
  }
}

export default Debate4;