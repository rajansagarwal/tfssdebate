import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Mypoints from '../components/Mypoints';
import Leaderboard from '../components/Leaderboard';
import Interest from '../components/Interest';
import Profilecard from '../components/Profilecard';
import "../App.css";
import './pages.css';

export default function Profile() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
            <br/><br/>
        <Row>
              <Col sm={6}>
              <Profilecard/><br/>
              <Leaderboard/><br/>
              <Mypoints/>
              </Col>
              <Col sm={6}>
              <Interest/>
              
              </Col>
          </Row>
          
            

        </header>
      </Container>
    </div>
  );
}
