import React, { useState, useEffect } from "react";
import reports from "../modules/reports";

const TeaserList = () => {
  let [crimeData, setCrimeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await reports.fetchTeaserList();
      setCrimeData(data);
    };
    fetchData();
  }, []);

  let teaserList = crimeData.map((data) => {
    return (
      <div data-id={data.id} data-cy={"data-" + data.id} key={data.id}>
        <h3 data-cy="teaser">{data.description}</h3>
       
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
