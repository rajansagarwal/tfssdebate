import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-grid-system';
import CountUp from 'react-countup';

class Profilecard extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={3} className="thisoneyuh">
                    <img src="https://cloud-lmslzrlul-hack-club-bot.vercel.app/0img_0153_2.jpg" alt="profile" width="130px" style={{borderRadius: '50%'}}/>
                </Col>
                <Col sm={8.5}>
                <b>Rajan Agarwal</b>
    
    <p className='yomama'><span className="headlinemeta"><i>
        
    <CountUp
  start={78.2}
  end={100000}
  duration={5000000}
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

        </i>I am a 16 year old student leader driven by innovation. My actions on a daily basis are built on the foundation of creation and change.<br/>
    <button className="thisbutton"><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Sign Out</Link></button>{"  "}
    <button className="thisbutton"><Link to="/dashboard" style={{textDecoration: 'none', color: 'white'}}>Back to Dashboard</Link></button>
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Profilecard;