/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Spinner } from "flowbite-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";

const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movieDetails = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);

    dispatch(selectedMovie(res.data));
  };

  let movie = {};
  movie = useSelector((state) => state.movies.movie);

  useEffect(() => {
    if (movieId) {
      movieDetails();
    }

    return () => dispatch(removeSelectedMovie({}));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto">
        {/* <Link to={"/"}>
          <span style={{ fontSize: "1.5rem" }}>Back</span>
        </Link> */}
        <span className="my-2" onClick={() => navigate("/")}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </span>

        {JSON.stringify(movie) === {} ? (
          <h1 className="text-center">
            <Spinner aria-label="Extra large spinner example" size="xl" />
          </h1>
        ) : (
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div>
              <span className="bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-star me-2"></i>
                {movie.vote_average}
              </span>
              <span className="ms-4 bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-calendar me-2"></i>
                {movie.release_date}
              </span>
              <span className="ms-4 bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-users me-2"></i>
                {movie.vote_count}
              </span>
              <span className="ms-4 bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-clock me-2"></i>
                {movie.runtime} mins
              </span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Details;
