import React, { Component } from "react";
import { fetchTeaserListData } from "../modules/reports";

class ReportList extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const data = await fetchTeaserListData();
    this.setState({ data: data });
  };

  render() {
    let teaserList;
    if (this.state.data !== []) {
      teaserList = this.state.data.map((data) => {
        return (
          <div data-id={data.id} data-cy={"data-" + data.id} key={data.id}>
            <h3 data-cy="teaser">{data.description}</h3>
          </div>
        );
      });
    }

    return ( 
    <div>
      <h1>Crime Reports</h1>
      {teaserList}
    </div>
    )
  }
}

export default ReportList
