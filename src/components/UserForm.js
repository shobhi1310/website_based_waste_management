import React from 'react'
import {Button,Form,Row,Col,Container,Jumbotron,InputGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
const axios = require('axios').default;
const querystring = require('querystring')


class Data extends React.Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            pswd:'',
            address:'',
            phone:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const {history,increment,prevLoc} = this.props;
        // console.log("Submission successful");
        axios.post('http://localhost:8000/data',querystring.stringify({
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            pswd:this.state.pswd,
            address:this.state.address,
            phone:this.state.phone
        }))
        .then(function(res){
            // console.log(res.data.insertId)
            increment();
            history.push(prevLoc.state.from);
        })
        .catch(function(err){
            console.log(err)
        });
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render(){
    return (
        <div>
            {/* <Button variant="primary">Primary</Button> */}
            <Container>
                <Row>
                    <Col>
                    <Jumbotron>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Name</Form.Label>
                <Col sm="10">
                    <InputGroup>
                <Form.Control type="text" placeholder="First Name" name="first_name" onChange={this.handleChange} />
                <Form.Control type="text" placeholder="Last Name" name="last_name" onChange={this.handleChange}/>
                </InputGroup>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
                <Form.Label column sm="2">Email id</Form.Label>
                <Col sm="10">
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicPassword">
                <Form.Label column sm="2">Password</Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" name="pswd" onChange={this.handleChange}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Address</Form.Label>
                <Col sm="10">
                <Form.Control as="textarea" rows="3" name="address" onChange={this.handleChange}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Phone number</Form.Label>
                <Col>
                <Form.Control name="phone" onChange={this.handleChange}/>
                </Col>
            </Form.Group>
            <div>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</div>
            <Button variant="primary" type="submit" className="signup">
                Sign Up
            </Button>
            </Form>
            </Jumbotron>
            </Col>
            </Row>
            </Container>
        </div>
    );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'LOG_IN' })

    }
  }

const mapStateToProps=(state)=> {
    return {
        log: state
    }
 
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Data)
