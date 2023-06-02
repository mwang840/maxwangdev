/* eslint-disable indent */
import React from "react";
import "./Contacts.css";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
export function Contacts(): JSX.Element {
  return (
    <div className="contact">
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .typeString("Contact Me")
            .start()
            .pauseFor(2000)
            .deleteAll()
            .typeString("If you have any questions!!");
        }}
      />
      <a href="https://github.com/mwang840">
        <FaGithub size={70} color="black" />
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("mwang840")
              .start()
              .pauseFor(2000)
              .deleteAll();
          }}
        />
      </a>
      <a href="https://www.linkedin.com/in/maxwell-wang-08ws/">
        <FaLinkedin size={70} color="aqua" />
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("Maxwell Wang")
              .start()
              .pauseFor(2000)
              .deleteAll();
          }}
        />
      </a>
      <a href="https://www.instagram.com/iammaxwellw/">
        <FaInstagram size={70} color="purple" />
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("@iammaxwellw")
              .start()
              .pauseFor(2000)
              .deleteAll();
          }}
        />
      </a>
      <a href="mailto:maxwell.y.wang@gmail.com, maxwang@udel.edu">
        <FaMailBulk size={71} color="gold" />
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("maxwell.y.wang@gmail.com (personal)")
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString("maxwang@udel.edu (school)")
              .deleteAll();
          }}
        />
      </a>
    </div>
  );
}
