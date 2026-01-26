
import axios from "axios";

const API_URL = "https://api.github.com/search/users";

export const fetchUserData = async ({ username, location, minRepos, page }) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(API_URL, {
    params: {
      q: query,
      page,
      per_page: 10,
    },
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data;
};