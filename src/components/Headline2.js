import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Headline2 extends Component {
  render() {
    return (
<div className="headline">
      <div className="thisthis">Vaccine Passport Details</div>
      <p className="metameta"><span className="metameta">New details have rolled out, stay informed.</span></p>
      <Link to="/article2" className="read">Read AI Summary.</Link>
  </div>
    );
  }
}

export default Headline2;