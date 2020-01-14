import React from 'react'
import ChatBot,{Loading} from "react-simple-chatbot"


function Chatbot(props) {
    const config={
        floating:true,
        height:"400px"
    }
    const steps = [
        {
         id: "Greet",
         message: "Hello, Welcome to our shop\n Do you need help?",
         trigger: "1"
        },
        {
         id: "1",
         options:[
           {value:1, label:"Yes", trigger:"2"}
          ]
        },
        {
          id: "2",
          message:"Great!",
          trigger:"3"
         },
        {
          id: "3",
          message: "What kind of help do you need?",
          trigger:"4"
        },
        {
          id:"4",
          options:[
            {value:1, label:"Customer Support", trigger:"5"},
            {value:2, label:"waste management", trigger:"11"},
            {value:3, label:"Feedback", trigger:"12"}
          ]
        },
        {
          id:"5",
          message:"What is your name?",
          trigger:"name"
        },
        {
          id:"name",
          user:true,
          trigger:"6"
        },
        {
          id:"6",
          message:'Hi {previousValue}! Enter your contact number',
          trigger:"contact"
        },
        {
          id:"contact",
          user:true,
          trigger:"7"
        },
        {
          id:"7",
          message:"Our service team will be shortly calling you on the provided number\n Thank You",
          trigger:"8"
        },
        {
          id:"8",
          message:"Would You like some other services?",
          trigger:"9"
        },
        {
          id:"9",
          options:[
            {value:1, label:"Yes", trigger:"2"},
            {value:2, label:"No", trigger:"10"}
          ]
        },
        {
          id:"10",
          message:"Thank You!\nHave a nice day.",
          end:true
        },
        {
          id:"11",
          message:"lol",
          end:true
        },
        {
          id:"12",
          component:(<div>For redirection click <a href="\feedback">here</a></div>),
          trigger:"9"
        },
        {
          id:"13",
          message:"B",
          end:true
        }
      ];
    return <ChatBot steps={steps}{...config} />;
  }

export default Chatbot
