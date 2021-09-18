import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Forecast extends Component {
  render() {
    return (
        <div className="custom">
        <b className="debatenowhead"><Link to='/visualize'>Visualize Global Politics</Link></b><span role="img" aria-label="emoji"> ⚖️</span>
        <p className='yomama'><span className="headlinemeta">
            Data Visualization for Politics, Geography and Social Issues. Learn more about the world we live in.<br/><br/>
            <Link to="/visualize">Try It Out</Link>
            </span></p>
    </div>
    );
  }
}

export default Forecast;