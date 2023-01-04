import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import truck from "./fast-delivery.png";

function Footer() {
  return (
    <div>
      <Container fluid className="footercontainer">
        <Row>
          <Col
            className="col-3"
            style={{
              display: "grid",
              flexDirection: "column",
              justifyContent: "end",
              marginTop: "100px",
              marginLeft: "auto",
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
              
            }}
          >
            <span >QUICK LINKS</span>
            <br />
            <span >Gift Card</span>
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
            }}
          >
            <span >COMPANY</span>
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
            <input
              type="text"
              placeholder="Enter Your Email Address"
              style={{ height: "3rem", marginTop: "20px" }}
            />
            <Button
              variant=""
              style={{ background: "#6B6B6B",borderRadius:"0", color: "#fff", height: "3rem" }}
            >
              SUBSCRIBE
            </Button>
          </Col>
        </Row>
        <hr style={{border:'2px solid #707070'}}/>
        <Row style={{display:"grid",justifyContent:"center",marginBottom:"20px"}}>
            <span>© 2021 Alba. All Rights Reserved.</span>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
