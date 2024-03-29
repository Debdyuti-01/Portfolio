import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Debdyuti Das </span>
            from <span className="purple"> Los Angeles, USA.</span>
            <br />
            I am currently pursuing Master's in Computer Science at California State University, Fullerton. I am a full stack developer with knowledge on Typescript, JavaScript, golang, Java. 
            <br /><br />
            Apart from coding, some other activities that I love to do ..
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Taking interest in Indian folk art
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Debdyuti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
