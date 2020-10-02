import React, { useState, useEffect } from "react";
import { fetchTeaserListData } from "../modules/reports";
import parse from 'html-react-parser'
const TeaserList = () => {
  let [crimeData, setCrimeData] = useState([]);
  let [isHidden, toggleIsHidden] = useState(false);

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
          <h3 data-cy="teaser">{parse(data.description)}</h3>{" "}
        </button>
        {isHidden && <p data-cy="content">{parse(data.content)}</p>}
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
