import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';

class Interest extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>Articles Based On Preferences</b>
    
    <p className='yomama'><span className="headlinemeta"><i>Current Points: 76.9 ∆</i><br/>I am a 16 year old student leader driven by innovation. My actions on a daily basis are built on the foundation of creation and change.<br/>
    <button className="thisbutton">Sign Out</button>
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Interest;