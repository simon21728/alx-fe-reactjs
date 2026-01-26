import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    minRepos: "",
  });

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchUserData({ ...formData, page: 1 });
      setUsers(data.items);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    const data = await fetchUserData({ ...formData, page: nextPage });
    setUsers((prev) => [...prev, ...data.items]);
    setPage(nextPage);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="grid gap-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          name="username"
          placeholder="GitHub username"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location (e.g. Ethiopia)"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="minRepos"
          type="number"
          placeholder="Minimum repositories"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
          Search
        </button>
      </form>

      {/* Status */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 bg-gray-100 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;