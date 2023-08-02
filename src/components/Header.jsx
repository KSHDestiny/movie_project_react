import { Navbar, TextInput } from "flowbite-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {
  // const [movieName, setMovieName] = useState("");
  const movieName = useRef("");
  const dispatch = useDispatch();

  const searchMovie = async () => {
    // console.log(movieName);
    const search = movieName.current.value;
    if (search !== "") {
      const res = await api.get(
        `/search/movie?query=${search}&api_key=${api_key}`
      );

      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };
  return (
    <div>
      <Navbar fluid rounded>
        <Link to={"/"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Code-Lab Movie Channel
          </span>
        </Link>
        <div className="flex md:order-2">
          <form action="">
            <div className="flex justify-center align-middle">
              <TextInput
                placeholder="Search Movie..."
                // value={movieName}
                // onChange={(e) => setMovieName(e.target.value)}
                ref={movieName}
              />
              <button
                type="button"
                className="bg-gray-900 text-white p-2 rounded-lg ms-2"
                onClick={() => searchMovie()}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
