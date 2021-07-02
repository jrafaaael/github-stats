// IMPORTS
import axios from "axios";

// VARIABLES
const fs = axios.create({
  baseURL: "https://api.github.com",
});

// CLASSES
class FetchService {
  constructor() {}

  //TODO: Make error handling
  async getUserAndRepos(username) {
    try {
      return await Promise.all([
        fs.get(`/users/${username}`),
        fs.get(`/users/${username}/repos`),
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  async getLanguages(username, repo) {
    try {
      const res = await fs.get(`/repos/${username}/${repo}/languages`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

// EXPORTS
export default FetchService;
