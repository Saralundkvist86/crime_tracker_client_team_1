import React from "react";
import { Button, Form } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Form>
      <form onSubmit={submitFormHandler} id="login-form">
        <label>Email</label>
        <input name="email" type="email" id="email"></input>

        <label>Password</label>
        <input name="password" type="password" id="password"></input>

        <Button basic color="green" id="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
