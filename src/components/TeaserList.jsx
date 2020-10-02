// import React, { useState, useEffect } from "react";
// import reports from "../modules/reports";

// const TeaserList = () => {
//   let [crimeData, setCrimeData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await reports.fetchTeaserList();
//       setCrimeData(data);
//     };
//     fetchData();
//   }, []);

//   const Toggle = () => {
//     let [toggle, setToggle] = useState(!Toggle);
//     useEffect(() => {
//       setToggle();
//     })
//   }

//   let teaserList = crimeData.map((data) => {
//     return (
//       <div data-id={data.id} data-cy={"data-" + data.id} key={data.id}>
       
//        <button> <h3 data-cy="teaser">{data.description}</h3>     </button>
       
//       <p data-cy="content" >{data.content}</p>
//       </div>
//     );
//   });

//   return (
//     <>
//       <h1>Crime Reports</h1>
//       {teaserList}
//     </>
//   );
// };

// export default TeaserList;

import React, { Component } from "react";
import { fetchTeaserListData } from "../modules/reports";

class ReportList extends Component {
  state = {
    data: [],
    isHidden: false,
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
         <button onClick={() => this.setState({isHidden: true})}> <h3 data-cy="teaser">{data.description}</h3>     </button>
       {this.state.isHidden && (
          <p data-cy="content" >{data.content}</p>
       )}
      
          </div>
        );
      });
      return ( 
        <div>
             <h1>Crime Reports</h1>
       {teaserList}
       </div>
     );
   }
  }
}
  
   export default ReportList