import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies:null,
        upcomingMovies:null,
        trendingMovies:null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrendingMovie: (state, action) => {
            state.trendingMovies = action.payload
        },
        addTrailerMovie: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovie ,addTrailerMovie,addUpcomingMovie,addPopularMovie,addTrendingMovie } = moviesSlice.actions