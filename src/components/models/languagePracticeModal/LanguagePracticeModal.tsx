import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./LanguagePracticeModal.module.css";

export function LanguagePracticeModal(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    return (
        <>
            <Button
                className={styles.modal_toggle}
                variant="outline-primary"
                onClick={handleOpen}
            >
                More Information
            </Button>
            <Modal
                style={{ opacity: show ? 1 : 0 }}
                show={show}
                onHide={handleClose}
            >
                <Modal.Header>
                    <Modal.Title>Programming Practice Problems</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Applying Data Structures and Algorithms towards the
                        programming languages I know. Via codewars, codeforces
                        and leetcode, I&apos;ve started to build up my problem
                        solving skills dilligently.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <a href="https://github.com/mwang840/LanguagePractice">
                            View Source
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
