import { configureStore } from "@reduxjs/toolkit"; 
import loggedInUserSlice from "./LoggedInUserSlice";

const Store = configureStore({
    reducer: {
        loggedInUser: loggedInUserSlice,
    }
})

export default Store;