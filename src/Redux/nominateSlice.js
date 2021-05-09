import { createSlice } from '@reduxjs/toolkit';

export const nominateSlice = createSlice({
    name: 'nominate',
    initialState: {
        nominees: [],
        nominateEnabled: true,
    },
    reducers: {
        nominate: (state, action) => {
            state.nominees.push(action.payload)
        },
        denominate: (state, action) => {
            const index = state.nominees.indexOf(action.payload);
            console.log(action.payload)
            console.log(`Index of movie: ${index}`)
            state.nominees.splice(index, 1)
        },
        clear: (state) => {
            state.nominees.splice(0, state.nominees.length);
        },
        setNominateTrue: (state) => {
            state.nominateEnabled = true;
        },
        setNominateFalse: (state) => {
            state.nominateEnabled = false;
        }
    }
})

export const { nominate, denominate, clear, setNominateTrue, setNominateFalse } = nominateSlice.actions

export default nominateSlice.reducer