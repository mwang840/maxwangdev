import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./RINModal.css";
export function RINMODAL(): JSX.Element{
    //Indicate whether the modal appears showing or not
    const [show, setShow] = useState<boolean>(false);
    //Use state
    const handleOpen = ()=>setShow(true);
    const handleClose = ()=>setShow(false);
    return <>
        <Button variant="primary" onClick={handleOpen}>More Information</Button>
        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header>
                <Modal.Title>React in a Nutshell</Modal.Title>
            </Modal.Header>
            <Modal.Body><p>A basic description about React.js hooks. Implemented with some memes and a basic example/demo of react</p></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
            Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    <a href="https://github.com/mwang840/React-In-A-nutshell">View Source</a>
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}