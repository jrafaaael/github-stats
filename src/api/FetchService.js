// IMPORTS
import axios from "axios";

// VARIABLES
const fs = axios.create({
  baseURL: "https://api.github.com",
});

// CLASSES
class FetchService {
  constructor() {}

  async getUserAndRepos(username) {
    return await Promise.all([
      fs.get(`/users/${username}`),
      fs.get(`/users/${username}/repos`),
    ]);
  }

  async getLanguages(username, repo) {
    const res = await fs.get(`/repos/${username}/${repo}/languages`);
    const data = await res.data;
    return data;
  }
}

// EXPORTS
export default FetchService;
