/* eslint-disable indent */
import React from "react";
import scheduler from "./assets/cis-scheduler.png";
import "./Projects.css";
import { DuckModal } from "./models/DuckModal";
import { CISModal } from "./models/CISModal";
import { RINMODAL } from "./models/RINModal";
import { PIModal } from "./models/PIModal";
import react from "./assets/reactinANutshell.png";
import pi from "./assets/raspberrypi.jpg";
import duckies from "./assets/duckies.png";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { BuccaneerModal } from "./models/BuccaneerModal";
import bucanner from "./assets/Buccaneer.png";
export function Projects(): JSX.Element {
  return (
    <div>
      <h1>Projects</h1>
      <h3>
        Feel free to check out the projects that I have done whether it was in a
        group setting or not. Click on the links below each image to learn more!
      </h3>
      <Container>
        <Row className="show-grid">
          <Col xs={5} md={3}>
            <img src={scheduler} alt="Course Scheduler"></img> <CISModal />
          </Col>
          <Col xs={5} md={3}>
            <img src={bucanner} alt="Buccaneer"></img>
            <BuccaneerModal />
          </Col>
          <Col>
            <img src={react} alt="React" className="react-center"></img>
            <RINMODAL />
          </Col>
          <img src={pi} alt="Raspberry Pi" className="pi-center"></img>
          <PIModal />
          <img src={duckies} alt="duck game" className="duck-center"></img>
          <DuckModal />
        </Row>
      </Container>
    </div>
  );
}
