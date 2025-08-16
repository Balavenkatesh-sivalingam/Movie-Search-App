import { Link, useLocation } from "react-router-dom";
import { No_Image } from "../../utils/constants";

const MovieCard = ({ movData }) => {
  const location = useLocation(); 

  return (
    <div className="p-3 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-[400px] overflow-hidden border border-gray-200">
        
        <img
          className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
          src={movData.Poster !== "N/A" ? movData.Poster : No_Image}
          alt={movData.Title}
        />

        
        <div className="p-4">
          <h5
            className="font-bold text-xl mb-1 text-gray-900 truncate"
            title={movData.Title}
          >
            {movData.Title}
          </h5>

          <div className="flex items-center justify-between text-md text-gray-600 mb-2">
            <span>📅 {movData.Year}</span>
            {movData.Type && (
              <span className="capitalize">🎬 {movData.Type}</span>
            )}
          </div>

          <p className="text-md font-semibold mb-3">ImdbID: {movData.imdbID}</p>

          
          <div className="flex justify-end">
            <Link
              to={`/movie/${movData.imdbID}`}
              state={{
                from: { pathname: location.pathname, search: location.search },
              }} // ✅
            >
              <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                Read More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
