import React from "react";
import scheduler from "./assets/cis-scheduler.png";
import "./Projects.css";
import { CISModal } from "./models/CISModal";
import { RINMODAL } from "./models/RINModal";
import { PIModal } from "./models/PIModal";
import react from "./assets/reactinANutshell.png";
import pi from "./assets/raspberrypi.jpg";

export function Projects():JSX.Element{
    return (<div>
        <h1>Projects</h1>
        <h3>Feel free to check out the projects that I have done whether it was in a group setting or not. Click on the links below each image to learn more!</h3>
        <img src={scheduler} alt="Course Scheduler" className="cis-center"></img> <CISModal/>
        <img src={react} alt="React" className="react-center"></img><RINMODAL/>
        <img src={pi} alt="Raspberry Pi" className="pi-center"></img><PIModal/>
        
    </div>);
}