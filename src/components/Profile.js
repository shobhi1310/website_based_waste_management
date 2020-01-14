import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
const axios = require('axios').default;
const querystring = require('querystring')

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id:'',
            first_name:'',
            last_name:'',
            email:'',
            address:'',
            pswd:'',
            phone:'',
            sold:[],
            bought:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        // TODO 
        // call the method of accessing state and also setting the state for rendering
        const {log} = this.props;
        console.log(log.userId)
        var self=this;
        axios.post('http://localhost:8000/profile',querystring.stringify({
            id:log.userId
        })).then(function(res){
            const {id,
            first_name,
            last_name,
            email,
            address,
            phone}=res.data[0];
            self.setState({
                id,
            first_name,
            last_name,
            email,
            address,
            phone
            })
            // console.log(res.data[0])
            return axios.post('http://localhost:8000/sold',querystring.stringify({
                id:log.userId
            }));
        }).then((res)=>{
            self.setState(
                {sold:res.data}
            )
            // console.log(res.data);
            return axios.post('http://localhost:8000/bought',querystring.stringify({
                id:log.userId
            }));
        }).then((res)=>{
            self.setState(
                {bought:res.data}
            )
            // console.log(res.data[0]);
        }).catch(function(err){
            console.log(err)
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick(e){
        // var val = e.target.name;
        // var val2 = e.target.value;
        const {log} = this.props;
        axios.post('http://localhost:8000/update',querystring.stringify({
            id:log.userId,
            [e.target.name]:e.target.value
        })).then((res)=>{
            if(res.data==='success'){
                window.alert('Profile updated Succesfully');
                window.location.href = "/profile";
            }
            // console.log(res.data)
        }).catch(function(err){
            console.log(err)
        })
    }
    render(){
    return (
        <Container style={{padding:'40px'}}>
            <Table style={{margin:"10px"}}>
                <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{this.state.first_name}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{this.state.last_name}</td>
                </tr>
                <tr>
                    <td>email-id</td>
                    <td>{this.state.email}</td>
                </tr>
                <tr>
                    <td>Adress</td>
                    <td>{this.state.address}</td>
                </tr>
                <tr>
                    <td>Contact</td>
                    <td>{this.state.phone}</td>
                </tr>
                </tbody>
            </Table>
            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Sold Items
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Table>
                        <tr>
                            <th>image</th>
                            <th>date</th>
                            <th>description</th>
                        </tr>
                        {
                            // console.log(this.state.sold)
                        (this.state.sold).map((l)=>
                        <tr>
                            {/* {console.warn(Buffer(l['image']).toString('utf8'))} */}
                            {/* {console.warn(Buffer(l['image']))} */}
                            <td><img src={Buffer(l['image']).toString('utf8')} width='200px'/></td>
                            <td>{l['date']}</td>
                            <td>{l['descr']}</td>
                        </tr>
                        )
                        }
                    </Table>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Bought Items
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Card.Body>
                    <Table>
                    <tr>
                            <th>image</th>
                            <th>date</th>
                            <th>description</th>
                        </tr>
                        {
                            // console.log(this.state.sold)
                        (this.state.bought).map((l)=>
                        <tr>
                            {/* {console.warn(Buffer(l['image']).toString('utf8'))} */}
                            {/* {console.warn(Buffer(l['image']))} */}
                            <td><img src={Buffer(l['image']).toString('utf8')} width='200px'/></td>
                            <td>{l['date']}</td>
                            <td>{l['descr']}</td>
                        </tr>
                        )
                        }
                    </Table>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Change Password
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                <Card.Body>
                    <Form.Label>Enter new password</Form.Label>
                    <Form.Control style={{margin:"10px"}} name="pswd" type="password" value={this.state.pswd} onChange={this.handleChange}></Form.Control>
                    <Button name="pswd" onClick={this.handleClick} value={this.state.pswd}>Reset</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Change Address
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Form.Label>Enter new Address</Form.Label>
                    <Form.Control style={{margin:"10px"}} as="textarea" name="address" value={this.state.address} onChange={this.handleChange}></Form.Control>
                    <Button name="address" onClick={this.handleClick} value={this.state.address}>Reset</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Change Contact
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <Form.Label>Enter new Contact</Form.Label>
                    <Form.Control style={{margin:"10px"}} type="text" name="phone" value={this.state.phone} onChange={this.handleChange}></Form.Control>
                    <Button name="phone" onClick={this.handleClick} value={this.state.phone}>Reset</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </Container>
    );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{}
}

const mapStatetoProps=(state)=>{
    return{
        log: state
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(Profile)
