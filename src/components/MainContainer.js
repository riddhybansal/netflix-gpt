import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
   const movies = useSelector(store => store.movies?.nowPlayingMovies)
   console.log(movies)
    if (!movies) return;
    const trailerDetails = movies[0];
   const {id}=trailerDetails;
    return (
        <div>
            <VideoTitle trailerDetails={trailerDetails}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer
