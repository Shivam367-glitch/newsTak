import {createAsyncThunk } from "@reduxjs/toolkit";


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (_, thunkAPI) => {
        const loc = thunkAPI.getState().loc.loc;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${loc}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();  


        return {temp:data.current.temp_c, icon:data.current.condition.icon};
    }
); 