import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovie, addPopularMovie } from "../utils/movieSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;