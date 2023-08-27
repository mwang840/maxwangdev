import React from "react";
import { Accordion } from "./Accordion";
import "./Contacts.module.css";

export const Experience = (): JSX.Element => {
    const Exepriences = [
        {
            title: "Northrop Grumman (Remote), Converting Associate Software Engineer (August 2023 - Present)",
            content: "Part time offer from Northrop (description coming soon)",
        },
        {
            title: "Northrop Grumman (Roy, UT), Software Engineer Intern (June 2023-August 2023)",
            content:
                "Using C++ and YAML deployment using agile methods on a software engineering team and learned DevOps, Unit Testing, Jira, Cmake, confluence and ci/cd pipeline.<br/>Served as an interim scrum master to help facilitate standups and addressed blockers from teammates with their assignments and reviewed tasks and discussed with teammates on what the team did well\n.Used the C/C++ unix and filesystem libraries to store loggers of the versions of files and when they were created",
        },
        {
            title: "University of Delaware (Newark, DE), Undergraduate Teaching Assistant (Feb 2023 - May 2023)",
            content:
                "Spring 2023: CISC- 437 (Database Systems), Teaching Physical and logical organization of databases. Data retrieval languages, relational database languages, security and integrity, concurrency, distributed databases.  Holding weekly Office Hours for Undergraduate Students and graded quizzes and exams, providing feedback",
        },
        {
            title: "University of Delaware (Newark, DE), Undergraduate Research Assistant (Jun 2022 - Jan 2023)",
            content:
                "A research project in the sensify lab of Dr. Matthew Mauriello in the summer of 2022. Created an application using the Arduino controller and Unity to allow children on the autism spectrum to play and change music layers for a song to accommodate their listening preference. Learned Human computer interaction and utilize software engineering practices on the project",
        },
        {
            title: "University of Delaware (Newark, DE), Computer Science for Social Good Volunteer Outreach (August 2022 - Present)",
            content:
                "Reached out to industry companies for setting up meetings to introduce students towards industry. Redesigned the clubs website to make the website stand out and improve the user experience",
        },
    ];
    return (
        <div>
            <Accordion items={Exepriences} />
        </div>
    );
};
