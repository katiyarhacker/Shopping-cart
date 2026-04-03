import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/productSlice'

const AddCart = () => {
  const [name,setName]=useState("");
      const [price,setPrice]=useState("");
      const [img,setImg]=useState("");
      const [desc,setDesc]=useState("");

      const dispatch=useDispatch()

      const handleSubmit=(e)=>{
        e.preventDefault()

        if(!name || !price || !img){
          alert("Fill all fields")
          return
        }
        const product={
          id:Date.now(),
          name,
          price,
          img,
          desc
        }
        console.log(product)

        dispatch(addProduct(product));
        
      }
  return (
    <div className='flex  w-[100%] h-[100%] justify-center mt-3'>
      <div className='flex w-[50%]  border h-[350px] justify-center '>
        <form onSubmit={handleSubmit}  className='flex flex-col justify-center'>
          <h1 className='text-center  font-bold '>AddProduct</h1>
          <input type="text" placeholder='enter product name'value={name} onChange={(e)=>setName(e.target.value)} className=' flex p-1 border rounded m-2' />
          <input type="number" placeholder='enter price ' value={price} onChange={(e)=>setPrice(e.target.value)} className=' flex p-1 border rounded m-2'/>
          <input type="url" placeholder='enter img url'value={img} onChange={(e)=>setImg(e.target.value)}className=' flex p-1 border rounded m-2' />
          <input type="text"placeholder='enter desc' value={desc} onChange={(e)=>setDesc(e.target.value)}className=' flex p-1 border rounded m-2'/>
          <button className='border bg-green-600 p-1 text-center'>Add product</button>
        </form>
      </div>
      
    </div>
  )
}

export default AddCart
