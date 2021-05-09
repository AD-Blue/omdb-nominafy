import { configureStore } from '@reduxjs/toolkit';
import nominateReducer from './nominateSlice';

export default configureStore({
    reducer: {
        nominate: nominateReducer,
    },
})