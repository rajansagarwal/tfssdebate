import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';

export default function Article3() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">Why We Can't Stop Fighitng About Cancel Culture</h2>
            <p className="center">Source: <a href="https://www.vox.com/culture/2019/12/30/20879720/what-is-cancel-culture-explained-history-debate">Vox News</a>, Summarized By AI</p>
            
          </Col>
          </Row>
          <Row>
            <Col sm={12} className="">
                <p className="articletext">This look at the origins and mainstreaming of cancel culture has continued relevance, but the discourse around cancel culture has evolved. It’s common to compare cancel culture to “call-out culture” — but its real roots may lie in the civil rights movement. As cancel culture caught on, many members of the public, as well as the media, have frequently conflated it with other adjacent trends — especially “call-out culture.” Cancel culture can be seen as an extension of call-out culture: the natural escalation from pointing out a problem to calling for the head of the person who caused it. Call-out culture predates cancel culture as a concept, with online roots in early 2010s Tumblr fandom callout blogs, like Your Fave is Problematic, and spreading from there. Meanwhile, cancel culture arose within Black culture and appears to channel Black empowerment movements dating as far back as the civil rights boycotts of the 1950s and ’60s. Thanks to social media, Black culture in particular has become more widely recognized as a dominant force behind much of pop culture.
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
