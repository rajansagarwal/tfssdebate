import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Headline3 extends Component {
  render() {
    return (
        <div className="headline">
        <b>Headline</b>
        <p className='yomama'><span className="headlinemeta">Headline meta content</span></p>
        <Link to="/" className="read">Read AI Summary.</Link>
    </div>
    );
  }
}

export default Headline3;