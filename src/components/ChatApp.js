require('../styles/ChatApp.css');

import React from 'react';
import io from 'socket.io-client';
import config from '../config';

import Messages from './Messages';
import ChatInput from './ChatInput';

// This is where the main logic of the app will be. Here is where we will
// communicate with the chat server (send and receive messages). We will
// then pass the data received from the server to other components to be
// displayed
class ChatApp extends React.Component {


  constructor(props){

    super(props);
    this.state = ({messages : []});
    //this.state = ({username : this.props.username});
    
    this.sendHandler = this.sendHandler.bind(this);
    this.addMessage = this.addMessage.bind(this);

    //connect to server
    

    this.socket = io(config.api, { query: `username=${props.username}` }).connect();

    //listen to socket
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });


  }

  sendHandler(message, props){

      //console.log(this.state.username);

      const messageObject = {
        username : this.props.username,
        message
      };

      this.socket.emit('client:message', messageObject);
      messageObject.fromMe = true;
      this.addMessage(messageObject);

  }

  addMessage(message){
      const messages = this.state.messages;
      messages.push(message);
      
      this.setState({messages});
  }

  render() {
    // Here we want to render the main chat application components

    return(
    <div className ="container chatBackground">
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
    </div>
    )
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
