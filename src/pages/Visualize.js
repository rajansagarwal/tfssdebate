import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Iframe from 'react-iframe';
import "../App.css";
import './pages.css';

export default function Visualize() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={12}>
              <Iframe url="https://share.streamlit.io/diplomatica-htn/ml-app/app.py"
        id="myId"
        className="myClassname"
        position="fixed"/>
              </Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
