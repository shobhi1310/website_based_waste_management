import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Autocomplete from './AutoComplete'
import Example from './AutoSuggest'
import Side from './Side'
import Link from 'react-router-dom/Link'
import Dropdown from 'react-bootstrap/Dropdown'
import list from './list'
import NavBar from './NavBar'
import {logIn} from '../actions'
import {useSelector,useDispatch} from 'react-redux'
import { InputGroup } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import {Redirect} from 'react-router-dom'
const axios = require('axios').default
const querystring = require('querystring')



const Header = () => {
    const isLogged = useSelector(state=>state.isLogged)
    const dispatch = useDispatch();
    const [val,setVal] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit=(event)=>{
        axios.get("http://localhost:8000/search",{
            params:{
                item:val
            }
        }).then((res)=>{
            var count = Object.keys(res.data).length;
            if(count>0){
                //handle redirection
                // console.log("fine");
                window.localStorage.setItem('content',JSON.stringify(res.data));
                window.location.href = "/detail"
                // <Redirect to={{pathname:'/user-data',state:{from:'/sell'}}}/>
            }
            else{
                handleShow();
            }
        }).catch((error)=>{
            console.log(error)
        })
        // console.log("hello")
    }
    const handleEnter=(event)=>{
        if(event.keyCode===13){
            handleSubmit();
        }
    }
    const handleChange=(event)=>{
        setVal(event.target.value)
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>No Waste right now</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Oops! no item available in the inventory for the time being</p>
                        <h4>Visit after some time.</h4>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
            </Modal>
                <Navbar bg="dark" variant="dark" id="test">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Side/>
                <Col>
                <Nav>    
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/sell">Sell</Nav.Link>
                    <Nav.Link href="/buy">Buy</Nav.Link>
                </Nav>
                </Col>
                <Col>
                <InputGroup>
                <Form.Control type="text" placeholder="Search...." list="type" autoComplete="off" value={val} onChange={handleChange} onKeyUp={handleEnter}/>
                <datalist id="type">
                    {
                        list.map((l)=><option>{l}</option>)
                    }
                </datalist>
                <InputGroup.Append>
                    <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
                </InputGroup.Append>
                </InputGroup>
                </Col>
                <Col >
                <div style={{float:"right"}}>
                {(isLogged)?<Link to='/'><Button variant="danger" onClick={()=>dispatch(logIn())}>Log Out</Button></Link>:<Link to='/user-data'><Button variant="success">Sign-In/Register</Button></Link>}
                </div>
                </Col>
            </Navbar>
        </div>
    )
}

export default Header
