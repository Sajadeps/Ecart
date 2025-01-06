import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items center items-center h-screen'>
            <img width={'450px'}  height={'200px'} src="https://th.bing.com/th/id/OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa?rs=1&pid=ImgDetMain" alt="" />
            <div>
                <h3 className='font-bold'>PID : id</h3>
                <h1 className='text-5xl font-bold'>product Name</h1>
                <h4 className='font-bold text-red-600 text-2xl'></h4>
                <h4>Brand: brand</h4>
                <h4>Category: category</h4>
                <p>
                    <span>Description</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque pariatur, dolor culpa cumque vero quibusdam natus nihil illum hic facere deserunt veniam optio obcaecati reprehenderit voluptatibus impedit sequi delectus.
                    <div className='flex justify-between mt-5'>
                        <button className='bg-blue-600 text-white'></button>
                        <button className='bg-blue-600 text-white'></button>
                    </div>
                </p>
            </div>
        
        </div>

    </div>
    </>
  )
}

export default View