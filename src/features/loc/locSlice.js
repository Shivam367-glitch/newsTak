import { createSlice } from "@reduxjs/toolkit";

import { fetchCoordinate } from "./locThunks";





const locSlice=createSlice({
    name:'loc',
    initialState:{
         loc:null,
        status:'idle',
        error:null,
    }, 
    extraReducers: (builder) => {
            builder
                .addCase(fetchCoordinate.pending, (state) => {
                    state.status = 'loading';
                     
                })
                .addCase(fetchCoordinate.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    console.log(action.payload);
                    
                    state.loc = action.payload;
    
                })
                .addCase(fetchCoordinate.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                });
        }
}); 


export default locSlice.reducer;