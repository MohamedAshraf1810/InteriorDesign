import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./PopUp.scss";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

const PopUp = () => {
  const [x, setX] = useState(true);
  //   #272727
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={x}
        className="CustomModal"
      >
        <Modal.Header className="ModalHeader">
          <Modal.Title
            className="ModalTitle"
            id="contained-modal-title-vcenter"
          >
            Important Notice !
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="ModalBody">
          <h4 className="ModalHeader">Hello ,</h4>
          <p className="ModalParagraph">
            This website was made by ReactJS <FontAwesomeIcon icon={faReact} /> <br />
            this template is Found on themeforest and i take the idea to do it on my own <br />
            Thanks  <FontAwesomeIcon icon={faFaceSmile} /> .
          </p>
          <span className="Owner">Made By Mohamed Ashraf</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="CloseButton"
            onClick={() => {
              setX(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
