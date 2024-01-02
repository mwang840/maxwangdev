/* eslint-disable indent */
import React from "react";
import { ViewNavbar } from "./components/ViewNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { AboutMe } from "./components/AboutMe";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import TypewriterComponent from "typewriter-effect";
import { Experience } from "./components/Experience";
import { Footer, FooterCopyright, FooterIcon, FooterTitle } from "flowbite-react";
import {
    FaGithub,
    FaLinkedin,
    FaMailBulk,
    FaYoutube,
    FaSpotify,
    FaInstagram,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

function App() {
    return (
        <div className="App">
            <TypewriterComponent
                onInit={(typweriter) => {
                    typweriter
                        .typeString("Hello there 👋")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm Maxwell Wang")
                        .start();
                }}
                options={{
                    cursorClassName: styles.typewriter_content,
                    wrapperClassName: styles.typewriter_content,
                }}
            />

            <BrowserRouter>
                <ViewNavbar />
                <Routes>
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/languages" element={<Languages />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experiences" element={<Experience />} />
                    <Route path="/technologies" element={<Technologies />} />
                </Routes>
            </BrowserRouter>
            <Footer container>
                <FooterTitle title="Contact Me"/>
                <Footer.LinkGroup>
                <FooterIcon href="https://github.com/mwang840" icon={FaGithub}/>
                <FooterIcon href="https://www.linkedin.com/in/maxwell-wang-08ws/" icon={FaLinkedin} />
                <FooterIcon href="https://www.instagram.com/iammaxwellw?igsh=aDVpNzEwYXozMzl0" icon={FaInstagram} />
                <FooterIcon href="#" icon={FaSpotify} />
                <FooterIcon href="https://www.youtube.com/channel/UCHCqPwHUde2P-idHPUTMoqA" icon={FaYoutube} />
                <FooterIcon href="#" icon={FaMailBulk} />
                <FooterIcon href="https://www.codewars.com/users/draco_635" icon={SiCodewars} />
                </Footer.LinkGroup>
                <FooterCopyright by=" Maxwell Wang" year={2024}/>
            </Footer>
        </div>
    );
}

export default App;
