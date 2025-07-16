import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rakesh Akunuri </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing MTech in Cyber Securty from VNR VJIET,
            Hyderabad.
            <br />
            I have completed BTech in Computer science and Engineering from Nalla Narasimha Reddy, 
            Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgba(52, 11, 203, 1) " }}>
            {" "}
          </p>
          <footer className="blockquote-footer">Rakesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
