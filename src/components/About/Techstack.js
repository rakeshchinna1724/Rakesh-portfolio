import React from "react";
import { Col, Row } from "react-bootstrap";




//import { CgCPlusPlus } from "react-icons/cg";
/*import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";*/

import{FaLinux,FaWindows,FaNetworkWired,FaUserSecret} from "react-icons/fa";

import{SiPython, }from "react-icons/si";
import{GiSpyglass,GiMagnifyingGlass, }from "react-icons/gi";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiSpyglass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMagnifyingGlass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserSecret />
      </Col>
      {/* --- Technology Icons Section --- */}
      
    </Row>
  );
}

export default Techstack;
