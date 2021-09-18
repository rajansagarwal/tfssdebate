import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Headline4 extends Component {
  render() {
    return (
        <div className="headlinecustom">
        <b>Custom</b><br/>
        <p className="yomama"><span className="headlinemeta">Use our custom ML tools to summarize an article.</span></p>
        <Link to="/" className="read line">Try Out The Tool</Link>
    </div>
    );
  }
}

export default Headline4;