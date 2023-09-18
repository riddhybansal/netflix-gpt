import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerMovie: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovie ,addTrailerMovie } = moviesSlice.actions