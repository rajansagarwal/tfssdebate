import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';
import CountUp from 'react-countup';


class Mypoints extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
            <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>Redeem</b>

                
    
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
        </i>With your points, you can unlock premium features. The longer you spend on the app, the more points you earn!<br/>
        Starting off with the application, you get:
        <ul style={{marginTop: '10px'}}>
            <li>10 Summarized Articles</li>
            <li>Unlimited Talking Minutes in Trending Discussions</li>
            <li>60 minutes in General Discussions</li>
        </ul>
        With Your Points, You Can Get...
        <ul style={{marginTop: '10px'}}>
            <li>15 Summarized Articles (700 ∆)</li>
            <li>30 Summarized Articles (1000 ∆)</li>
            <li>50 Summarized Articles (2200 ∆)</li>
            <li>60 Minutes General Discussions (500 ∆)</li>
            <li>Unlimited Minutes Overall (2500 ∆)</li>
        </ul>
        If you are a developer,
        <ul style={{marginTop: '10px'}}>
            <li>Exclusive API Access (2000 ∆)</li>
            <li>Build A Project with API (+1000 ∆)</li>
            <li>Pull Request (+500 ∆)</li>
            <li>Submit An Issue (+100 ∆)</li>
        </ul>
    </span></p>
                </Col>
            </Row>
    </div><br/>
    </Container>
    );
  }
}

export default Mypoints;