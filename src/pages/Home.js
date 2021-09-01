import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";

export default function Home() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead hey">TFSS Debate Society</h2>
            <p className="center moving">Executive Applications</p>
          </Col>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">Objective</h5>
              <p className="p-manifesto">
The Turner Fenton Debate Society aims to foster a high-impact and supportive environment to supercharge the utilization and awareness of public issues through a formal medium. We hope to pass on the torch to two aspiring individuals who find passion in positively impacting the high school experience through debate.

              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>

          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">The Application Process</h5>
              <p className="p-manifesto">
               There are two available positions, the <b>President</b> and <b>Vice President</b>. The first step of the application will be the written part. These will be due on <b>September 10, 2021 at 11:59pm.</b> Following these applications, select individuals will be invited to an interview with our teacher supervisors, where they will ask position-specific questions to aid in their decision. 
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
					<Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">What do you look for?</h5>
              <p className="p-manifesto">
               In our candidates, we seek inspiring changemakers with a passion for debate and leadership. More specifically, we hope to see applicants with good intentions for the club, experience as a leader and with strong time management skills. This is a time-intensive role, so it is important that you provide great passion and interest. Every person reading this is an eligible candidate ~ each individual who chooses to proceed with the application is treated the same and given the same opportunities within the hiring process. 
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
					<Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">The President</h5>
              <p className="p-manifesto">
               The President is considered to be the leader of the club - the role will include organizing events, managing the team, running meetings and maintaining regular communication. 
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
					<Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">The Vice President</h5>
              <p className="p-manifesto">
               The Vice President will act as the liaison between the club and the public. This role will have a similar administrative role as the President, but will focus further on internal management.
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
						<Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">Application Questions</h5>
              <p className="p-manifesto">
               <ol>
							 <li>Please provide a resume outlining your leadership experience, creative ventures and applicable skills</li>
							 <li>What is the mindset that you live your life on? How does this affect the decisions you make? (200 words)</li>
               <li>What does debate mean to you? (100 words)</li>
							 </ol>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
					<Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">Submission Inquiries</h5>
              <p className="p-manifesto">
               Feel free to DM us on Instagram (@tfssdebate2021) for inquiries. Submissions will happen <b>by email</b>, so be sure to send us your application to <b>debatetfss@gmail.com!</b>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
					
					<Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">FAQ</h5>
              <p className="p-manifesto">
               <b>Should I Apply?</b> Yes! Anyone can apply and this is a great experience for leadership, social advocacy and team-management. <br/><br/>
							 <b>Where Do I Submit?</b> Be sure to email us your application at debatetfss@gmail.com<br/><br/>
							 <b>What Do I Do After I Submit?</b> Once you send us an email, you are good to go! You will be notified shortly after with an interview time and expectations.
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
					<hr className="solid" />
					<Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <p className="p-manifesto">
               Thank you For Your Interest! We hope to see your application come up!
							 <div style={{fontFamily:'allura'}}>- Rajan Agarwal, Saanvi Kohli, Ms. Poredi</div>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
