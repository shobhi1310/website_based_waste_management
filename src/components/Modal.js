import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';

function Pop() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <ListGroup>
              <ListGroup.Item action href="#">paint</ListGroup.Item>
              <ListGroup.Item action>chemical</ListGroup.Item>
              <ListGroup.Item action>tyres</ListGroup.Item>
              <ListGroup.Item action>batteries</ListGroup.Item>
              <ListGroup.Item action>aerosol spray can</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }

export default Pop
