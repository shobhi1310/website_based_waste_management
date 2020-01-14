import React, { Component } from 'react';
// import logo from '../src/logo.svg';
// import '../src/App.css';
import Input from './Input';
import firebase from 'firebase';
import firebaseConfig from './config';
import Button from 'react-bootstrap/Button'

// firebase.initializeApp(firebaseConfig);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div>
        <div className="app__header">
          <h2>
            Discuss about waste
          </h2>
          { !this.state.user ? (
            <Button
              className="app__button"
              variant="danger"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </Button>
          ) : (
            <Button
              className="app__button"
              variant="success"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </Button>
          )}
        </div>
        <div className="app__list">
          <Input user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default Chat