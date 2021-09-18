import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';

export default function Article4() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">US military admits it killed 10 civilians and targeted wrong vehicle in Kabul airstrike</h2>
            <p className="center">Source: <a href="https://www.cnn.com/2021/09/17/politics/kabul-drone-strike-us-military-intl-hnk/index.html">CNN</a>, Summarized By AI</p>
        
          </Col>
          </Row>
          <Row>
            <Col sm={12} className="">
                <p className="articletext">McKenzie told reporters that the strike, which he said killed seven children, was a "mistake" and offered an apology. The investigation released Friday found that all of those killed in the residential compound were civilians. The military-based the strike on a reasonable certainty standard to launch the strike on the vehicle. Tragically, it was the wrong vehicle, a US military official familiar with the investigation told CNN earlier Friday, adding that reasonable certainty is not 100% certainty. Previously, US Central Command pointed to "significant secondary explosions" as evidence of a "substantial amount of explosive material" in the vehicle.
<br/>
<br/>
<Row>
              <Col sm={5}>
              <p><Link to="/dashboard"><span role="img" aria-label="emoji">👈</span> Go back to Dashboard</Link></p>
              </Col>
              <Col sm={3}></Col>
              <Col sm={4}>
              <p><Link to="/visualize">Summarize A Custom Article <span role="img" aria-label="emoji">📰</span></Link></p>
              </Col>
          </Row>

</p>
            
             
              
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
