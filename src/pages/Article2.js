import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';

export default function Article2() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">New Details About Vaccine Passports</h2>
            <p className="center">Source: <a href="https://www.cbc.ca/news/canada/toronto/ontario-covid-19-cases-data-september-14-1.6174855/">CBC</a>, Summarized By AI</p>
            
          </Col>
          </Row>
          <Row>
            <Col sm={12} className="">
                <p className="articletext">Ontario officials have released more guidance on the implementation of the province's proof-of-vaccination system, which comes into effect on Sept. 22. The vaccine certificate system will cover "higher-risk" indoor spaces where masks can't be worn at all times, officials say. The province has amended its list to apply to the following settings: Restaurants and Bars, Nightclubs, Banquet Halls, Sporting Events, Casinos, Concerts. Ontario also reported 577 new COVID-19 cases on Tuesday and seven more deaths. Of the new cases, 452 are among individuals who have either not been fully vaccinated or whose vaccination status is unknown.
<br/>
<br/>
<Row>
              <Col sm={5}>
              <p><Link to="/dashboard"><span role="img" aria-label="emoji">👈</span> Go back to Dashboard</Link></p>
              </Col>
              <Col sm={3}></Col>
              <Col sm={4}>
              <p><Link to="/visualize">Summarize A Custom Article <span role="img" aria-label="emoji">📰</span></Link></p>
              </Col>
          </Row>

</p>
            
             
              
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
