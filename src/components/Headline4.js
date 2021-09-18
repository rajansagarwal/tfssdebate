import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

class Headline4 extends Component {
  render() {
    return (
        <div className="headline">
        <b>Headline</b>
        <div className="points" style={{fontSize: '20px'}}>
            <Link to="/dashboard">View Your Profile</Link>
            <div>
            <CountUp
  start={0}
  end={100000}
  duration={3500000}
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
        <p className='yomama'><span className="headlinemeta">Headline meta content</span></p>
        <Link to="/" className="read">Read AI Summary.</Link>
    </div>
    );
  }
}

export default Headline4;