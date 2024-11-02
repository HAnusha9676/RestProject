import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice 1 for products
const productSlice = createSlice({
    name: 'products',
    initialState: {
        Fashion: [
            { name: 'kurtas', price: 2000.5 },
            { name: 'jeans', price: 1000.8 },
        ],
        ElectronicProducts: [
            { name: 'tv', price: 60000.0 },
            { name: 'refrigerators', price: 35000.0 },
        ],
        Groceries: [
            { name: 'Rice', price: 5000 },
            { name: 'Atta', price: 450 }
        ],
        Mobiles: [
            { name: 'Oneplus', price: 25000 },
            { name: 'Apple', price: 80000 },
            { name: 'Oppo', price: 15000 } // Fixed typo
        ],
    },
    reducers: {},
});

// Slice 2 for cart
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1; // Increment quantity if item exists
            } else {
                state.push({ ...action.payload, quantity: 1 }); // Add new item
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1; // Decrement quantity
                } else {
                    return state.filter(item => item.name !== action.payload.name); // Remove if quantity is zero
                }
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1; // Increment quantity
            }
        },
        removeItems: (state, action) => {
            return state.filter(item => item.name !== action.payload.name); // Remove item directly
        },
    },
});

// Configure the store
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    }
});




// Export the store and actions
export const { addToCart,decrement,increment,removeItems} = cartSlice.actions;
export default store;






