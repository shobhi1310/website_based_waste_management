import React from 'react'
import Card from 'react-bootstrap/Card'
import Link from 'react-router-dom/Link'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {OverlayTrigger,Popover,Tooltip} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import labels from './format'

const axios = require('axios').default

class Holder2 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            show:false,
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTest = this.handleTest.bind(this);
    }

    handleShow(){
        this.setState({show:true});
    }
    handleHide(){
        this.setState({show:false});
    }
    handleClick(val){
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
                this.handleShow();
            }
        }).catch((error)=>{
            console.log(error)
        })
        // console.log("hello")
    }
    handleTest(param){
        console.log(param);
    }
    handleClose(){
        this.setState({show:false});
    }
    render() {
        const categoryl=labels.filter(labe=>labe.category===this.props.name);
        const valll=categoryl[0].types;
        
        return(
        <div>
            <OverlayTrigger
            // trigger="click"
            key="right"
            placement="right"
            overlay={
                <Tooltip id={`popover-positioned-right`}>
                {/* <Tooltip.Title as="h3">{this.props.name}</Tooltip.Title> */}
                {/* <Tooltip.Content> */}
                <ListGroup>
                    {
                        valll.map(val=>(<ListGroup.Item action >{val}</ListGroup.Item>))
                    }
                    {/* <ListGroup.Item action onClickCapture={this.handleClick("a")}>a</ListGroup.Item>
                    <ListGroup.Item action onClick={this.handleClick("b")}>b</ListGroup.Item>
                    <ListGroup.Item action onClick={this.handleClick("c")}>c</ListGroup.Item>
                    <ListGroup.Item action onClick={this.handleClick("d")}>d</ListGroup.Item> */}
                </ListGroup>
                {/* </Tooltip.Content> */}
                </Tooltip>
            }
            >
                <Card style={{width:"280px",height:"250px",margin:"2px"}} className="text-white" onClick={()=>this.handleClick(this.props.name)} id="fun">
                    <Card.Img src={`${this.props.name}.jpg`} style={{width:"280px",height:"250px"}} className='image'/>
                    <Card.ImgOverlay>
                        <Card.Title>{this.props.name}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </OverlayTrigger>
            {/* <Modal show={this.state.show} onHide={this.handleHide}> */}
            {/* <Modal.Body> */}
                {/* <ListGroup>
                    {
                        valll.map(val=>(<ListGroup.Item action href={"#"} onClick={this.handleClick(val)} >{val}</ListGroup.Item>))
                    }
                    <ListGroup.Item action onClickCapture={this.handleClick("a")}>a</ListGroup.Item>
                    <ListGroup.Item action onClick={this.handleClick("b")}>b</ListGroup.Item>
                    <ListGroup.Item action onClick={this.handleClick("c")}>c</ListGroup.Item>
                    <ListGroup.Item action onClick={this.handleClick("d")}>d</ListGroup.Item>
                </ListGroup> */}
            {/* </Modal.Body> */}
            {/* </Modal> */}
            <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>No Waste right now</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Oops! no item available in the inventory for the time being</p>
                        <h4>Visit after some time.</h4>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
            </Modal>
        </div>
        )
    }
}

export default Holder2
