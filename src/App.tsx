import React from "react";
//import Maxwell from "./assets/MaxWang.jpg";
import { ViewNavbar } from "./components/ViewNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Languages } from "./components/Languages";
 
function App() {
    return (
        <>
            <h1>Maxwell Wang</h1>
            <BrowserRouter>
                <ViewNavbar/>
                <Routes>
                    <Route path="maxwangdev/aboutme" element={<AboutMe/>}/>
                    <Route path="maxwangdev/languages" element={<Languages/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
