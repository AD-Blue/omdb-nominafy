import { createSlice } from '@reduxjs/toolkit';

export const nominateSlice = createSlice({
    name: 'nominate',
    initialState: {
        nominees: [],
        nominateEnabled: true,
    },
    reducers: {
        nominate: (state, action) => {
            let newMovie = {
                Title: action.payload.Title,
                Year: action.payload.Year,
                Poster: action.payload.Poster,
                imdbID: action.payload.imdbID
            }
            state.nominees.push(newMovie)

            localStorage.setItem('nominafy-nominees', JSON.stringify(state.nominees));
        },
        denominate: (state, action) => {
            /* let newMovie = {
                Title: action.payload.Title,
                Year: action.payload.Year,
                Poster: action.payload.Poster
            }
            console.log(`Nominee list: ${state.nominees}`)

            const index = state.nominees.indexOf(newMovie);

            console.log(action.payload)
            console.log(`Index of movie: ${index}`)
            console.log(`Movie at index ${1}: ${JSON.stringify(state.nominees[1])}`)
            state.nominees.splice(index, 1) */
            state.nominees = state.nominees.filter((movie) => {
                return movie.imdbID !== action.payload.imdbID;
            })
        },
        clear: (state) => {
            state.nominees.splice(0, state.nominees.length);
        },
        setNominateTrue: (state) => {
            state.nominateEnabled = true;
        },
        setNominateFalse: (state) => {
            state.nominateEnabled = false;
        },
        getFromLocal: (state) => {
            state.nominees = JSON.parse(localStorage.getItem('nominafy-nominees'));
        }
    }
})

export const { nominate, denominate, clear, setNominateTrue, setNominateFalse, getFromLocal } = nominateSlice.actions

export default nominateSlice.reducer