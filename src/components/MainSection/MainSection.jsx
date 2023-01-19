import React from "react";
import "./MainSection.css";
import pic1 from "./pic1.png";
import pic2 from "./Group 467.png";
import pic3 from "./Group 446.png";
import pic4 from "./block.png";
import pic5 from "./hey.png";
import pic6 from "./Article.png";
import { Col, Container, Row } from "react-bootstrap";

function MainSection({ mobile }) {
  const big = window.innerWidth < 650;
  return (
    <div className="mainwrapper">
      <div>
        <Row>
          <span className="heading" style={{ fontSize: mobile ? "35px" : "" }}>
            Happiness Is Our Culture
          </span>
        </Row>
        <span className="content">
          The productivity and prosperity of an organisation is the reflection
          of the happiness and contentment of its employees. We believe that is
          what builds a family and the nation too. Happy employees are not just
          an asset to the organisation, but the love, contentment and enthusiasm
          they display build the whole world.So it is our prime responsibility
          to give a conducive, happy work culture for our employees, a climate
          which gives them opportunities for self growth and skill development.
        </span>
      </div>

      <Row
        className=""
        style={{
          display: "grid",
          justifyContent: "center",
          marginTop: "40px",
          padding: "10px",
        }}
      >
        <img src={pic1} alt="" style={{ width: "500px", height: "300px" }} />
      </Row>
      {/* second section */}
      <Container fluid className="secondsection">
        <Row style={{ display: "flex", flexDirection: big ? "column " : "" }}>
          <Col className="imagesection2">
            <Row>
              <img
                src={pic2}
                alt=""
                style={{ objectFit: "contain", marginBottom: "10px" }}
              />
            </Row>
          </Col>
          <Col className="contentsection2">
            <div>
              <span className="heading2">
                What Do We Do To Make Our Employees Stay Happy And Satisfied ?
              </span>
            </div>
            <div>
              <span
                style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "10px",
                  fontSize: "19px",
                  fontFamily: "sans-serif",
                }}
              >
                <img
                  src={pic3}
                  alt=""
                  style={{ width: "20px", height: "20px", marginTop: "7px" }}
                />
                <span>
                  Listen to them. We give opportunities for them to express
                  their views- personal and official.
                </span>
              </span>
              <br />
              <span
                style={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "19px",
                  fontFamily: "sans-serif",
                }}
              >
                <img
                  src={pic3}
                  alt=""
                  style={{ width: "20px", height: "20px", marginTop: "7px" }}
                />
                <span>
                  Appreciate the employees for the effort put in verbally and
                  also through incentives, awards, accolades and public
                  acknowledgements in meetings.
                </span>
              </span>
              <br />
              <span
                style={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "19px",
                  fontFamily: "sans-serif",
                }}
              >
                <img
                  src={pic3}
                  alt=""
                  style={{ width: "20px", height: "20px", marginTop: "7px" }}
                />
                <span>
                  Organise training programmes to enhance their professional
                  skills, and also for personal re engineering to build strong
                  self- esteem, develop interpersonal, social, team
                  communication skills and attitude.
                </span>
              </span>
              <br />
              <span
                style={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "19px",
                  fontFamily: "sans-serif",
                }}
              >
                <img
                  src={pic3}
                  alt=""
                  style={{ width: "20px", height: "20px", marginTop: "7px" }}
                />
                <span>
                  The work environment is made proactive, positive, calm,
                  joyful, effective, productive and enjoyable through meditation
                  and other Self Building activities.
                </span>
              </span>
              <br />
              <span
                style={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "19px",
                  fontFamily: "sans-serif",
                }}
              >
                <img
                  src={pic3}
                  alt=""
                  style={{ width: "20px", height: "20px", marginTop: "6px" }}
                />
                <span>
                  Timely Financial assistance is rendered as a part of employee
                  welfare scheme as and when required.
                </span>
              </span>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      {/* Third Sectiion */}
      <Container>
        <Row
          style={{ display: "flex", flexDirection: "row", marginTop: "10rem" }}
        >
          <Col>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Col>
                <Row>
                  <div className="imagefour">
                    <Row>
                      <h4>OurVision</h4>
                      <br />
                      <span>
                        Our vision is to provide prime value to customers by
                        delivering supreme quality undergarments in the global
                        market with the intent to touch the lives of our
                        employees, immediate society and the world community
                        with the understanding -‘we exist because they exist’.
                      </span>
                    </Row>
                  </div>
                </Row>
              </Col>
              <Col>
                <Row>
                  <div className="imagefive"></div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <div className="imagesix">
                <Row>
                  <h4>Our Mission</h4>
                  <ul>
                    <li>
                      Ensure the quality of the product excellence through
                      monitoring at every stages of production till delivery and
                      customer satisfaction.
                    </li>
                    <li>
                      Focus on widening the business every year through a
                      progressive approach of associating with prospective
                      textile shops, appointing distributors and contracting
                      with business agents.
                    </li>
                    <li>
                      Focus on widening the business every year through a
                      progressive approach of associating with prospective
                      textile shops, appointing distributors and contracting
                      with business agents.
                    </li>
                  </ul>
                  {/* <img src={pic6} alt="" style={{width:"429px",hieght:"496px",left:"50px"}}/> */}
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainSection;
