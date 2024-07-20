import { configureStore, Store } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { CarApi } from "../Services/CarApi/CarApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import CarReducer from "./CarSlice/CarSlice";

export const store:Store= configureStore({
    reducer:{
        [CarApi.reducerPath]:CarApi.reducer,
        car:CarReducer,

    },
    middleware:(getdefaultMiddleware)=>
        getdefaultMiddleware().concat(CarApi.middleware)
})
export default store
export type AppDispatch=typeof store.dispatch;
export const selectCars = (state: RootState) => state.car.cars;
// export const useAppDispatch =   ()=>useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
setupListeners(store.dispatch)  