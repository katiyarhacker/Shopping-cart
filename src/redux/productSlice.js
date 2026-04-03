import { createSlice } from '@reduxjs/toolkit'

// 🔥 Load from localStorage
const getInitialProducts = () => {
  const data = localStorage.getItem("products");
  
  if (!data || data === "undefined") {
    return [];
  }

  try {
    return JSON.parse(data);
  }
   catch (error) {
    return [];
  }
};

const initialState = {
  products: getInitialProducts()
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    // ➕ ADD PRODUCT
    addProduct: (state, action) => {
      state.products.push(action.payload);

      // 🔥 Save to localStorage
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    // ❌ DELETE PRODUCT
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (p) => p.id !== action.payload
      );

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    // ✏️ UPDATE PRODUCT
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (p) => p.id === action.payload.id
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },
    addToCart: (state, action) => {
  const item = state.products.find(i => i.id === action.payload.id)

  if (item) {
    item.quantity += 1
  } else {
    state.products.push({ ...action.payload, quantity: 1 })
  }
}, 
removeFromCart: (state, action) => {
      state.products = state.products.filter(i => i.id !== action.payload)

      localStorage.setItem("products", JSON.stringify(state.cart))
    },
    increaseQty: (state, action) => {
      const item = state.products.find(i => i.id === action.payload)

      if (item) {
        item.quantity += 1
      }

      localStorage.setItem("products", JSON.stringify(state.cart))
    },
     decreaseQty: (state, action) => {
      const item = state.products.find(i => i.id === action.payload)

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          // 👇 agar quantity 1 hai → remove item
          state.cart = state.products.filter(i => i.id !== action.payload)
        }
      }

      localStorage.setItem("products", JSON.stringify(state.cart))
    }

  }
});

export const { addProduct, deleteProduct, updateProduct, addToCart,removeFromCart,increaseQty,decreaseQty } = productSlice.actions;
export default productSlice.reducer;