import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  //AiFillInstagram,
  
} from "react-icons/ai";
import { FaLinkedinIn, FaLaptopCode,
  FaUserSecret, } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>DEVELOPED BY RA </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>RAKESH AKUNURI ({year})</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rakeshchinna1724"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://takeuforward.org/profile/Rakesh-A"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLaptopCode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rakesh-akunuri-a7718a233/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://tryhackme.com/p/chinnashacking"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaUserSecret />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
