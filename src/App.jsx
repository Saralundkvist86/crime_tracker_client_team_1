import LoginForm from "./components/LoginForm";
import TeaserList from "./components/TeaserList";
import { authenticate } from "./modules/authenticate";
import React, { Component } from "react";

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

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
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
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
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
        <h1 data-cy="header">Teaser List</h1>

        <TeaserList />
      </>
    );
  }
}
export default App;
