import {createAsyncThunk } from "@reduxjs/toolkit";




export const fetchCoordinate = createAsyncThunk(
    'loc/fetchCoordinate',
    async () => {
        const response = await fetch(`https://ipinfo.io/json`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); 
        
        return data.loc;
    }
); 