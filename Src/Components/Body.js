import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Logo_Url1 } from "../../utils/constants";
import MovieCard from "./MovieCard";

const Body = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const typeFilter = searchParams.get("type") || ""; 
  const [query, setQuery] = useState(searchText);
  const [type, setType] = useState(typeFilter); 

  useEffect(() => {
    if (searchText) {
      fetchData(searchText, page, typeFilter);
    } else {
      setListOfMovies([]);
      setTotalResults(0);
    }
  }, [searchText, page, typeFilter]);

  const fetchData = async (query, pageNum = 1, type = "") => {
    setLoading(true);
    let url = `https://www.omdbapi.com/?apikey=9c42f15b&s=${query}&page=${pageNum}`;
    if (type) url += `&type=${type}`; 
    const data = await fetch(url);
    const json = await data.json();

    if (json.Search) {
      setListOfMovies(json.Search);
      setTotalResults(parseInt(json.totalResults, 10));
    } else {
      setListOfMovies([]);
      setTotalResults(0);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query, page: 1, type }); 
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    if (searchText) {
      setSearchParams({ q: searchText, page: 1, type: e.target.value });
    }
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 min-h-screen p-4">
      {/* Search Bar + Filter */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
      >
        <img
          className="w-24 rounded-xl"
          src={Logo_Url1}
          alt="Logo"
        />

        <div className="relative w-full sm:w-64 md:w-96 lg:w-[400px]">
          <input
            placeholder="Search"
            className="bg-white pr-12 pl-4 py-3 rounded-lg w-full outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full"
          >
            🔎
          </button>
        </div>

        
        <select
          value={type}
          onChange={handleTypeChange}
          className="bg-white px-4 py-3 rounded-lg outline-none w-full sm:w-auto"
        >
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-3">
        {loading ? (
          <p className="text-center w-full">Loading...</p>
        ) : listOfMovies.length > 0 ? (
          listOfMovies.map((movie, index) => (
            <MovieCard key={`${movie.imdbID}-${index}`} movData={movie} />
          ))
        ) : (
          searchText && <p className="text-center w-full">No result found.</p>
        )}
      </div>

      {totalResults > 10 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            onClick={() => setSearchParams({ q: searchText, page: page - 1, type })}
            disabled={page === 1}
          >
            ← Previous
          </button>
          <span className="font-semibold">
            Page {page} of {totalPages}
          </span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            onClick={() => setSearchParams({ q: searchText, page: page + 1, type })}
            disabled={page === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
