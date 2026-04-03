import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/productSlice'

const Home = () => {
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-3 gap-4">

      {products.length === 0 ? (
        <p>No products</p>
      ) : ( products.map((p) => (
        <div key={p.id} className="border p-3">

          <img src={p.img} alt={p.name} className="h-40 w-full object-cover" />

          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
          <p>{p.desc}</p>

          <button 
            className="bg-black text-white px-3 py-1 mt-2"
            onClick={() => dispatch(addToCart(p))} // 🔥 MAIN LINE
          >
            Add to Cart
          </button>

        </div>
      )))}

    </div>
  )
}
export default Home