import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./CISModal.module.css";

export function CISModal(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const handleOpen = React.useCallback(() => setShow(true), []);
    const handleClose = React.useCallback(() => setShow(false), []);

    React.useEffect(() => {
        console.log(show);
    }, [show]);

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
                <Modal.Header closeButton>
                    <Modal.Title>
                        UD Computer and Information Science Course Scheduler
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        A web application designed to enable undergrad Computer
                        Science students at the University of Delaware to be
                        able plan out the courses they will take.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <a href="https://github.com/UD-CISC275-S22/cis-scheduler-team-007">
                            View Source
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
