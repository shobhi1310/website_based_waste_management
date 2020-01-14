import React,{useState} from 'react'
import {Modal,Button,Nav,Tab,Tabs} from 'react-bootstrap'
import Data from './UserForm'
import SignIn from './SignIn'
import {useDispatch} from 'react-redux'

const Prompt = (props) => {
    const [show, setShow] = useState(true);
    const [content, setContent] = useState('type1')

    const handleToggle = (e) => setContent(e.target.name)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const {  history,location } = props;
    // console.log(props.location)
    return (
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Button variant="outline-info" href="/"><i class="material-icons">arrow_back</i></Button>
          </Modal.Header>
          <Modal.Body>
            {
                (content==='type1')?<SignIn history={history} prevLoc={location}/>:<Data prevLoc={location} history={history}/>
            }
          </Modal.Body>
          <Modal.Footer>
            <Nav variant="tabs" defaultActiveKey="#">
              <Nav.Item>
                <Nav.Link href="#" name="type1" onClick={handleToggle} >Sign In</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" name="type2" onClick={handleToggle} >Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Footer>
        </Modal>
      );
}

export default Prompt
