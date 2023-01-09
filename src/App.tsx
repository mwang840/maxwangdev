import React from "react";
//import Maxwell from "./assets/MaxWang.jpg";
import { ViewNavbar } from "./components/ViewNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
 
function App() {
    return (
        <>
            <h1>Maxwell Wang</h1>
            <BrowserRouter>
                <ViewNavbar/>
                <Routes>
                    <Route path="/aboutme" element={<AboutMe/>}/>
                    <Route path="/languages" element={<Languages/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
