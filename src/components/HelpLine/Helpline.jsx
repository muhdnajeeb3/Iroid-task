import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Helpline() {
  return (
    <div>
      <Container fluid>
        <Row
          style={{
            backgroundColor: "#940D1B",
            color: "#fff",
            minHeight: "4rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            style={{
              display: "grid",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <span>Alba Helpline: 04829 222776</span>
          </Col>
          <Col
            style={{
              display: "grid",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <span>Register Login</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Helpline;
