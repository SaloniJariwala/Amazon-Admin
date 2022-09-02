import { createSlice } from '@reduxjs/toolkit';
import { ILoggedInUserState } from '../Types/ReducerType';

const initialState: ILoggedInUserState[] = [];

const loggedInUserSlice = createSlice({
    name: 'loggedInUser',
    initialState: initialState,
    reducers: {
        addLoggedInUser(state, action) {
            state.push(action.payload);
        },
        removeLoggedInUser(state, action) {
            state = state?.filter((item) => item.user._id !== action.payload);
        }
    }
});

export const { addLoggedInUser, removeLoggedInUser } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;