require('../styles/App.scss');
require('../styles/Login.css');
import React from 'react';
import ChatApp from './ChatApp';

// This is the first screen seen by the user. We should display some way for
// them to enter their name and enter the chat room
class App extends React.Component {
  render() {
    // Display a simple login screen with a username field and a submit button

    return (

      // <div className="container">
      //   <h1>Hello </h1>
      //   <div className="col-lg-6"></div>
      // </div>
      <div className="container col-lg-12 loginBackground">
        <div className="container col-lg-6 center-block loginContainer mt-5 p-4">
          <form className="form-signin">       
              <h2 className="form-signin-heading">Login</h2>
                <div className="float-left col-lg-12 mb-3"><input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" /></div>
                <div className="float-left col-lg-12 mb-3"><input type="password" class="form-control" name="password" placeholder="Password" required=""/> </div>     
                <label class="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                </label>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
            </form>
        </div>
      </div>
      // <div className="loginForm">
      //    
      // </div>
    )
  }

}
App.defaultProps = {
};

export default App;

