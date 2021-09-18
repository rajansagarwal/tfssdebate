import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import "../App.css";
import './pages.css';

export default function Debateroom3() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={12}>
              <br/><h2 className="dashhead">Cancel Culture</h2>
              <p>With everything going on, cancel culture is at it's peak. Share your thoughts in the discussion.</p>
              </Col>

          </Row>
<br/>
          <Row>
            <Col sm={6} className="">
            <iframe title="chatapp" src="https://room3.rajnagrwl.repl.co" width="100%" height="500px" frameBorder="0" className="debatebackground"/>
            </Col>
            <Col sm={6} className="">
            <Stats/>
            </Col>
            
          </Row>
          <Row>
          <p><Link to="/waitingroom"><span role="img" aria-label="emoji">👈</span> Exit Discussion</Link></p>
            
          </Row>
        </header>
      </Container>
    </div>
  );
}
