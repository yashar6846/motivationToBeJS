import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "./features/cocktilSlice";

export default configureStore({
    reducer: {
        app : CocktailReducer
    }
});