import React, { Component } from "react";
import "./Component.css";

class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = {
          random: null,
        }
      }
    
      min = 1;
      max = 5;
    
      handleClick = () => {
        this.setState({random: this.min + (Math.floor(Math.random() * (this.max - this.min)))});
      };

  render() {
    return (
        <div className="stats">
        <b className="debatenowhead" onClick={this.handleClick}><a onClick={this.handleClick}><u>My Recent Statistics</u></a></b><span role="img" aria-label="emoji"> 📊</span>       
        <p className='yomama'><span className="headlinemeta">
            <i>11:28am</i> A Discussion About Vaccines<br/>
            <i>12:39pm</i> The Canadian Election<br/><br/>
            Net Articles Read: {this.state.random}<br/>
            Reading Time: {2 * this.state.random} mins<br/><br/>

            Events Competed: 1
            </span></p>
    </div>
    );
  }
}

export default Stats;