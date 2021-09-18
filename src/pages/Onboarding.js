import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';

export default function Onboarding() {
  return (
    <div className="App getready">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">Let's Get Started.</h2>
            <p className="center">Here's a Few Things About Diplomatica</p>
            
          </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="">
                <p>We are fostering an environment of political scientists through a gamified system. Here's what you can do.</p>
              <h5 className="manifesto linkheader">
              <ol>
                  <li>Read AI summarized articles about current global issues, designed to be easy to read.</li><br/>
                  <li>Debate against people with opposing interests than you to spark conversation and your inner debater.</li><br/>
                  <li>Compete against your friends by debating, reading articles and taking action within the Diplomatica community</li>
              </ol>
              
              </h5>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
              <Col sm={2}>
              </Col>
              <Col sm={3}>
              <p><Link to="/"><span role="img" aria-label="emoji">👈</span> Learn About Us <span role="img" aria-label="emoji"></span></Link></p>
              </Col>
              <Col sm={2}></Col>
              <Col sm={4}>
              <p><Link to="/dashboard"><span role="img" aria-label="emoji"></span> Continue to Dashboard <span role="img" aria-label="emoji">👉</span></Link></p>
              </Col>
              <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
