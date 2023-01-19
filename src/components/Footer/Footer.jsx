import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import truck from "../Images/fast-delivery.png";

function Footer({ mobile }) {
  const small = window.innerWidth < 450;

  return (
    <div>
      <Container fluid className="footercontainer">
        <Row
          style={{
            display: "flex",
            flexDirection: small ? "column" : "",
            justifyContent: small ? "center" : "",
          }}
        >
          <Col
            className="col-3"
            style={{
              display: "grid",
              flexDirection: "column",
              justifyContent: small ? "center" : "",
              width: small ? "100%" : "",
              marginTop: "100px",
              marginLeft: small ? "" : "auto",
            }}
          >
            <Row>
              <img
                src={truck}
                alt=""
                style={{ width: "74px", height: "50px" }}
              />
            </Row>
            <Row>
              <span>Fast delivery in 3-5 Days</span>
            </Row>
          </Col>
          <Col
            style={{
              marginTop: "50px",
              fontFamily: "sans-serif",
              fontSize: "16px",
              justifyContent: small ? "center" : "",
              width: small ? "100%" : "",
            }}
          >
            <span>QUICK LINKS</span>
            <br />
            <span>Gift Card</span>
            <br />
            <span>Lootbook 2021</span>
            <br />
            <span>Privacy Policy</span>
            <br />
            <span>Shipping & Refund</span>
            <br />
          </Col>
          <Col
            style={{
              marginTop: "50px",
              fontFamily: "sans-serif",
              fontSize: "16px",
              justifyContent: small ? "center" : "",
              width: small ? "100%" : "",
            }}
          >
            <span>COMPANY</span>
            <br />
            <span>About Us</span>
            <br />
            <span>Contact Us</span>
            <br />
            <span>Privacy Plan</span>
            <br />
            <span>Knowledge Base</span>
            <br />
          </Col>
          <Col
            className="col-4"
            style={{
              marginTop: "50px",
              fontFamily: "sans-serif",
              fontSize: "16px",
            }}
          >
            <span>NEWSLETTER</span>
            <br />
            <span>Sign up & get all our latest updates and special offers</span>
            <br />
            <Row style={{ marginRight: "10px",marginLeft: "1px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                style={{
                  height: "3rem",
                  minWidth: mobile ? "10rem " : " ",
                  marginTop: "20px",
                }}
              />
            </Row>

            <Button
              variant=""
              style={{
                background: "#6B6B6B",
                borderRadius: "0",
                color: "#fff",
                height: "3rem",
              }}
            >
              SUBSCRIBE
            </Button>
          </Col>
        </Row>
        <hr style={{ border: "2px solid #707070" }} />
        <Row
          style={{
            display: "grid",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <span>© 2021 Alba. All Rights Reserved.</span>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
