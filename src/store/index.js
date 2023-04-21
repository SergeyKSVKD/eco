import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "../pages/newspage/newsSlice"

export const store = configureStore({
    reducer: {
        newsState: newsReducer
    },
    devTools: true,
})