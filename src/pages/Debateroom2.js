import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import "../App.css";
import './pages.css';

export default function Debateroom2() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={12}>
              <br/><h2 className="dashhead">Canadian Debate Discussion</h2>
              <p>A key part of being a political scientist and active citizen is being socially aware. With an election in the coming days, it is important to know who is running, what they aim to provide as a candidate and their goals for the future of the nation.</p>
              </Col>

          </Row>
<br/>
          <Row>
            <Col sm={6} className="">
            <iframe title="chatapp" src="https://room2.rajnagrwl.repl.co" width="100%" height="500px" frameBorder="0" className="debatebackground"/>
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
