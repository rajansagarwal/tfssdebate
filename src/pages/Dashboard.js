import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Headline from '../components/Headline1';
import Headline2 from '../components/Headline2';
import Headline3 from '../components/Headline3';
import Debatepath from '../components/Debatepath';
import Stats from '../components/Stats';
import Forecast from '../components/Forecast';
import Custom from '../components/Custom';
import Transition from '../components/Transition';
import "../App.css";
import './pages.css';

export default function Dashboard() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={12}>
              <br/><h2 className="dashhead"><Transition/></h2>
              Diplomatica is building a world of political scientists. Care to join?<br/><br/>
              </Col>

              <br/><br/>
          </Row>
          <Row>
            <Col sm={4} className="">
            <Headline/>
            </Col>
            <Col sm={4} className="">
            <Headline2/>
            </Col>
            <Col sm={4} className="">
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
