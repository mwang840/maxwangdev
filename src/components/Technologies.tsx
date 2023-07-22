import React from "react";
import { Accordion } from "./Accordion";
import {
    SiIntellijidea,
    SiEclipseide,
    SiVisualstudio,
    SiPycharm,
    SiVisualstudiocode,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";
export function Technologies(): JSX.Element {
    const techItems = [
        {
            title: "Intellij-IDE",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        Introduce to me in Introduction to Computer Science II,
                        I utilized this IDE for Java and object-oriented
                        programming development.
                    </p>

                    <span>
                        <SiIntellijidea size={40} color="purple" />
                    </span>
                </div>
            ),
        },
        {
            title: "Eclipse-IDE",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        Introduced to me in a Data Structures class, and used it
                        for c++ development and data structures projects. In my
                        opinion I have a highly dislike of the IDE because of
                        the user interface which I did not like.
                    </p>

                    <span>
                        <SiEclipseide size={40} color="purple" />
                    </span>
                </div>
            ),
        },
        {
            title: "Visual Studio Code (vscode)",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        One of my favorite ides to use, I love this ide a lot
                        because this IDE is flexible for using different
                        languages that I like to use and comes with handy
                        extensions. Thanks Microsoft!
                    </p>

                    <span>
                        <SiVisualstudiocode size={40} color="lightblue" />
                    </span>
                </div>
            ),
        },
        {
            title: "Pycharm",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        A fun ide for python development that I use during
                        algorithms class. Easy to use, easy to debug python code
                        that does not work.
                    </p>

                    <span>
                        <SiPycharm size={40} color="green" />
                    </span>
                </div>
            ),
        },
        {
            title: "Visual Studio",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        Another ide used for game and c# web app development. I
                        still think visual studio code is far more superior than
                        visual studio.
                    </p>

                    <span>
                        <SiVisualstudio size={40} color="purple" />
                    </span>
                </div>
            ),
        },
        {
            title: "Linux",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        First introduced to me in a systems programming class,
                        learning the ins and outs of linux was a new but a good
                        learning experience. I learned how to work on a virtual
                        machine, utilize ssh and install packages with linux.
                        During my internship, I was once again introduced to
                        linux and using its packages and the virtual machine to
                        work on an software engineering project.
                    </p>
                    <span>
                        <FaLinux size={40} color="black" />
                    </span>
                </div>
            ),
        },
    ];
    return (
        <div className="container">
            <Accordion items={techItems}></Accordion>
        </div>
    );
}
