import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
  getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;