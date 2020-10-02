import React from 'react'
import { Form, Button } from "semantic-ui-react";


 const LoginForm = () => {
    return (
        <Form>
{/*       <form onSubmit={submitFormHandler} id="login-form">
 */}        <label>Email</label>
        <input name="email" type="email" id="email"></input>

        <label>Password</label>
        <input name="password" type="password" id="password"></input>

        <Button basic color="green" id="submit">
          Submit
        </Button>
     
    </Form>
    )
}


export default LoginForm;