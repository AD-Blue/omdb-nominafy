import { createSlice } from '@reduxjs/toolkit';

export const nominateSlice = createSlice({
    name: 'nominate',
    initialState: {
        nominees: [],
    },
    reducers: {
        nominate: (state, action) => {
            state.nominees.push(action.payload)
        },
        denominate: (state, action) => {
            state.nominees.filter(function(e) {
                return e !== action.payload
            })
        },
        clear: (state) => {
            state.nominees.splice(0, state.nominees.length);
        }
    }
})

export const { nominate, denominate, clear } = nominateSlice.actions

export default nominateSlice.reducer