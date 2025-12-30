import { combineReducers } from "@reduxjs/toolkit";


import locReducer from "../features/loc/locSlice";
import weatherReducer from "../features/weather/weatherSlice";
const rootReducer = combineReducers({
    loc: locReducer,
    weather:weatherReducer
});
export default rootReducer;