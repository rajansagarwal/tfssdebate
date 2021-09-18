import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import "../App.css";
import './pages.css';

export default function Debateroom1() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={9}>
              <br/><h2 className="dashhead">A Discussion about Vaccines</h2>
              </Col>
              <Col sm={3}>
              
              </Col>

          </Row>
<br/>
          <Row>
            <Col sm={6} className="">
            <iframe title="chatapp" src="https://yep.rajnagrwl.repl.co/" width="100%" height="700px" frameBorder="0"/>
            </Col>
            <Col sm={6} className="">
            <Stats/>
            </Col>
            
          </Row>
          <Row>
          <p><Link to="/dashboard"><span role="img" aria-label="emoji">👈</span> Back To Waiting Room</Link></p>
            
          </Row>
        </header>
      </Container>
    </div>
  );
}
