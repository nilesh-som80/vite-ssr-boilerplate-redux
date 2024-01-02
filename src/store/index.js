import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Slice/AppSlice";

const store = configureStore({
    reducer:{app:AppSlice},
})

export default store;
