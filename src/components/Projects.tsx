import React from "react";
import scheduler from "./assets/cis-scheduler.png";
import "./Projects.css";
import { CISModal } from "./models/CISModal";

export function Projects():JSX.Element{
    return (<div>
        <h1>Projects</h1>
        <h2>Feel free to check out the projects that I have done whether it was in a group setting or not. Click on the links below each image to learn more!</h2>
        <img src={scheduler} alt="Course Scheduler" className="center"></img>
        <CISModal/>
    </div>);
}