import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdG9yfGVufDB8fDB8fHww",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://images.unsplash.com/photo-1531104985437-603d6490e6d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWljcm9waG9uZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1681671796265-4e8925f49df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGVib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://images.unsplash.com/photo-1618255342875-a1d288c04939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2lnbmFnZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;