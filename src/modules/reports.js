import axios from "axios";

const fetchTeaserListData = async () => {
  let reportData = await axios.get("/data");
  return reportData.data.data;
};
export { fetchTeaserListData };


