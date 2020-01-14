import React, { Component } from 'react'
 
import Sidenav from 'sidenavjs'
import Link from 'react-router-dom/Link'
import Button from 'react-bootstrap/Button'
import ReactDOM from 'react-dom'
 
class Side extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          sidebarOpen: false,
          busy: false,
          touched: false
        }
        this.sidenavOptions = {
          sidenavClass: 'sidenav'
        }
        this.handleClick = this.handleClick.bind(this);
      }
    
      onSetSidebarOpen = open => {
        this.setState({ sidebarOpen: open })
      }
    
      onSetBusy = busy => {
        this.setState({ busy })
      }
    
      onSetTouch = touched => {
        this.setState({ touched })
      }

      handleClick(){
        // const {t} = this.refs;
        this.onSetSidebarOpen(false);
      }
      componentDidMount(){
        this.setup();
      }
      setup(){
        var btnContainer = document.getElementsByClassName("options");

        // Get all buttons with class="btn" inside the container
        // console.log(btnContainer);
        var btns = btnContainer[0]['childNodes'];
        // console.log(btns);

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
              current[0].className = current[0].className.replace(" active", "");
            }
            // current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }
      }
    
      render() {
        const { busy, touched } = this.state
    
        return (
          <React.Fragment>
            <Sidenav
              options={this.sidenavOptions}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              onSetBusy={this.onSetBusy}
              onTouch={this.onSetTouch}
              sidenav={
                <React.Fragment>
                  <div className="header">
                    {/* <i className="material-icons avatar">menu</i> */}
                    <div className="title">DumpMan</div>
                    <div className="headline">
                      THe best place to dump your waste
                    </div>
                  </div>
                  <div>
                    <ul className="options">
                      <li className="btn">
                        <i className="material-icons">account_circle</i>
                        <span><Link to="/profile" onClick={this.handleClick}>Profile</Link></span>
                      </li>
                      <li className="btn">
                      <i className="material-icons" >feedback</i>
                        <span><Link to="/feedback" onClick={this.handleClick}>Feedback</Link></span>
                      </li>
                      <li className="btn">
                      <i class="material-icons">chat</i>
                        <span><Link to="/chat" onClick={this.handleClick}>Chats</Link></span>
                      </li>
                      {/* <li>
                        <Button
                          onClick={() => this.onSetSidebarOpen(false)}
                          // className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                        >
                          Close the sidebar
                        </Button>
                      </li> */}
                      
                    </ul>
                  </div>
                </React.Fragment>
              }
            >
              <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-color--grey-100">
              <i
                      className="material-icons"
                      onClick={() => {
                        this.onSetSidebarOpen(true)
                      }}
                    >
                      menu
                    </i>
              </div>
            </Sidenav>
          </React.Fragment>
        )
      }
    }
    

export default Side

// import React, { Component } from 'react'
 
// import Sidenav from 'sidenavjs'
 
// class Example extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       sidebarOpen: false
//     }
//   }
 
//   onSetSidebarOpen = open => {
//     this.setState({ sidebarOpen: open })
//   }
 
//   render () {
//     return (
//       <Sidenav
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         sidenav={
//           <div>sidenav contents</div>
//         }
//       >
//         <div>
//           body contents
//           <button onClick={() => { this.onSetSidebarOpen(true) }}>
//             Click here to open the sidenav
//           </button>
//         </div>
//       </Sidenav>
//     )
//   }
// }