import { useState, useEffect } from "react";
import { No_Image } from "../../utils/constants";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=9c42f15b&plot=full`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

const handleBack = () => {
  if (location.state?.from) {
    const { pathname, search } = location.state.from;
    navigate(pathname + search); 
  } else {
    navigate("/");
  }
};

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!movie) return <p className="text-center mt-10">Movie not found</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 border border-gray-200 ">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : No_Image}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg object-cover shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-600 mb-4">{movie.Year} • {movie.Genre}</p>
          <p className="mb-4 text-lg">
            {movie.Plot.length > 500 ? movie.Plot.slice(0, 500) + "..." : movie.Plot}
          </p>

          <div className="space-y-2">
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Writer:</strong> {movie.Writer}</p>
            <p><strong>Cast:</strong> {movie.Actors}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
          </div>

          {movie.Ratings?.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold text-lg mb-2">Ratings:</h2>
              <ul className="list-disc list-inside text-gray-700">
                {movie.Ratings.map((r, index) => (
                  <li key={index}>{r.Source}: {r.Value}</li>
                ))}
              </ul>
            </div>
          )}

    
          <button
            onClick={handleBack}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            ← Back to Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
