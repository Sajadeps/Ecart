import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import { addToWislist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
    
    const dispatch = useDispatch()
    const userCart= useSelector((state)=>state.cartReducer)
    const userWishlist = useSelector((state)=>state.wishlistReducer)
    const [product,setProduct] = useState({})

    const {id} = useParams()
    //console.log(id);

   
    useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
        const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
        console.log(allProducts.find(item=>item.id==id));
        setProduct(allProducts.find(item=>item.id==id))
    }
    
   },[])

   const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
        alert("Product already in your Wishlist!!")

    }else{
        dispatch(addToWislist(product))
    }
   }


   const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
        alert("Product Quantity is Incrementing!!!")

    }else{
        alert("Product added to cart")
    }
   }


    
   

  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2  items-center h-screen'>
            <img width={'450px'}  height={'200px'} src={product?.thumbnail} alt="" />
            <div className='justify-center'>
                <h3 className='font-bold'>PID : {product?.id}</h3>
                <h1 className='text-5xl font-bold'>{product?.title}</h1>
                <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
                <h4 className='mt-2'>Brand: {product?.brand}</h4>
                <h4 className='mt-2'>Category: {product?.category}</h4>
                <p className='mt-2'>
                    <span className='font-bold'>Description</span>: {product?.description}
                </p>
                    <div className='flex justify-between mt-5'>
                        <button onClick={handleWishlist} className='bg-blue-600 text-white p-2'>Add to wishlist</button>
                        <button onClick={handleCart} className='bg-green-600 text-white p-2'>Add to Cart</button>
                    </div>
                <h3 className='font-bold mt-4 mb-2 '>Client reviews</h3>
                {
                    product?.reviews?.length>0?
                    product?.reviews.map(item=>(
                        <div key={item?.date} className='shadow border p-2 mb-2'> 
                            <h5>
                                <span className='font-bold'>{item?.reviewerName}</span>
                                
                            </h5>

                           <Rating rating={item?.rating}/>
                        </div>
                    ))
                    :
                    <div>No reviews yet!!</div>
                }
            </div>
        
        </div>

    </div>
    </>
  )
}

export default View