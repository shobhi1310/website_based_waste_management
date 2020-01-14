import React from 'react'
import {Button,Form,Col,Row,Container,Jumbotron,InputGroup} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logIn} from '../actions'
import { connect } from 'react-redux'
const axios = require('axios').default;
const querystring = require('querystring')

// const dis = useDispatch()

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            pswd:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleSubmit(event){
        event.preventDefault();
        const {  history ,increment,prevLoc,user } = this.props;
        // console.log(prevLoc);
        axios.post('http://localhost:8000/sign-in',querystring.stringify({
            email:this.state.email,
            pswd:this.state.pswd,
        }))
        .then(function(res){
            // console.log(res.data[0])
            if(res.data[0]==='user'){
                // console.log("its fine")
                // console.log(history)
                //console.log(this.props)
                //console.log(increment)
                // increment();
                //window.localStorage.setItem('isLogged','true');
                user(res.data[1]);
                increment();
                history.push(prevLoc.state.from);

            //    return  <Redirect to='/about'/>
               
                // console.log(res.data)
            }else{
                window.alert("Wrong User ID or Password Please re-enter correct credentials");
                window.location.href = "/user-data";
            }
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
            <Button variant="primary" type="submit" className="signup">
                Sign In
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
      increment: () => dispatch({ type: 'LOG_IN' }),
      user: (p) =>dispatch({type:'USER',text:p})
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
  )(SignIn)
