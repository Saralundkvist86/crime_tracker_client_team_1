import LoginForm from "./components/LoginForm";
import DisplayCrimeData from "./components/DisplayCrimeData";
import { authenticate } from "./modules/authenticate";
import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class App extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false,
  };

  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <Button
              color="green"
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message">
            You're logged in as:{" "}
            {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        );
        break;
      default:
        break;
    }
    

    return (
      <>
        <h1 data-cy="header"> Log in to read the entire crime report</h1>
        <div id="render"> {renderLogin} </div>

        <DisplayCrimeData authenticated={this.state.authenticated} />
      </>
    );
  }
}
export default App;
