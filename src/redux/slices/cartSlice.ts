import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../types/ProductType";

type CartItem = {
    product: ProductType;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const item = state.items.find(
                (item) => item.product.id === product.id
            );

            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({
                    product: product,
                    quantity: 1,
                });
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.product.id !== action.payload
            );
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.product.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.product.id === action.payload
            );

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item.product.id !== action.payload
                    );
                }
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export type { CartItem, CartState };