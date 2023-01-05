import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CISModal.css";
export function CISModal(): JSX.Element{
    //Indicate whether the modal appears showing or not
    const [show, setShow] = useState<boolean>(false);
    //Use state
    const handleOpen = ()=>setShow(true);
    const handleClose = ()=>setShow(false);
    return <>
        <Button variant="primary" onClick={handleOpen}>More Information</Button>
        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header>
                <Modal.Title>UD Computer and Information Science Course Scheduler</Modal.Title>
            </Modal.Header>
            <Modal.Body><p>A web application designed to enable undergrad Computer Science students at the University of Delaware to be able plan out the courses they will take.</p></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
            Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    <a href="https://github.com/UD-CISC275-S22/cis-scheduler-team-007">View Source</a>
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}