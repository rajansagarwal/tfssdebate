import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Subnav extends Component {
  render() {
    return (
      <div>
        <Link to="/">Let's Go!</Link>
      </div>
    );
  }
}

export default Subnav;