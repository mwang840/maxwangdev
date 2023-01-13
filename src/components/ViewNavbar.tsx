import React from "react";
import  "./ViewNavbarModule.css";
import { NavLink } from "react-router-dom";


export function ViewNavbar(): JSX.Element{
    return <nav className="navbar-container">
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/languages">Languages</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>;
}

