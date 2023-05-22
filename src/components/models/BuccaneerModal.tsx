import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
export function BuccaneerModal(): JSX.Element{
    const [show, setShow] = useState<boolean>(false);
    const handleOpen = ()=>setShow(true);
    const handleClose = ()=>setShow(false);
    return <div className="modal_show" style={{display: "block", position: "initial"}}>
        <Button variant="primary" onClick={handleOpen}> More Information
            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Buccaneer Brawl</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    A phaser game which teaches people how to construct algorithms, and learning how to debug their program. 
                    Constructed with the phaser library, the game allows a multiplayer section, 
                    allows the player choose moves from a list given and that sprite executes those moves based on the commands given until the player dies, 
                    defeats the other player or the timer runs out.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" ><a href="https://github.com/Spring-2023-CISC374/group-project-buccaneer-brawl"></a>View Source</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </Button></div>;
}