import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { Container, Col, Row } from 'react-grid-system';

class Headline3 extends Component {
  render() {
    return (
        <div className="headline">
            <Row>
            <Col sm={2} className="thisoneyuh">
                    <img src="https://cloud-lmslzrlul-hack-club-bot.vercel.app/0img_0153_2.jpg" width="60px" style={{borderRadius: '50%'}}/>
                </Col>
                <Col sm={8}>
        <b><span className="profilename">Your Profile</span></b>
        </Col></Row>
        <div className="points" style={{fontSize: '15px', marginTop: '-20px'}}>
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
    <Link to="/profile" className="read"><span className="read">Expand Profile</span></Link>{"      "}
    <Link to="/" className="read"><span className="read">Learn About Diplomatica</span></Link>

    </div>
    );
  }
}

export default Headline3;