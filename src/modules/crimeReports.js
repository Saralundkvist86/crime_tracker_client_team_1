import axios from "axios";

const fetchTeaserListData = async () => {
  let crimeData = await axios.get("/reports");
  return crimeData.data.crime_reports;
};
export { fetchTeaserListData };


