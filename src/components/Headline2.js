import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Headline2 extends Component {
  render() {
    return (
<div className="headline">
      <div className="thisthis">US Military and Kabul</div>
      <p className="metameta"><span className="metameta">US Military admits it killed 10 civilians and targeted a wrong vehicle in aistrike.</span></p>
      <Link to="/article4" className="read">Read AI Summary.</Link>
  </div>
    );
  }
}

export default Headline2;