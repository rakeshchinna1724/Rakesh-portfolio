import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  //AiFillInstagram,
  //AiFillSecurityScan,
} from "react-icons/ai";
import { FaLaptopCode, FaLinkedinIn, FaUserSecret } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I like to protect the people from Cyber threats which is happening real world.    🤷‍♂️
              <br />
              <br />I specialised in .
              <i>
                <b className="purple"> Identifing Vulnerabilities, Securing digital Assets, building safer online environments. </b>
              </i>
              <br />
              <br />
              My field of Interest's are protecting the &nbsp;
              <i>
                <b className="purple">Systems, Netwoks & Data from the digital threats </b> and
                also finding the {" "}
                <b className="purple">
                  Cyber threats 
                </b>
              </i>
              <br />
              <br />
                
               <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME ON</h1>
            <p>
               <span className="purple"> </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rakeshchinna1724"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://takeuforward.org/profile/Rakesh-A"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLaptopCode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rakesh-akunuri-a7718a233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://tryhackme.com/p/chinnashacking"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaUserSecret />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
