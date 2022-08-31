import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../Types/SignUp';
import { ILoggedInUser } from '../Types/SliceType';

const initialState: ILoggedInUser = {
    user: {}
};

const loggedInUserSlice = createSlice({
    name: 'loggeInUser',
    initialState,
    reducers: {
        
    }
});