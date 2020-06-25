import React from 'react';

// This component is where the user can type their message and send it
// to the chat room. We shouldn't communicate with the server here though.
class ChatInput extends React.Component {

  constructor(props){
    super(props);
    this.handleChatInput = this.handleChatInput.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
    this.state = ({"text" : ''});
  }

  render() {
    // Display a user input form and do something when it is submitted

    return(
      <form className="chat-input" onSubmit={this.handleChatInput}>
        <input type="text"
          onChange = {this.handleInputText}
          value = {this.state.text}
          placeholder="Write a message...."
          required
        ></input>
      </form>
    )
  }

  handleInputText(event){
    this.setState({text : event.target.value});
  }

  handleChatInput(event){
    event.preventDefault();
    this.props.onSend(this.state.text);
    this.setState({text : ""});
  }

}

ChatInput.defaultProps = {
};

export default ChatInput;
