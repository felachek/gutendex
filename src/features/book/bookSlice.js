import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBooksSaved: 0,
  wishlist: [],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    incrementTotalBooksSaved: (state) => {
      state.totalBooksSaved += 1;
    },
    addToWishlist: (state, action) => {
      let isValueAlreadyInStore = state.wishlist.some(
        (book) => book.title === action.payload.title
      );
      if (!isValueAlreadyInStore) {
        state.wishlist.push(action.payload);
      }
    },
  },
});

export const { incrementTotalBooksSaved, addToWishlist } = bookSlice.actions;

export default bookSlice.reducer;
