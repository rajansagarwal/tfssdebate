import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';
import CountUp from 'react-countup';


class Leaderboard extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
            <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>Leaderboard</b>
    
    <p className='yomama'><span className="headlinemeta">Your points are determined by the time you are active on the app. Compete to see who has the most points and certifications!<br/>
    <hr className="solid"/>
    <div className="leaderboardchild"><i>
        
        <CountUp
            start={91.3}
            end={100000}
            duration={10000000}
            separator=" "
            decimals={1}
            decimal="."
            prefix="Veer Sandhu ~ Current Points: "
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
</CountUp></i></div>
<div className="leaderboardchild"><i>
        
        <CountUp
            start={79}
            end={100000}
            duration={4000000}
            separator=" "
            decimals={1}
            decimal="."
            prefix="Jaival Patel ~ Current Points: "
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
</CountUp></i></div>
<div className="leaderboardspan"><i>
        
        <CountUp
            start={78.2}
            end={100000}
            duration={5000000}
            separator=" "
            decimals={1}
            decimal="."
            prefix="Rajan Agarwal (You) ~ Current Points: "
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
</CountUp></i></div>
<div className="leaderboardchild"><i>
        
        <CountUp
            start={57}
            end={100000}
            duration={7000000}
            separator=" "
            decimals={1}
            decimal="."
            prefix="Hacky McHacker ~ Current Points: "
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
</CountUp></i></div>

    <button className="thisbutton">Find Friends</button>{" "}
    <button className="thisbutton">Get Certifications</button>
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Leaderboard;