import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import firebaseConfig from './config';
import firebase from 'firebase';
import ReactDOM from 'react-dom'

firebase.initializeApp(firebaseConfig);

export default class Chatting extends Component {
    constructor(props){
        super(props);
        const {refs} = this; 
        this.state={
            user:null,
            message:'',
            list:[],
            displayDownButton: false,
            scrollPosition: 0
        };
        this.messageRef = firebase.database().ref();
        this.listenMessages();
        // this.handleScroll();
    }
    handleSend=()=>{
        if (this.state.message) {
          var newItem = {
            userName: this.state.user.displayName,
            message: this.state.message,
          }
          this.messageRef.child('messages').push(newItem);
          this.setState({ message: '' });
        }
    }
    handleKeyPress=(event)=>{
        if (event.key !== 'Enter') return;
        this.handleSend();
      }
    handleChange=(e)=>{
        this.setState({message:e.target.value})
    }
    handleSignIn=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }
    handleLogOut=()=>{
        firebase.auth().signOut();
    }
    componentDidMount() {
        const {messageList} = this.refs
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ user });
        });
        this.messageRef
          .limitToLast(10)
          .on('value', message => {
            this.setState({
              list: Object.values(message.val())[0]
            });
          });
        // console.log(ReactDOM.findDOMNode(messageList))
        //   ReactDOM.findDOMNode(messageList).addEventListener('scroll', this.listenToScroll)
    }
    componentDidUpdate(){
        const {messageList} = this.refs;
        // ReactDOM.findDOMNode(messageList).addEventListener('scroll', this.listenToScroll)
        // console.log(ReactDOM.findDOMNode(messageList))
        (this.state.user)?this.scrollToBottom():console.log("What")
    }
    listenMessages() {
        this.messageRef
          .limitToLast(10)
          .on('value', message => {
            this.setState({
              list: Object.values(message.val())[0]
            });
          });
    }
    listenToScroll = () => {
        const { messageList } = this.refs;
        console.log(ReactDOM.findDOMNode(messageList).scrollTop)
        this.setState({
            scrollPosition:ReactDOM.findDOMNode(messageList).scrollTop
        })
    }
    handleScroll=(event)=>{
        const { messageList } = this.refs;
        console.log(ReactDOM.findDOMNode(messageList).scrollTop)
        this.setState({
            // scrollPosition:ReactDOM.findDOMNode(messageList).scrollTop
        })
    }
    scrollToBottom = () => {
        const { messageList } = this.refs;
        const scrollHeight = messageList.scrollHeight;
        const height = messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        // console.log(ReactDOM.findDOMNode(messageList).scrollTop)
        ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
    onScroll=()=>{
        const { refs, props } = this;
        const scrollTop = refs.messageList.scrollTop;
        if (scrollTop === 0) {
        props.fetchHistory();
        }
    }
    render() {
        const {messageList} = this.refs
        return (
            <div>{!this.state.user?
                <div className="nothing">
                    <h3 style={{top: "38%", position: "absolute",left: "50%",transform: "translate(-50%,-50%)"}} ><b>Enter into the Community-chat</b></h3>
                    <div className="chatSign">
                        <Button className="btn-primary" variant="danger" onClick={this.handleSignIn} >Sign In with <i class="fa fa-google fa-fw"></i></Button>
                    </div>
                </div>
                :
                <div>
                <div className="chatOut">
                <Button variant="danger" className="btn-circle btn-xl" onClick={this.handleLogOut} >Sign Out</Button>
                </div>
            <div className="chatBody" ref="messageList">
                {/* {console.log(this.state.list)} */}
                    {Object.keys(this.state.list).map((key,i)=>
                        (this.state.list[key].userName===this.state.user.displayName)?
                        <div className="space message-out">
                            <div className="message message-body-out">{this.state.list[key].message}</div>
                        </div>
                        :
                        <div className="space message-in">
                            <div className="message message-body-in">
                                <div><b>{this.state.list[key].userName}</b></div>{this.state.list[key].message} 
                            </div>
                        </div>
                    )}
            </div>
            <footer className="chatFooter">
                    <div id="ip-container">
                        <input autoComplete="off" type="text" id="ip" placeholder="Type a Message" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                        <div className="send"><button id="send_button" onClick={this.handleSend} ><i class="material-icons">send</i></button></div>
                    </div>
            </footer>
            <div className="scrollDown">
                {!this.state.displayDownButton?<Button variant="light" className="btn-circle btn-md" onClick={this.scrollToBottom} ><i class="material-icons">expand_more</i></Button>:''}
            </div>
            </div>}
            </div>
        )
    }
}
