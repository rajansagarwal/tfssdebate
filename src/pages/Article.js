import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';

export default function Onboarding() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">Headline</h2>
            <p className="center">Resource</p>
            
          </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="">
                <p>We are fostering an environment of political scientists through a gamified system. Here's what you can do.</p>
            
             
              <p><Link to="/dashboard"><span role="img" aria-label="emoji">👈</span> Go back to Dashboard</Link></p>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
