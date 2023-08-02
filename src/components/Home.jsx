import React, { useEffect } from "react";
import Movies from "./Movies";
import { api } from "../api";
import { api_key } from "./../api/index";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./../redux/action/movies/index";

const Home = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    // console.log(res.data.results);

    dispatch(fetchMovies(res.data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Movies></Movies>
    </div>
  );
};

export default Home;
