import { createSlice } from "@reduxjs/toolkit";

import { fetchWeather } from "./weatherThunks";





const weatherSlice=createSlice({
    name:'weather',
    initialState:{
         temp_c:null,
         icon:null,
        status:'idle',
        error:null,
    }, 
    extraReducers: (builder) => {
            builder
                .addCase(fetchWeather.pending, (state) => {
                    state.status = 'loading';
                     
                })
                .addCase(fetchWeather.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.temp_c = action.payload.temp;
                    state.icon = action.payload.icon;

                })
                .addCase(fetchWeather.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                });
        }
}); 


export default weatherSlice.reducer;