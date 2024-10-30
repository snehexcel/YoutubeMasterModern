import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";

const reducer = combineReducers({
    userInfo: userReducer,
});


export const store = configureStore(
    {
        reducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
    }
)