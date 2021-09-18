import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';

class Custom extends Component {

  render() {
    return (
        <div className="forecast">
        <b className="debatenowhead"><Link to="visualize">Custom Summarize An Article</Link></b><span role="img" aria-label="emoji"> ✍️</span>       
        <p className='yomama'><span className="headlinemeta">
            Articles are long, and are often written in a manner that makes it boring to read, and hard to find the facts.<br/><br/>
            <Link to="/visualize">Summarize Any Article</Link>
            </span></p>
    </div>
    );
  }
}

export default Custom;