/* eslint-disable indent */
import React from "react";
import max from "./assets/maxwell.jpg";
import "./AboutMe.css";
import { Accordion } from "./Accordion";

export function AboutMe(): JSX.Element {
    const activities = [
        {
            title: "Chess",
            content: (
                <div>
                    <p>
                        I have been insterested in and have started playing
                        chess since elementary school.I have participated in
                        chess clubs throughout the school year (grade school and
                        college) and I am open to new chess strategies. I also
                        have a chess.com account if anyone likes to follow me
                        and play me in chess (see contact page)♔.
                    </p>
                </div>
            ),
        },
        {
            title: "Exercising and Hiking",
            content: (
                <div>
                    <p>
                        At grade school, I was on the mens varsity soccer team
                        and played soccer as a forward. After soccer, I have
                        grown into weightlifting and started going to the gym to
                        improve my strength to become stronger everyday.
                    </p>
                    <p>
                        Currently during school and during this summer,
                        I&apos;ve started to improve my strength training by
                        going to the gym to build up strength and eventually
                        muscle.
                    </p>
                    <p>
                        My first experience in hiking was when my family first
                        traveled to the Grand Canyon and hiked on the trails.
                    </p>

                    <p>
                        I eventually started to enjoy hiking later and
                        occasionally go out with friends or family to hike in
                        different places!
                    </p>
                </div>
            ),
        },
        {
            title: "Traveling",
            content: (
                <div>
                    <p>
                        A hobby that I enjoyed, I like to go see places around
                        the world. As a young child, my family will take me to
                        Taiwan to visit family. From that moment, I&apos;ve
                        started appreicating where I go to capture the memories
                        I make when traveling.
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
                        I&apos;m hoping I can go visit Europe, Africa, Latin
                        America and the rest of the United States
                    </p>
                </div>
            ),
        },
        {
            title: "Aviation",
            content: (
                <div>
                    <p>
                        Similar to traveling, but I&apos;ve enjoyed planes ever
                        since my parents took me to Taiwan to visit family. I
                        like passanger planes and my favorite is the Boeing 777.
                        I&apos;ve yet to fly the airbus A-380!
                    </p>
                    <p>
                        I hope to get more exposure to different airlines as I
                        travel around the world and get to have a good time on
                        those airlines
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div>
            <h1>About Me</h1>
            <img
                src={max}
                alt="Maxwell Wang"
                className="about-me-image"
            ></img>
            <p>
            Greetings, my name is Maxwell Wang and I am a senior year Computer Science Bachelors of Science student concentrating in Artificial Intelligence at the University of Delaware. I started my passion for computer science since high school. I
                always wanted to learn and understand how computers work and how
                programs are made.&nbsp;Getting exposure to the
                &nbsp;&nbsp;STEM field utilized my anayltical and problem solving
                strategies. Further the classes that I&apos;ve taken (math and
                computer science) taught me how to approach  &nbsp;challenges and
                problems &nbsp;&nbsp;with thinking, creativity and precision. I have taken a strong interest in
                math (although not picking up a major or a minor in the subject)
                and computer science. In the Computer Science &nbsp;&nbsp;field, I have
                taken a strong interest towards web development (front-end and
                back-end) and how to utilize a tech stack,the theory of
                computation (algorithm analysis), artificial
                &nbsp;&nbsp;intelligence and machine learning and data science. In math, I
                have a strong passion for calculus, linear algebra and discrete
                mathmatics. By opening myself up to those
                experiences, I &nbsp;&nbsp;have learned a lot of knowledge from those
                displicines and further strenghen my skills in those area.
            </p>
            <h1>
                Click on the dropdown
                to see activities I do outside of computer science
            </h1>
            <Accordion items={activities}></Accordion>
        </div>
    );
}
