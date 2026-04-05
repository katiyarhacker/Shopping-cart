import { createSlice } from '@reduxjs/toolkit'

const getCart = () => {
  const data = localStorage.getItem("cart")
  return data ? JSON.parse(data) : []
}

const initialState = {
  cart: getCart()
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // ➕ ADD TO CART
    addToCart: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id)

      if (item) {
        item.quantity += 1
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }

      localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    // ❌ REMOVE
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(i => i.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    // 🔼 INCREASE
    increaseQty: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload)

      if (item) {
        item.quantity += 1
      }
      console.log(state.cart)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    // 🔽 DECREASE
    decreaseQty: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload)

      if (item) {
        if (item && item.quantity > 1) {
          item.quantity -= 1
        } else {
          // 👇 quantity 1 hai to remove
           localStorage.setItem("cart", JSON.stringify(state.cart))
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart))
    }

  }
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions
export default cartSlice.reducer