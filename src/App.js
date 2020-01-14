import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Data from './components/UserForm'
import SellVariants from './components/SellVariants'
import SellForm from './components/SellForm'
import Chatbot from './components/Chatbot'
import Profile from './components/Profile'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Feedback from './components/Feedback'
import Detail from './components/Detail'
import Pop from './components/Modal'
import Footer from './components/Footer'
import Numerate from './components/Numerate'
import Chat from './components/Chat'
import { useAuth0 } from "./react-auth0-spa";
import SignIn from './components/SignIn'
import Prompt from './components/Prompt'
import Chatting from './components/Chatting'
import {useSelector,useDispatch} from 'react-redux'

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? <Comp {...props} /> : 
        (
        <Redirect to={{
          pathname: "/user-data",
          state: {
            prevLocation: path,
            error: "You need to login first!",
          },
        }}
      />);
      }}
    />
  );
};



function App(){
  const isLogged = useSelector(state=>state.isLogged)
  const requireLogin = (indexState, replace) => {
    if (isLogged===false) {
      replace({
        pathname: '/user-data'
      });
    }
  };    
  return (
    // <Chatbot/>
    <Router>
      <div>
        {/* <Prompt/> */}
        <Header/>
        {/* <SignIn/> */}
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/user-data" component={Prompt}/>
        <Route path="/sell" component={SellForm}>{(!isLogged)?<Redirect to={{pathname:'/user-data',state:{from:'/sell'}}}/>:''}</Route>
        <Route path="/profile" component={Profile}>{(!isLogged)?<Redirect to={{pathname:'/user-data',state:{from:'/profile'}}}/>:''}</Route>
        <Route path="/buy" component={SellVariants}/>
        <Route path='/feedback' component={Feedback}/>
        <Route path="/about" component={About}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/chat" component={Chatting}/>
        </Switch>
        <Chatbot/>
        {/* <Footer/> */}
      </div>
      {/* <Chatbot/> */}
    </Router>
  )
}

export default App;
