import React from "react";
import Maxwell from ".//assets/MaxWang.jpg";
import "./AboutMe.css";

export function AboutMe(): JSX.Element{
    return(<div>
        <h1>About Me</h1>
        <img src={Maxwell} alt="Maxwell Wang" className="center"></img>
        <p> Greetings, my name is Maxwell Wang and I am a junior year Computer Science Bachelors of Science student concentrating in Artificial Intelligence at the University of Delaware. 
        I am interested in focusing in software engineering, web development, artificial intelligence and machine learning.
        Further, I have a passion for learning Computer Science and learning as much as I can about the world around me with Computer Science applications.
        </p>
        <p>Outside of Computer Science here are some things outside of Computer Science that I like to do:</p>
        <ol>
            <li><p>Chess: At a very young age, I have picked up an interest in playing chess to improve my problem solving and strategy development skills.</p> 
            <p>I have participated in chess clubs throughout the school year (grade school and college)</p></li>
            <li><p>Exercising: At grade school, I was on the mens varsity soccer team and played soccer as a forward.</p>
            <p>Despite not being a regular starter, I have grown into weightlifting and started going to the gym to improve my strength to become stronger everyday.</p></li>
            <li><p>Mathmatics: I have a strong passion for mathmatics and participated in small math competitions. I grew a strong interest in <a href="https://www.khanacademy.org/">Khan Academy</a> (math based website) and started to teach myself calculus as well as take more math classes in grade school.</p></li>
            <li><p>Traveling: I enjoyed traveling to open my perspective to the world around me. I hope to explore more around the world in the future</p></li>
        </ol>
    </div>);
}