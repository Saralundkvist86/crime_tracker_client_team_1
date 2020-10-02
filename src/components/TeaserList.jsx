// import React, { Component } from "react";
// import { fetchTeaserListData } from "../modules/reports";

// class ReportList extends Component {
//   state = {
//     data: [],
//     isHidden: false,
//   };

//   componentDidMount = async () => {
//     const data = await fetchTeaserListData();
//     this.setState({ data: data });
//   };

//   render() {
//     let teaserList = this.state.data.map((data) => {
//       return (
//         <div data-cy={"data-" + data.id} key={data.id}>
//           <button onClick={() => this.setState({ isHidden: true })}>
//             <h3 data-cy="teaser">{data.description}</h3>{" "}
//           </button>
//           {this.state.isHidden && <p data-cy="content">{data.content}</p>}
//         </div>
//       );
//     });
//     return (
//       <>
//         <h1>Crime Reports</h1>
//         {teaserList}
//       </>
//     );
//   }
// }

// export default ReportList;
import React, { useState, useEffect } from "react";
import { fetchTeaserListData } from "../modules/reports";

const TeaserList = () => {
  let [crimeData, setCrimeData] = useState([]);
  let [isHidden, toggleIsHidden] = useState(false);
  // debugger

  useEffect(() => { 
    const fetchTeasersData = async () => {
      const data = await fetchTeaserListData();
      setCrimeData(data);
    } 
    fetchTeasersData()
  }, []);
  let teaserList = crimeData.map((data) => {
    return (
      <div data-cy={"data-" + data.id} key={data.id}>
        <button onClick={() => toggleIsHidden(true)}>
          <h3 data-cy="teaser">{data.description}</h3>{" "}
        </button>
        {isHidden && <p data-cy="content">{data.content}</p>}
      </div>
    );
  });

  return (
    <>
      <h1>Crime Reports</h1>

      {teaserList}
    </>
  );
};

export default TeaserList;
