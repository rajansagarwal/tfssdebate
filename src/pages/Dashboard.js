import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Headline from '../components/Headline1';
import Headline2 from '../components/Headline2';
import Headline3 from '../components/Headline3';
import Debatepath from '../components/Debatepath';
import Stats from '../components/Stats';
import Forecast from '../components/Forecast';
import Custom from '../components/Custom';
import "../App.css";
import './pages.css';

export default function Dashboard() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={9}>
              <br/><h2 className="dashhead">Welcome, Rajan</h2>
              Diplomatica is building a world of political scientists.<br/><br/>
              </Col>
              <Col sm={3}>
              
              </Col>
              <br/><br/>
          </Row>
          <Row>
            <Col sm={3} className="">
            <Headline/>
            </Col>
            <Col sm={3} className="">
            <Headline2/>
            </Col>
            <Col sm={6} className="">
            <Headline3/>
            </Col>
          </Row>
<br/>
          <Row>
            <Col sm={6} className="">
            <Debatepath/>
            </Col>
            <Col sm={6} className="">
            <Stats/>
            </Col>
            
          </Row><br/>
          <Row>
            <Col sm={6} className="">
            <Forecast/>
            </Col>
            <Col sm={6} className="">
            <Custom/>
            </Col>
            
            
          </Row>
        </header>
      </Container>
    </div>
  );
}
