import React from "react";
import {  Button } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    
      <form onSubmit={ submitFormHandler } id="login-form">
        <label>Email</label>
        <input name="email" type="email" id="email"></input>

        <label>Password</label>
        <input name="password" type="password" id="password"></input>

        <Button basic color="green" id="submit">
          Submit
        </Button>
      </form>
   
  );
};

export default LoginForm;
