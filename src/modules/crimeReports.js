import axios from "axios";

const fetchTeaserListData = async () => {
  let crimeData = await axios.get("/reports");
  return crimeData.data.crime_reports;
};

const fetchContentListData = async () => {
  let headers = sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json",
  };
  try {
    const response = await axios.get(
      "/reports",
      {
        headers: headers,
      }
    );
    return response.data.crime_reports;
  } catch (error) {
    console.log(error.response);
  }
};

export { fetchTeaserListData, fetchContentListData };
