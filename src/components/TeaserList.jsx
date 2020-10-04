import { fetchTeaserListData } from "../modules/crimeReports";
import parse from "html-react-parser";
import React, { Component } from "react";

class TeaserList extends Component {
  state = {
    crimeData: [],
  };

  componentDidMount = async () => {
    const crimeData = await fetchTeaserListData();
    this.setState({ crimeData: crimeData });
  };

  render() {
    const authenticated = this.props.authenticated;
    let teaserList;
    teaserList = this.state.crimeData.map((data) => {
      return (
        <div data-cy={"data-" + data.id} key={data.id}>
          <h3 data-cy="teaser" id="teaser">
            {parse(data.description)}
          </h3>
          {data.imgage}

          {authenticated && (
            <p data-cy="content" id="content">
              {parse(data.content)}
            </p>
          )}
        </div>
      );
    });

    return (
      <div>
        <h1>Latest Crime Reports</h1>
        {teaserList}
      </div>
    );
  }
}

export default TeaserList;
