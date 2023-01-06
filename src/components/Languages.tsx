import React  from "react";
import { Accordion } from "./Accordion";
import "./Languages.css";
import language from "./assets/programming_languages.jpg";
export function Languages(): JSX.Element{

    const languageItems = [
        {
            title: "Java",
            content: (
                <div>
                    <p>Java was the first Object-Oriented programming language I learned in high school (2019). 
                The language also introduced me towards basic computer concepts such as recursion, classes, inheritance, and polymorphism. 
                Despite it being one of my favorite languages, I have not utilized it that much, but I am eager to dip my toes into more Java-based opportunities.
                    </p>
                </div>
            )
        },
        {
            title: "Python",
            content : (
                <div>
                    <p>Python was the second language, I picked up during my college career in computer science.
                     What a weird syntax at first dealing with the language but I found it easier to write methods and logic without using a lot of lines. 
                     Probably one of my favorite dynamically-typed languages.
                    Overall, I have grown into it and found a lot of interest in the language and looking at libraries such as Numpy, Pandas, and Pyspark libraries which are essential tools to use in the Data Science/Ai field.
                    </p>
                    <p>While I have yet to perform a major project with Python, I hope to continue to use it for AI/ML purposes and even make a small bot with the language.</p>
                </div>
            )
        },
        {
            title: "C++",
            content: (
                <div>
                    <p>C++ was another language, I picked up. A little bit better than C, learning the language helped me understand a lot about memory management.
                I also picked up data structures that ranged from regular arrays to hashmaps. 
                In a UD-Competitive Programming Club, I used C++ to learn and apply different kinds of algorithms and data structures such as DP, Sorting algorithms, Greedy algorithms, Graphs, and Decision Trees.
                    </p>
                </div>
            )
        },
        {
            title: "JavaScript",
            content : (
                <div>
                    <p>
                    JavaScript, the other language is crucial to my career as a software developer. 
                    I taught myself JavaScript over the summer of 2022 learning the ins and outs of the language. 
                    Although I have not done that much with it, I have made a small discord bot using the discord.js library and made my first website (now an older archived version) with the language. 
                    Still, theres more with the language and I hope to continue to use JavaScript more for my career!
                    </p>
                </div>
            )
        },
        {
            title: "TypeScript",
            content: (
                <div>
                    <p>During college, I was introduced to Typescript (Static Typed JavaScript) by some of my computer science friends.
                    Initially, I thought it was weird due to its syntax but started to have a big liking for it as I worked on projects related to the language including, a Front-end related website with other undergraduate students which allows a client to plan out their semester and their four-year plan for Computer and Information Science/Information Systems Majors/Minors.
                    I also made a fun related website about React.js which I use a lot with this language.
                    Overall, Typescript helped me get into web development and introduced me to another Javascript Framework, React.js, under which this website is built under actually!
                    </p>
                </div>
            )
        },
        {
            title: "HTML & CSS",
            content : (
                <div>
                    <p>
                    HTML 5 and CSS were the first languages I learned when starting my Computer Science Path. 
                    With those tools, you can make a good website,
                    Initially putting those two languages off after first starting the Computer Science class, I came back to it when learning React as it involves a combo of JavaScript and TypeScript with important HTML and CSS tags for this website.
                    Those two languages are also the backbones of this website right now! From this, it inspired my interest in full-stack development.
                    </p>
                </div>
            )
        },
        {
            title: "C# and .Net Framework",
            content: (
                <div>
                    <p>
                    C# was a new language, I acquired throughout my college career.
                    As much I can say, Its a LOT better than Java.
                    Starting in early 2022, I used
                    the language to learn Unity (a 3D game engine) and to learn and understand the basics behind the language.
                    Further in my college Database Systems Class, where I touched the language to learn Blazor (Microsoft version of React.js) and worked in the back-end connecting my oracle SQL database with the Blazor-built website.
                    I like the language a lot and would be open to working with C# for my future career.
                    </p>
                </div>
            )
        },
        {
            title: "SQL (Structured Query Language)",
            content: (
                <div>
                    <p>I picked up this language in my college Database Class. Despite its weird syntax, I found it easy to learn
                        and very useful for databases. Understanding the purpose of this language is key, as I used it to help store information that I 
                        need inside a database.
                    </p>
                </div>
            )
        },
        {
            title: "C",
            content : (
                <p>C is one of my first low-level programming languages.
                An interesting one, by the way, I learned how to manage memory and worked on some Raspberry Pi projects using the language and displaying the results on the sense-hat.
                I even made a decent shell project utilizing the language in Operating Systems.
                </p>
            )
        },
        {
            title: "Assembly Language",
            content: (
                <div>
                    <p>I bet you did not see this on there!
            I learned the basic ins and outs of the language in a college course that talks about and used it for arithmetic bit-shifting operations, branching/looping, recursion, and stack trace.
            Although not that big on the language, I made a small pi project which
            also uses the sense hat and displays small features such as a red X, showing initials. 
            I have not ruled out the language despite my having not that much of a preference for the language.
                    </p>
                </div>
            )
        }
    ];
    return(

        <div>
            <h1>Languages</h1>
            <img src={language} alt="Programming Language" className="about-me-image"></img>
            <div className="container">
                <Accordion items={languageItems}></Accordion>
            </div>
        </div>
    );
}

