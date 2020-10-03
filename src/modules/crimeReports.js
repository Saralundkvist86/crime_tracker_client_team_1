import axios from "axios";

const fetchTeaserListData = async () => {
  let crimeData = await axios.get("/data");
  return crimeData.data.data;
};
export { fetchTeaserListData };


