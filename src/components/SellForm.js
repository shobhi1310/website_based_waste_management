import React from 'react'
import {Row,Container,Form,Col,Button,Jumbotron,Dropdown} from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'
import labels from './format'
import {connect} from 'react-redux'


const axios = require('axios').default;
const querystring = require('querystring')


class SellForm extends React.Component {
    constructor(){
        super();
        this.state={
            selectedOption:'',
            date:new Date(),
            cat:'',
            subcat:'',
            selectedfile:'',
            descr:'',
            type:'',
            user_id:'',
            price:''
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        // this.formatDate = this.formatDate.bind(this)
        this.convert = this.convert.bind(this)
    }
    handleCheck(event){
        this.setState({
            selectedOption:event.target.value
        });
    }
    handleChange(e){
        this.setState({cat:e.target.value});
    }
    handleClick(evt,evtkey){
        this.setState({cat:evtkey.target.getAttribute('value'),subcat:''});
    }
    handleClick2(evt,evtkey){
        // console.log(evtkey.target)
        this.setState({subcat:evtkey.target.getAttribute('value')});
    }
    handleFile(event){
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=(event)=>{
            console.warn(event.target.result);
            this.setState({selectedfile:event.target.result});
        }
    }
    handleChange2(event){
        this.setState({
            date:event
        });
    }
    handleChange3(e){
        this.setState({descr:e.target.value})
    }
    handleChange4(e){
        this.setState({
            price:e.target.value
        })
    }
    handleSubmit(event){
        // event.preventDefault();
        const {login,prevLoc,log} = this.props;
        // console.log(this.state.date)
        axios.post('http://localhost:8000/post-sell',querystring.stringify({
            degradable:this.state.selectedOption==='op1'?true:false,
            cat:this.state.cat,
            date:this.convert(this.state.date.toString()),
            subcat:this.state.subcat,
            selectedfile:this.state.selectedfile,
            descr:this.state.descr,
            type:"sold",
            user_id:log.userId,
            price:this.state.price
        })).then(function(res){
            window.alert(res.data)
        })
        .catch(function(err){
            window.alert(err)
        });
    }
    convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    render(){

    return (
        <div className="form">
        <div id="form">
            <Container>
                <Row>
                    <Col>
                    <h2 style={{color:"#8de0c1"}} >Waste info.</h2>
                    <Jumbotron style={{backgroundColor:"#e9ecefb8"}} >
            <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
            
            <Form.Group as={Row}>
                <Form.Label column sm="4">What is your waste</Form.Label>
                <Col>
                <Form.Check type="radio" label="biodegradable" value="op1" checked={this.state.selectedOption==="op1"} onChange={this.handleCheck}/>
                <Form.Check type="radio" label="non-biodegradable" value="op2" checked={this.state.selectedOption==="op2"} onChange={this.handleCheck}/>
                </Col>
            </Form.Group>
            {(this.state.selectedOption==='op1')?(
                <Form.Group as={Row}>
                <Form.Label column sm="4">When was it generated?</Form.Label>
                <Col>
                <DateTimePicker 
                disableClock value={this.state.date} 
                defaultValue={new Date()} 
                onChange={this.handleChange2}
                // formatMonthYear={(locale, date) => this.formatDate(date, 'YYYY')} 
                />
                </Col>
            </Form.Group>
            ):(
                ''
            )}
            <Form.Group as={Row} controlId="formBasicEmail">
                <Form.Label column sm="4">Select your waste category</Form.Label>
                <Col sm="8">
                
                <Dropdown onSelect={this.handleClick}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {this.state.cat}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {labels.map(l=><Dropdown.Item value={l.category}>{l.category}</Dropdown.Item>)}
                </Dropdown.Menu>
                </Dropdown>
                <Form.Text className="text-muted">
                Please do select from our provided list
                </Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
                <Form.Label column sm="4">Select the required sub category</Form.Label>
                <Col sm="8">
                <Dropdown onSelect={this.handleClick2}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {this.state.subcat}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        ((labels.filter(labe=>labe.category===this.state.cat))[0].types).map(l=><Dropdown.Item value={l}>{l}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
                </Dropdown>
                <Form.Text className="text-muted">
                Please do select from our provided list
                </Form.Text>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row}>
                <Form.Label column sm="4">Describe the waste(optional)</Form.Label>
                <Col sm="8">
                <Form.Control as="textarea" rows="3" type="text" onChange={this.handleChange3}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="4">Upload image of the waste(optional)</Form.Label>
                <Col sm="8">
                <Form.Control type="file" name="file" onChange={this.handleFile}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="4">Set Price-Range</Form.Label>
                <Col sm="0"><h5 style={{alignContent:"center",marginTop:"8px"}}>&#8377;</h5></Col>
                <Col sm="3">
                <Form.Control type="text" placeholder="Enter Price  " list="price" autoComplete="off" onChange={this.handleChange4} />
                <datalist id="price">
                    <option>below 1000</option>
                    <option>1000 - 2000</option>
                    <option>2000 - 3000</option>
                    <option>3000 - 4000</option>
                    <option>4000 - 5000</option>
                    <option>above 5000</option>
                </datalist>
                </Col>
            </Form.Group>
            <Button variant="success" type="submit" className="signup">
                Sell
            </Button>
            </Form>
            </Jumbotron>
            </Col>
            </Row>
            </Container>
        </div>
        </div>
    );
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const mapStateToProps=(state)=> {
    return {
        log: state
    } 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SellForm)
