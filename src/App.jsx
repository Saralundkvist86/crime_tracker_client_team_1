import React, { Component } from 'react'
import TeaserList from "./components/TeaserList"

export class App extends Component {
  render() {
    return (
      <>
        <h1 data-cy='header'>Teaser List</h1>
        <TeaserList />
      </>
    )
  }
}

export default App
