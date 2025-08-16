import { Link } from "react-router-dom";
import { Logo_Url } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    setQuery("");  
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4
      bg-gradient-to-br from-gray-900 via-red-700 to-gray-600
      sticky top-0 z-50 w-full">
      
 
      <div className="mb-4 md:mb-0 flex-shrink-0">
        <img
          className="w-32 sm:w-40 md:w-52 lg:w-[180px] rounded-xl"
          src={Logo_Url}
          alt="Logo"
        />
      </div>

    
      <div className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row items-center gap-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          <li className="hover:underline hover:text-white">
            <Link to="/" onClick={handleHomeClick}>Home</Link>
          </li>
          <li className="hover:underline hover:text-white">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:underline hover:text-white">
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
