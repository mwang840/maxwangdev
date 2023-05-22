import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function DuckModal(): JSX.Element{
    const [show, setShow] = useState(false);

    const handleOpen = ()=>setShow(true);
    const handleClose = ()=>setShow(false);
    return (<div className="modal show" style={{display: "block", position: "initial"}}>
        <Button variant="primary" onClick={handleOpen}>More Information</Button>
        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Simple Duck Clicking Game</Modal.Title>
                </Modal.Header>

                <Modal.Body>
            A simple Duck Clicking Game that is made in unity. This is my first attempt of learning unity and making sprites move (major upgrade from Scratch).
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" ><a href="https://github.com/mwang840/Duck_Clicking_Game"></a>View Source</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    </div>);
}