import { combineReducers } from "@reduxjs/toolkit";


import locReducer from "../features/loc/locSlice";
import weatherReducer from "../features/weather/weatherSlice";
import newsReducer from "../features/news/newsSlice";
const rootReducer = combineReducers({
    loc: locReducer,
    weather:weatherReducer,
    news:newsReducer
});
export default rootReducer;