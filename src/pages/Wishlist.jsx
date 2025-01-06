import React from 'react'
import Header from '../components/Header'


const Wishlist = () => {
  return (
    <>
    <Header/>
    <div className='px-5' style={{paddingTop:"100px"}}>
        <>
            <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1 >
            <div className='grid grid-cols-4 gap-4'>
                <div className='rounded border  p-4 shadow'> <img width={'100%'} height={'200px'} src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" />
                    <div className='text-center'>
                    <h3 className='text-xl font-bold'>Product name</h3></div>
                    <div className='flex justify-evenly mt-3'>
                        <button className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                        <button className='text-xl'><i className="fa-solid fa-cart-plus text-green-700"></i></button>
                    </div>
                    

                </div>
            </div>

        </>
  
    </div>
  
      
    </>
  )
}

export default Wishlist