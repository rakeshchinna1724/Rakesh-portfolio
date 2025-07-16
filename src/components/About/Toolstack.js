import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode,SiWireshark,SiKalilinux,SiTryhackme, } from "react-icons/si";
//import { FaLock, } from "react-icons/fa";
import {GiSpy, GiRadarSweep,GiHydra} from "react-icons/gi";
//import{WiWifi} from "react-icons/wi";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiSpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiRadarSweep/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTryhackme/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiHydra/>
      </Col>
    </Row>
  );
}

export default Toolstack;
