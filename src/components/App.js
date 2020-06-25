require('../styles/App.scss');
require('../styles/Login.css');
import React from 'react';
import ChatApp from './ChatApp';

// This is the first screen seen by the user. We should display some way for
// them to enter their name and enter the chat room
class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {username : '', password : ''};
    this.credentialChangeHandler = this.credentialChangeHandler.bind(this);
    this.loginSubmitHandler = this.loginSubmitHandler.bind(this);
  }


  render() {
    // Display a simple login screen with a username field and a submit button
    if(this.state.submitted){
      return (
        <ChatApp username = {this.state.username}/>
      )
    }

    return (
      <div className="container loginBackground">
        <div className="container col-lg-6 center-block loginContainer mt-5 p-4">
            <form className="form-signin" onSubmit={this.loginSubmitHandler}>       
              <h2 className="form-signin-heading">Login</h2>
                
                <div className="float-left col-lg-12 mb-3">
                    <input type="text" className="form-control" name="username" placeholder="Email Address" required="" 
                    autoFocus="" onChange={this.credentialChangeHandler} />
                </div>
                
                <div className="float-left col-lg-12 mb-3">
                    <input type="password" className="form-control" name="password" placeholder="Password" required=""
                     onChange={this.credentialChangeHandler}/> 
                </div>     
                
                <label className="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                </label>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
            </form>
        </div>
      </div>
    )
  }

  credentialChangeHandler(event){
    
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  loginSubmitHandler(event){
      event.preventDefault();
      console.log(this.state.username, this.state.password);
      this.setState({submitted : true, username : this.state.username, password : this.state.password});
  }

}
App.defaultProps = {
};

export default App;

