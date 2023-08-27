/* eslint-disable indent */
import React from "react";
import { ViewNavbar } from "./components/ViewNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { AboutMe } from "./components/AboutMe";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { Technologies } from "./components/Technologies";
import TypewriterComponent from "typewriter-effect";
import { Experience } from "./components/Experience";

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
                    <Route path="/contact" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
