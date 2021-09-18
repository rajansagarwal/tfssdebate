import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Forecast extends Component {
  render() {
    return (
        <div className="custom">
        <b className="debatenowhead"><Link to='/'>Visualize Global Politics</Link></b><span role="img" aria-label="emoji"> ⚖️</span>
        <p className='yomama'><span className="headlinemeta">Data Visualization for the current global, poltiical, geographic and social state. </span></p>
        <Link to="/waitingroom" className="waitingroom">Try It Out!</Link>
    </div>
    );
  }
}

export default Forecast;