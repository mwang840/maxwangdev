/* eslint-disable indent */
import React from "react";
import Maxwell from ".//assets/MaxWang.jpg";
import "./AboutMe.css";
import TypewriterComponent from "typewriter-effect";

export function AboutMe(): JSX.Element {
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
      <p>
        Greetings, my name is Maxwell Wang and I am a senior year Computer
        Science Bachelors of Science student concentrating in Artificial
        Intelligence at the University of Delaware.
      </p>
      <p>
        I am interested in focusing in software engineering, web development,
        artificial intelligence and machine learning.
      </p>
      <p>
        Further, I have a passion for learning Computer Science and learning as
        much as I can about the world around me with Computer Science
        applications.
      </p>
      <p>
        Outside of Computer Science here are some things outside of Computer
        Science that I like to do:
      </p>
      <p>
        Chess: At a very young age, I have picked up an interest in playing
        chess to improve my problem-solving and strategy development skills.
      </p>
      <p>
        I have participated in chess clubs throughout the school year (grade
        school and college) and I am open to new chess strategies. I also have a
        chess.com account if anyone likes to follow me and play me in chess (see
        contact page)♔.
      </p>
      <p>
        Exercising: At grade school, I was on the mens varsity soccer team and
        played soccer as a forward. After soccer, I have grown into
        weightlifting and started going to the gym to improve my strength to
        become stronger everyday.
      </p>
      <p>
        Hiking: My first experience in hiking was when my family first traveled
        to the Grand Canyon and hiked on the trails.
      </p>
      <p>
        {" "}
        Even though, I did not like the hike as I was tired easily, I eventually
        started to enjoy hiking later in Southern Utah visiting national parks
        such as Arches, Zion, and others and enjoyed the nature and the scenery
        there.
      </p>
      <p>
        {" "}
        Recently, I have been hiking locally even seeing the Lehigh Gorge up in
        PA.
      </p>
      <p>
        Aviation: When I started traveling to see family in Taiwan, I usually
        travel by plane. From this, it opened up my knowledge of aviation,
        knowing certain types of planes and looking at airports (artitecture,
        size and runways).
      </p>
      <p> I am hoping I can travel more to explore my aviation side passion.</p>
    </div>
  );
}
