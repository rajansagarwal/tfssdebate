import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Headline extends Component {
  render() {
    return (
      <div className="headline">
      <div className="thisthis">Last Minute Voter's Guide</div>
      <p className="metameta"><span className="metameta">The election is coming up. Here's what you need to know.</span></p>
      <Link to="/article" className="read">Read AI Summary.</Link>
  </div>
    );
  }
}

export default Headline;