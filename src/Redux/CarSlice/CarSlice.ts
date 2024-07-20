import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICar {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: string[];
  image: string;
}
interface carState {
  cars: ICar[];
}
const initialState: carState = {
  cars: [],
};

const CarSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<ICar[]>) => {
      state.cars = action.payload;
    },
    addNewcar: (state, action: PayloadAction<ICar>) => {
      state.cars.push(action.payload);
    },

    deleteCar: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    updateCar: (state, action: PayloadAction<ICar>) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
  }},
});

export const { addCar, addNewcar, deleteCar,updateCar } = CarSlice.actions;

export default CarSlice.reducer;
