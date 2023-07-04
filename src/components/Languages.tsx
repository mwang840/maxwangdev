/* eslint-disable indent */
import React from "react";
import { Accordion } from "./Accordion";
import "./Languages.css";
import language from "./assets/programming_languages.jpg";
import {
    FaJs,
    FaHtml5,
    FaCss3,
    FaPython,
    FaJava,
    FaNodeJs,
    FaReact,
    FaRust,
} from "react-icons/fa";
import {
    BiLogoCPlusPlus,
    BiLogoTypescript,
    BiLogoGoLang,
} from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import {
    SiNumpy,
    SiPandas,
    SiExpress,
    SiCsharp,
    SiC,
    SiYaml,
    SiGnubash,
    SiRuby,
    SiDotnet,
} from "react-icons/si";
export function Languages(): JSX.Element {
    const languageItems = [
        {
            title: "Java",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        Java was the first Object-Oriented programming language
                        I learned in high school (2019). The language also
                        introduced me towards basic computer concepts such as
                        recursion, classes, inheritance, and polymorphism.
                        Despite it being one of my favorite languages, I have
                        not utilized it that much, but I am eager to dip my toes
                        into more Java-based opportunities.
                    </p>
                    <span>
                        <FaJava size={40} color="orange" />
                    </span>
                </div>
            ),
        },
        {
            title: "Python",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        Python was the second language, I picked up during my
                        college career in computer science. What a weird syntax
                        at first dealing with the language but I found it easier
                        to write methods and logic without using a lot of lines.
                        Probably one of my favorite dynamically-typed languages.
                        Overall, I have grown into it and found a lot of
                        interest in the language and looking at libraries such
                        as Numpy, Pandas, and Pyspark libraries which are
                        essential tools to use in the Data Science/Ai field.
                    </p>
                    <p>
                        While I have yet to perform a major project with Python,
                        I hope to continue to use it for AI/ML purposes and even
                        make a small bot with the language.
                    </p>
                    <span>
                        <FaPython size={40} color="#ffde57" />
                    </span>
                    <span>
                        <SiNumpy size={40} color="#5ba8ff" />
                    </span>
                    <span>
                        <SiPandas size={40} color="purple" />
                    </span>
                </div>
            ),
        },
        {
            title: "C++",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        C++ was another language, I picked up. A little bit
                        better than C, learning the language helped me
                        understand a lot about memory management. I also picked
                        up data structures that ranged from regular arrays to
                        hashmaps. In a UD-Competitive Programming Club, I used
                        C++ to learn and apply different kinds of algorithms and
                        data structures such as DP, Sorting algorithms, Greedy
                        algorithms, Graphs, and Decision Trees. Further I
                        utilize C++ for my internship this summer too.
                    </p>
                    <span>
                        <BiLogoCPlusPlus size={40} color="#5E97D0" />
                    </span>
                </div>
            ),
        },
        {
            title: "JavaScript",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        JavaScript, the other language is crucial to my career
                        as a software developer. I taught myself JavaScript over
                        the summer of 2022 learning the ins and outs of the
                        language. Although I have not done that much with it, I
                        have made a small discord bot using the discord.js
                        library and made my first website (now an older archived
                        version) with the language. Still, theres more with the
                        language and I hope to continue to use JavaScript more
                        for my career!
                    </p>
                    <span>
                        <FaJs size={40} color="#F0DB4F" />
                        <FaNodeJs size={40} color="lightgreen" />
                    </span>
                </div>
            ),
        },
        {
            title: "TypeScript",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        During college, I was introduced to Typescript (Static
                        Typed JavaScript) by some of my computer science
                        friends. Initially, I thought it was weird due to its
                        syntax but started to have a big liking for it as I
                        worked on projects related to the language including, a
                        Front-end related website with other undergraduate
                        students which allows a client to plan out their
                        semester and their four-year plan for Computer and
                        Information Science/Information Systems Majors/Minors. I
                        also made a fun related website about React.js which I
                        use a lot with this language. Overall, Typescript helped
                        me get into web development and introduced me to another
                        Javascript Framework, React.js, under which this website
                        is built under actually! Im also working on a full stack
                        application typescript based only!
                    </p>
                    <span>
                        <BiLogoTypescript size={40} color="#007acc" />
                        <FaReact size={40} color="lightblue" />
                        <SiExpress size={40} color="green" />
                    </span>
                </div>
            ),
        },
        {
            title: "HTML & CSS",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        HTML 5 and CSS were the first languages I learned when
                        starting my Computer Science Path. With those tools, you
                        can make a good website, Initially putting those two
                        languages off after first starting the Computer Science
                        class, I came back to it when learning React as it
                        involves a combo of JavaScript and TypeScript with
                        important HTML and CSS tags for this website. Those two
                        languages are also the backbones of this website right
                        now! From this, it inspired my interest in full-stack
                        development.
                    </p>
                    <span>
                        <FaHtml5 size={40} color="orange" />
                    </span>
                    <span>
                        <FaCss3 size={40} color="blue" />
                    </span>
                </div>
            ),
        },
        {
            title: "C# and .Net Framework",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        C# was a new language, I acquired throughout my college
                        career. As much I can say, Its a LOT better than Java.
                        Starting in early 2022, I used the language to learn
                        Unity (a 3D game engine) and to learn and understand the
                        basics behind the language. Further in my college
                        Database Systems Class, where I touched the language to
                        learn Blazor (Microsoft version of React.js) and worked
                        in the back-end connecting my oracle SQL database with
                        the Blazor-built website. I like the language a lot and
                        would be open to working with C# for my future career.
                    </p>
                    <p>
                        I revisited the language when troubleshooting students
                        C# problems in databases fixing controller problems and
                        nuget package errors.
                    </p>
                    <span>
                        <SiCsharp size={40} color="#006400" />
                        <SiDotnet size={40} color="#006400" />
                    </span>
                </div>
            ),
        },
        {
            title: "SQL (Structured Query Language)",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        I picked up this language in my college Database Class.
                        Despite its weird syntax, I found it easy to learn and
                        very useful for databases. Understanding the purpose of
                        this language is key, as I used it to help store
                        information that I need inside a database.
                    </p>
                    <p>
                        I revisited the language again when I became a teaching
                        assistant for database systems in the spring
                        troubleshooting undergraduate students problems with
                        their queries and holding office hours for students who
                        have questions with SQL related assignments.
                    </p>
                    <span>
                        <TbSql size={40} color="#00758f" />
                    </span>
                </div>
            ),
        },
        {
            title: "Rust",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        What an unique language. First time learning a language
                        that does not return. From a friend in college who
                        informed that rust does not leave memory errors from c
                        and c++. I have taken a strong liking to it and would
                        consider to use it for the future. So far I am just
                        learning the syntax of the language, have&apos;nt done
                        any projects yet.
                    </p>
                    <span>
                        <FaRust size={40} color="black" />
                    </span>
                </div>
            ),
        },
        {
            title: "GoLang",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        A fun language I picked up last summer, understanding
                        the syntax. It feels weird without the parenthesis
                        around functions, but I have taken a strong liking to it
                        so far. Hope to do more with the language soon!
                    </p>
                    <span>
                        <BiLogoGoLang size={40} color="#29BEB0" />
                    </span>
                </div>
            ),
        },
        {
            title: "Ruby",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        Another python inspired language, I dipped my toes into
                        ruby. So far learning the syntax and its easy to learn.
                        Hoping I can do more with the language and use it as an
                        alternative for web dev in the future!
                    </p>
                    <span>
                        <SiRuby size={40} color="#E0115F" />
                    </span>
                </div>
            ),
        },
        {
            title: "C",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        C is one of my first low-level programming languages. An
                        interesting one, by the way, I learned how to manage
                        memory and worked on some Raspberry Pi projects using
                        the language and displaying the results on the
                        sense-hat. I even made a unix shell project utilizing
                        the language in Operating Systems.
                    </p>
                    <span>
                        <SiC size={40} color="blue" />
                    </span>
                </div>
            ),
        },
        {
            title: "Assembly Language",
            content: (
                <div>
                    <p>
                        I bet you did not see this on there! I learned the basic
                        ins and outs of the language in a college course that
                        talks about and used it for arithmetic bit-shifting
                        operations, branching/looping, recursion, and stack
                        trace. Although not that big on the language, I made a
                        small pi project which also uses the sense hat and
                        displays small features such as a red X, showing
                        initials. I have not ruled out the language despite my
                        having not that much of a preference for the language.
                    </p>
                </div>
            ),
        },
        {
            title: "YAML (yet another markup language)",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        In my sophmore year software engineering class, I was
                        introduced to a bit of yaml from my professor. My
                        professor explained to me that this yaml helped with
                        deployment of my software engineering project. I&apos;ve
                        used a yaml file to help deploy me own personal website.
                        Further in my internship, I have started to get into the
                        yaml syntax used for my project and to help build and
                        deploy the software as well. Hoping to utilize yaml more
                        in my software development career!
                    </p>
                    <span>
                        <SiYaml size={40} color="red" />
                    </span>
                </div>
            ),
        },
        {
            title: "BASH (GNU Shell)",
            content: (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                        Introduced to me in my freshman systems programming
                        class, bash was something I have yet to understand as
                        the syntax was confusing. But during my internship bash
                        was being used a lot for pipeline and devops. I went to
                        revisit bash to pick up its syntax and I hope I can
                        learn more within devops for the future!
                    </p>
                    <span>
                        <SiGnubash size={40} color="lightgreen" />
                    </span>
                </div>
            ),
        },
    ];
    return (
        <div>
            <h1>Languages</h1>
            <img
                src={language}
                alt="Programming Language"
                className="about-me-image"
                width="400px"
                height="300px"
            ></img>
            <div className="container">
                <Accordion items={languageItems}></Accordion>
            </div>
        </div>
    );
}
