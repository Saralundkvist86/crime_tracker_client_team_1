import axios from "axios";

const reports = {
  async fetchTeaserList() {
    let reportData = await axios.get("/data");
    return reportData.data.data;
  }
}

export default reports;
