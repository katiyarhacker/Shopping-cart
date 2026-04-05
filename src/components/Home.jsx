import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showBar, setShowBar] = useState(false)

const handleAdd = (p) => {
  dispatch(addToCart(p))
  setShowBar(true)

  setTimeout(() => setShowBar(false), 3000)
}
  

  return (
    
    <div className="grid grid-cols-3 gap-4 px-7 max-w-7xl mx-auto">

      {products.length === 0 ? (
        <p>No products</p>
      ) : ( products.map((p) => (
        <div key={p.id} className="border p-3">

          <img src={p.img} alt={p.name} className="h-40 w-full object-cover" />

          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
          <p>{p.desc}</p>

          <button 
            className="bg-black text-white px-3 py-1 mt-2 cursor-pointer bg-black text-white px-3 py-1 hover:bg-gray-700"
            onClick={() => handleAdd(p)} // 🔥 MAIN LINE
          >
            Add to Cart
          </button>
          <button   className="bg-black text-white px-3 py-1 m-2 cursor-pointer bg-black text-white px-3 py-1 hover:bg-gray-700">Buy</button>

        </div>
      )))}


      {showBar && (
  <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded flex gap-3 items-center">
    
    <span>Item added to cart</span>

    <button 
      className="bg-white text-black px-2 py-1 rounded"
      onClick={() => navigate('/cart')}
    >
      View Cart
    </button>

  </div>
)}

    </div>
  
  )
}
export default Home