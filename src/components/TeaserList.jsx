import React, { Component } from 'react'

class TeaserList extends Component {
  state = {
    teaserList = null
  }

  componentDidMount() {
    this.getTeaserList()
  }
  
  async getTeaserList() {
    let result = await getData();
    this.setState({teaserList: result.data.teasers})
  } 

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default TeaserList
