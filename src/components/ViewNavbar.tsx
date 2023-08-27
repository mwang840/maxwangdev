import React from "react";
import "./ViewNavbarModule.css";
import { NavLink } from "react-router-dom";

export function ViewNavbar(): JSX.Element {
    return (
        <nav className="navbar-container">
            <NavLink
                to="/aboutme"
                style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "40px",
                    fontFamily: "Georgia",
                    borderRadius: "10px",
                    backgroundColor: "white",
                }}
            >
                About Me
            </NavLink>
            <NavLink
                to="/languages"
                style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "40px",
                    fontFamily: "Georgia",
                    backgroundColor: "white",
                    borderRadius: "10px",
                }}
            >
                Languages
            </NavLink>
            <NavLink
                to="/projects"
                style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "40px",
                    fontFamily: "Georgia",
                    backgroundColor: "white",
                    borderRadius: "10px",
                }}
            >
                Projects
            </NavLink>
            <NavLink
                to="/experiences"
                style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "40px",
                    fontFamily: "Georgia",
                    backgroundColor: "white",
                    borderRadius: "10px",
                }}
            >
                Experiences{" "}
            </NavLink>
            <NavLink
                to="/technologies"
                style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "40px",
                    fontFamily: "Georgia",
                    backgroundColor: "white",
                    borderRadius: "10px",
                }}
            >
                Technologies
            </NavLink>
            <NavLink
                to="/contact"
                style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "40px",
                    fontFamily: "Georgia",
                    backgroundColor: "white",
                    borderRadius: "10px",
                }}
            >
                Contact
            </NavLink>
        </nav>
    );
}
