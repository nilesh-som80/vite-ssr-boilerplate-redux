import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    name:"vite-ssr-redux"
}

const AppSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        updateAppName :(state,action)=>{
            state.name = action.payload;
        }
    }
})

export const {updateAppName} =AppSlice.actions
export default AppSlice.reducer