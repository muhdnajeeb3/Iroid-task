import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import record from "../../record.json";
import image from "../Images/Group 240.png";

function Corporate({mobile}) {
  console.log(mobile);

  
  return (
    <div>
      <Container fluid style={{ marginBottom: "130px", padding: mobile ? "35px" :"90px" }}>
        <Row style={{ display: "grid", justifyContent: "center" }}>
          <span
            style={{
              fontSize: "36px",
              fontFamily: "sans-serif",
              fontWeight: "700",
            }}
          >
            Corporate Info
          </span>
        </Row>
        {record.map((corporate) => {
          return (
            <>
              <Row>
                <h5>{corporate.title}</h5>
                <p>{corporate.parag1}</p>
                <p>{corporate.parag2}</p>
                <p>{corporate.parag3}</p>
              </Row>
            </>
          );
        })}
        <Row>
          <Col>
            <Row style={{ display: "grid", justifyContent: "center" }}>
              <img src={image} alt="" />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Corporate;
