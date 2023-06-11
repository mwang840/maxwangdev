/* eslint-disable indent */
import React from "react";
import Maxwell from ".//assets/MaxWang.jpg";
import "./AboutMe.css";
import { Accordion } from "./Accordion";
import TypewriterComponent from "typewriter-effect";

export function AboutMe(): JSX.Element {
  const activities = [
    {
      title: "Chess",
      content: (
        <div>
          <p>
            I have been insterested in and have started playing chess since
            elementary school.I have participated in chess clubs throughout the
            school year (grade school and college) and I am open to new chess
            strategies. I also have a chess.com account if anyone likes to
            follow me and play me in chess (see contact page)♔.
          </p>
        </div>
      ),
    },
    {
      title: "Exercising and Hiking",
      content: (
        <div>
          <p>
            At grade school, I was on the mens varsity soccer team and played
            soccer as a forward. After soccer, I have grown into weightlifting
            and started going to the gym to improve my strength to become
            stronger everyday.
          </p>
          <p>
            Currently during school and during this summer, I&apos;ve started to
            improve my strength training by going to the gym to build up
            strength and eventually muscle.
          </p>
          <p>
            My first experience in hiking was when my family first traveled to
            the Grand Canyon and hiked on the trails.
          </p>

          <p>
            I eventually started to enjoy hiking later and occasionally go out
            with friends or family to hike in different places!
          </p>
        </div>
      ),
    },
    {
      title: "Traveling",
      content: (
        <div>
          <p>
            A hobby that I enjoyed, I like to go see places around the world. As
            a young child, my family will take me to Taiwan to visit family.
            From that moment, I&apos;ve started appreicating where I go to
            capture the memories I make when traveling.
          </p>
          <p>
            Countries that I have been to are
            <li>Taiwan</li>
            <li>Japan</li>
            <li>South Korea</li>
            <li>Hong Kong</li>
            <li>Canada</li>
          </p>
          <p>
            I&apos;m hoping I can go visit Europe, Africa, Latin America and the
            rest of the United States
          </p>
        </div>
      ),
    },
    {
      title: "Aviation",
      content: (
        <div>
          <p>
            Similar to traveling, but I&apos;ve enjoyed planes ever since my
            parents took me to Taiwan to visit family. I like passanger planes
            and my favorite is the Boeing 777. I&aposve yet to fly the airbus
            A-380!
          </p>
          <p>
            I hope to get more exposure to different airlines as I travel around
            the world and get to have a good time on those airlines
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <TypewriterComponent
        onInit={(typweriter) => {
          typweriter
            .typeString("About Me")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Who Am I?")
            .start();
        }}
      />
      <img src={Maxwell} alt="Maxwell Wang" className="about-me-image"></img>
      <h1>Greetings</h1>
      <p>
        My name is Maxwell Wang and I am a senior year Computer Science
        Bachelors of Science student concentrating in Artificial Intelligence at
        the University of Delaware.
      </p>
      <p>
        I am interested in focusing in software engineering, web development,
        artificial intelligence and machine learning/data science.
      </p>
      <p>
        At the University of Delaware, I have already taken or will be taking a
        lot of computer science courses, each one specializing in their own
        field.
      </p>
      <p>
        The computer science courses include: Software Engineering, Algorithms,
        Automata Theory, Data Mining, Database Systems, Logic for Programming,
        Operating Systems, Educational Game Development, Advanced Web
        Technologies, Computer Vision and Machine Learning
      </p>
      <h1>
        Click on the dropdown to see activities I do outside of computer science
      </h1>
      <Accordion items={activities}></Accordion>
    </div>
  );
}
