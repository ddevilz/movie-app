import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/homeSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
  },
});
