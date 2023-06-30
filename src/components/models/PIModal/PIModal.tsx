import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./PIModal.module.css";

export function PIModal(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    //Use state
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
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
                dialogClassName="modal-90w"
            >
                <Modal.Header>
                    <Modal.Title>Assembly Language Pi Projects</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        A small pi project demonstrating my assembly language
                        skills.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <a href="https://github.com/mwang840/AssemblyProjects">
                            View Source
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
