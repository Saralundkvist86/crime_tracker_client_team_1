
import LoginForm from './components/LoginForm'
import TeaserList from "./components/TeaserList"

import React, { Component } from 'react'

class App extends Component {


  render() {
    return (
      <>
        <h1 data-cy='header'>Teaser List</h1>
      <LoginForm />
      <TeaserList /> 
      </>
    )
  }
}
export default App



