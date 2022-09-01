import { createSlice } from '@reduxjs/toolkit';
import { ILoggedInUserState } from '../Types/ReducerType';

const initialState: ILoggedInUserState[] = [];

const loggedInUserSlice = createSlice({
    name: 'loggeInUser',
    initialState: initialState,
    reducers: {
        addLoggedInUser(state, action) {
            state = [...state, action.payload];
            console.log(state);
        },
        removeLoogedInUser(state, action) {
            state = state?.filter((item) => item.user._id !== action.payload);
        }
    }
});

export const { addLoggedInUser, removeLoogedInUser } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;