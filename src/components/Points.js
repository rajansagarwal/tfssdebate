import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

class Points extends Component {


  render() {
    return (
        <div className="points" style={{fontSize: '20px'}}>
            <Link to="/dashboard">View Your Profile</Link>
            <div>
            <CountUp
  start={0}
  end={100000}
  duration={4000000}
  separator=" "
  decimals={1}
  decimal="."
  prefix="Points Total: "
  delay={0}
  suffix=" ∆"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
            </div>
        
    </div>
    );
  }
}

export default Points;