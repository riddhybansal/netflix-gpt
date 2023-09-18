import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrending'
import useUpComingMovies from '../hooks/useUpComingMovies'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpComingMovies();
  return (
    <div>
    <Header></Header>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse;
