import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerMovie } from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchTrailerById()
    }, [])

    const fetchTrailerById = async () => {
        const allVideos = await fetch("https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos",
            API_OPTIONS
        );
        const json = await allVideos.json();
        const trailer = json.results.filter(video => video.type === 'Trailer')
        dispatch(addTrailerMovie(trailer[0]))
    }
}

export default useMovieTrailer;