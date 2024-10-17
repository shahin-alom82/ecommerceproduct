import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
      cart: [],
};

export const productSlice = createSlice({
      name: "product",
      initialState,
      reducers: {
            addCart: (state, action) => {
                  const product = state.cart.find((item) => item._id === action.payload._id)
                  if (product) {
                        toast.error("Product already exit!")
                        product.quantity += 1
                  }
                  else {
                        toast.success("Product Added Successfully!")
                        state.cart.push({ ...action.payload, quantity: 1 })
                  }
            },
            productDelete: (state, action) => {
                  state.cart = state.cart.filter((item) => item._id !== action.payload)
            },

            decrese: (state, action) => {
                  const product = state.cart.find((item) => item._id === action.payload)
                  if (product) {
                        product.quantity += 1
                  }
            },
            increse: (state, action) => {
                  const product = state.cart.find((item) => item._id === action.payload)
                  if (product) {
                        product.quantity -= 1
                  }
            },

      }
})
export const { addCart, productDelete, increse, decrese } = productSlice.actions;
export default productSlice.reducer;