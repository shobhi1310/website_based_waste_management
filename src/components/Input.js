import React, { Component } from 'react';
// import './Form.css';
import Message from './Message';
import firebase from 'firebase';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      message: '',
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.messageRef = firebase.database().ref().child('messages');
    this.listenMessages();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      this.setState({'userName': nextProps.user.displayName});
    }
  }
  handleChange(event) {
    this.setState({message: event.target.value});
  }
  handleSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      }
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }
  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }
  listenMessages() {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        this.setState({
          list: Object.values(message.val()),
        });
      });
  }
  render() {
    return (
      <div className="form">
        <div className="form__message">
            <Container>
          { this.state.list.map((item, index) =>
            <Message key={index} message={item} />
          )}
          </Container>
        </div>
        <footer className="chat-footer">
            <Container>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Type Message......"
                    aria-label="Type Message....."
                    aria-describedby="basic-addon2"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    />
                    <InputGroup.Append>
                    <Button 
                    variant="outline-secondary"
                    onClick={this.handleSend}
                    >Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        </footer>
      </div>
    );
  }
}

export default Input
