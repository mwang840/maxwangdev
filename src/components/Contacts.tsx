/* eslint-disable indent */
import React from "react";
import styles from "./Contacts.module.css";
import {
    FaGithub,
    FaLinkedin,
    FaMailBulk,
    FaYoutube,
    FaPhone,
    FaSpotify,
    FaInstagram,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import Mailto from "./Malito";
export function Contacts(): JSX.Element {
    return (
        <>
            <h1 className={styles.h1}>Contact Me</h1>
            <h3>
                Email: maxwell.y.wang@gmail.com (personal) or maxwang@udel.edu
                (school)
                <FaMailBulk size={40} style={{ color: "gold" }} />
                <Mailto
                    mailto="malito:maxwell.y.wang@gmail.com"
                    label="Personal Email"
                />
                <Mailto mailto="mailto:maxwang@udel.edu" label="School Email" />
            </h3>
            <h3>
                Github: mwang840{" "}
                <FaGithub size={40} style={{ color: "black" }} />
            </h3>
            <h3>
                Phone: 302-264-0777
                <FaPhone size={40} style={{ color: "black" }} />
            </h3>
            <h3>
                <a href="https://www.linkedin.com/in/maxwell-wang-08ws/">
                    Maxwell Wang
                    <FaLinkedin size={40} style={{ color: "darkblue" }} />
                </a>
            </h3>
            <h3>
                <a href="https://www.youtube.com/@draco4809">
                    @draco4809
                    <FaYoutube size={40} style={{ color: "red" }} />
                </a>
            </h3>
            <h3>
                @Maximillian
                <FaSpotify size={40} style={{ color: "lightgreen" }} />
            </h3>
            <h3>
                @wang.flicks
                <FaInstagram size={40} style={{ color: "purple" }} />
            </h3>
            <h3>
                @draco_635
                <SiCodewars size={40} style={{ color: "red" }} />
            </h3>
        </>
    );
}
