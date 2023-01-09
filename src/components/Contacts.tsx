import React from "react";
import "./Contacts.css";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";

export function Contacts(): JSX.Element{
    return <div>
        <h1>Contact Information</h1>
        <a href="https://github.com/mwang840"><FaGithub size={70} color="black"/></a>
        <a href="https://www.linkedin.com/in/maxwell-wang-08ws/"><FaLinkedin size={70} color="aqua"/></a> 
        <a href="https://www.instagram.com/iammaxwellw/"><FaInstagram size={70} color="purple"/></a>
        <a href="mailto:maxwell.y.wang@gmail.com, maxwang@udel.edu"><FaMailBulk size={71} color="gold"/></a>
    </div>;
}