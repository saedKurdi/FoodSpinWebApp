import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCurrentPage } from "./features/Products/productsSelectors";
import { RootState } from "./store";

// Creating axios object for fetching products from local JSON server:
const api = axios.create({ baseURL: "http://localhost:27001" });

export const fetchProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkApi) => {
    try {
      const currentPage = getCurrentPage(thunkApi.getState() as RootState); // Get currentPage using getState
      const response = await api.get("/products");
      if (currentPage === "breakfast") return response.data.BreakfastFood;
      else if (currentPage === "dinner") return response.data.DinnerFood;
      else if (currentPage === "lunch") return response.data.LunchFood;
      return [];
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
