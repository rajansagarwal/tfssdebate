import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

class Headline3 extends Component {
  render() {
    return (
        <div className="headline">
        <b>Your Profile</b>
        <div className="points" style={{fontSize: '15px'}}>
            <CountUp
  start={76.2}
  end={100000}
  duration={8000000}
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
    <Link to="/" className="read">Learn About Diplomatica</Link>{"      "}
        <Link to="/" className="read">Expand Profile</Link>
    </div>
    );
  }
}

export default Headline3;