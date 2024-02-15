import React from "react";
import { Accordion } from "./Accordion";
import "./Experiences.module.css";

export const Experience = (): JSX.Element => {
    const Exepriences = [
        {
            title: "University of Delaware (Newark, DE), Undergraduate Teaching Assistant (upcoming Feb 2024)",
            content: "TBA"
        },
        {
            title: "Northrop Grumman (Roy, UT) and remote, Software Engineer Intern (June 2023 - Present)",
            content:
                "I spearheaded the development of software solutions by harnessing C++ libraries and YAML, employing agile methodologies to ensure project success. I then acquired expertise in DevOps, Unit Testing, Jira, Cmake, Confluence, and CI/CD pipeline, significantly enhancing the efficiency of software delivery within a dynamic engineering team and optimized standup meetings in the role of interim scrum master, fostering streamlined communication and task prioritization across the team for enhanced efficiency. I now contribute to the LETS team, actively engaging in refining and designing a user interface for a vehicle by leveraging an existing C/C++ codebase, with a focus on continuous improvement and innovation."
        },
        {
            title: "University of Delaware (Newark, DE), Undergraduate Teaching Assistant (Feb 2023 - May 2023)",
            content:
                "I instruct CISC 437, focusing on Database Systems, where I cover topics such as SQL, data retrieval languages, and the principles of security, integrity, as well as the physical and logical organization of databases. Additionally, I actively engage with students through office hours, conduct exams and quizzes, and provide clear and constructive feedback to a cohort of 50-60 students.",
        },
        {
            title: "University of Delaware (Newark, DE), Undergraduate Research Assistant (Jun 2022 - Jan 2023)",
            content:
            "In the summer of 2022, I engaged in a research project at the Sensify Lab under the guidance of Dr. Matthew Mauriello. During this project, I developed an application employing the Arduino controller and Unity. The purpose of the application was to empower children on the autism spectrum, enabling them to customize music layers in a song to suit their individual preferences. Throughout the project, I gained valuable insights into human-computer interaction and applied sound software engineering practices.",
        },
        {
            title: "University of Delaware (Newark, DE), Computer Science for Social Good Volunteer Outreach (August 2022 - Present)",
            content:
                "I guided potential computer science students to various volunteering opportunities within the field. Additionally, I revamped the club's website, enhancing its functionality to showcase events and pose questions for club members, among other improvements.",
        },
    ];
    return (
        <div>
            <Accordion items={Exepriences} />
        </div>
    );
};
