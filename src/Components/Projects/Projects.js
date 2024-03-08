import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/nft.gif";
import emotion from "../../Assets/Projects/portfolio.gif";
import editor from "../../Assets/Projects/cloud.gif";
import chatify from "../../Assets/Projects/wordle1.gif";
import suicide from "../../Assets/Projects/currency.gif";
import bitsOfCode from "../../Assets/Projects/covid.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently ..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Wordle Restful API"
              description="Developed responsive web development application like a game with functionality improvement to support up to
              10,000 concurrent users and reduced load time by 50%. Implemented GitHub OAuth2 to get data from user’s repositories understanding key performance indicators"
              ghLink="https://github.com/Debdyuti-01/Wordle-Restful-API"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Covid19 Big Data Analysis"
              description="The aim of the project is to address, compare and analyse the variation in the number of COVID-19 cases in countries which imposed complete lockdown with restriction rules and observe the following trend in the data based on the increasing number of cases"
              ghLink="https://github.com/Debdyuti-01/Covid-19-Big-Data-Analysis"
             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Secure-File-System-on-Cloud"
              description="Developed and implemented end-to-end system design for Full stack project with software engineering principles. Optimized user experience, resulting in a 40% increase active users maintaining and scaling application"
              ghLink="https://github.com/Debdyuti-01/Secure-File-System-on-Cloud"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NFT MarketPlace"
              description="The NFT application is a marketplace-like platform that allows users to purchase and transfer NFTs, which are unique digital assets stored on a blockchain. To facilitate this, the app uses HardHat, a development environment for Ethereum projects, to compile and deploy smart contracts, which are self-executing programs that run on the blockchain"
              ghLink="https://github.com/Debdyuti-01/NFT-MarketPlace"
            //  demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Android Application for Assisting Visually Impaired People"
              description="Developed android application to recognise Indian currency which are not visually impaired friendly."
              ghLink="https://github.com/Debdyuti-01/Android-Application-for-Assisting-Visually-Impaired-People"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Creation of Portfolio"
              description="Created my digital portfolio using React, HTML, CSS"
              ghLink="https://github.com/Debdyuti-01/Portfolio"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
