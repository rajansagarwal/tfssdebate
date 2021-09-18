import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom';
import Debate1 from '../components/Debate1';
import Debate2 from '../components/Debate2';
import Debate3 from '../components/Debate3';
import Debate4 from '../components/Debate4';
import "../App.css";
import './pages.css';

export default function Waitingroom() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={9}>
              <br/><h2 className="waithead">Debate Waiting Room</h2>
              <p>See anything you're interested in? These are <b>Trending.</b></p>
              </Col>
              <Col sm={3}>
              
              </Col>
          </Row>
<br/>
          <Row>
            <Col sm={6} className="">
            <Debate1/>
            </Col>
            <Col sm={6} className="">
            <Debate2/>
            </Col>
            
          </Row><br/>
          <Row>
            <Col sm={6} className="">
            <Debate3/>
            </Col>
            <Col sm={6} className="">
            <Debate4/>
            </Col>

            
          </Row><br/>
          <Row>
              <Col sm={4}>
              <p><Link to="/dashboard"><span role="img" aria-label="emoji">👈</span> Go back to Dashboard</Link></p>
              </Col>
              <Col sm={3.3}></Col>
              <Col sm={4.7}>
              <p><Link to="/dashboard"><span role="img" aria-label="emoji">📜</span> Terms, Conditions, Privacy Policy</Link></p>
              </Col>
          </Row>
          
          
        </header>
      </Container>
    </div>
  );
}
