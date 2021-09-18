import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';


export default function Home() {
  return (
    <div className="App getready">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">We are Diplomatica</h2>
            <p className="center">Gamifying Political and Social Awareness</p>
            
          </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="">
              <p className='meta'>We want to build a world of political scientists, who base facts and decisions off of events and know how to get their point across. Sadly, our world </p>
            <Row>
              
            </Row>
              <h5 className="manifesto linkheader">The Platform</h5>
              <p className="p-manifesto">
Social Media is distracting. Lorem Ipsum

              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
              <Col sm={2}>
              </Col>
              <Col sm={3}>
              <p><Link to="/"><span role="img" aria-label="emoji"></span><span role="img" aria-label="emoji"></span></Link></p>
              </Col>
              <Col sm={3}></Col>
              <Col sm={4}>
              <p><Link to="/onboarding"><span role="img" aria-label="emoji"></span> Onboarding <span role="img" aria-label="emoji">👉</span></Link></p>
              </Col>
              <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
