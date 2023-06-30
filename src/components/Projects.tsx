/* eslint-disable indent */
import React from "react";
import scheduler from "./assets/cis-scheduler.png";
import { DuckModal } from "./models/DuckModal/DuckModal";
import { CISModal } from "./models/CISModal/CISModal";
import { RINMODAL } from "./models/RINModal/RINModal";
import { PIModal } from "./models/PIModal/PIModal";
import react from "./assets/reactinANutshell.png";
import pi from "./assets/raspberrypi.jpg";
import duckies from "./assets/duckies.png";
import { Button, Image, Modal } from "react-bootstrap";
import { BuccaneerModal } from "./models/BuccaneerModal/BuccaneerModal";
import buccaneer from "./assets/Buccaneer.png";
import styles from "./Projects.module.css";

type ModalShows = {
    CIS: boolean;
};

export function Projects(): JSX.Element {
    return (
        <>
            <div className={styles.project_groot}>
                <div>
                    <h1>Projects</h1>
                    <h3>
                        Feel free to check out the projects that I have done
                        whether it was in a group setting or not. Click on the
                        links below each image to learn more!
                    </h3>
                </div>
                <div className={styles.project_content} id="project_content">
                    <div className={styles.project}>
                        <Image
                            className={styles.project_image}
                            src={scheduler}
                            alt="Course Scheduler"
                        />{" "}
                        <CISModal />
                    </div>
                    <div className={styles.project}>
                        <Image
                            className={styles.project_image}
                            src={buccaneer}
                            alt="Buccaneer"
                        />
                        <BuccaneerModal />
                    </div>
                    <div className={styles.project}>
                        <Image
                            className={styles.project_image}
                            src={react}
                            alt="React"
                        />
                        <RINMODAL />
                    </div>
                    <div className={styles.project}>
                        <Image
                            className={styles.project_image}
                            src={pi}
                            alt="Raspberry Pi"
                        />
                        <PIModal />
                    </div>
                    <div className={styles.project}>
                        <Image
                            className={styles.project_image}
                            src={duckies}
                            alt="duck game"
                        />
                        <DuckModal />
                    </div>
                </div>
            </div>
        </>
    );
}
