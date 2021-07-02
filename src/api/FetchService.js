// IMPORTS
import axios from "axios";

// VARIABLES
const fs = axios.create({
  baseURL: "https://api.github.com",
});

// CLASSES
class FetchService {
  constructor() {}

  async getUser(username) {
    try {
      const res = await fs.get(`/users/${username}`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getRepos(username) {
    try {
      const res = await fs.get(`/users/${username}/repos`);
      const data = await res.data;
      return data;
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