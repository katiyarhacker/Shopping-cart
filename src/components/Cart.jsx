import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQty, decreaseQty } from '../redux/productSlice'

const Cart = () => {
  const cart = useSelector(state => state.product.products)
  const dispatch = useDispatch()

  return (
    <div className="p-4">

      <h2 className="text-xl font-bold mb-4">Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-3 mb-3">

            <img src={item.img} className="h-20" />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            {/* 🔥 Quantity Control */}
            <div className="flex gap-2 items-center">
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>

            <button 
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-2 mt-2"
            >
              Remove
            </button>

          </div>
        ))
      )}

    </div>
  )
}

export default Cart