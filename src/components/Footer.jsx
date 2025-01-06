import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px' }} className='mt-5 w-full bg-violet-600 text-white'>
      <div className='flex justify-between p-4'>
        <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i> E Cart</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed , docs CC BY 3.0.</p>
          <p>Currently v5.3.2</p>
        </div>
        {/* Links */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:"white"}}>Landing page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:"white"}}>Home page</Link>
          <Link to={'/history'} style={{textDecoration:'none', color:"white"}}>History page</Link>
        </div>
         {/* guides */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} href="https://react.dev/" target='_blank'>React</a>
          <a style={{textDecoration:'none', color:'white'}} href="https://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} href="https://www.npmjs.com/package/react-router-dom" target='_blank'>React Router</a>
        </div>
        {/* contact */}
            <div className='flex flex-col'>
              <h5 className='text-xl font-bold'>Contact Us</h5>
                <div className='flex'>
                    <input type="text" className='form-control me-3' placeholder='Enter your Email here'/>
                    <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
                </div>
                <div className='flex justify-between mt-3'>
                    <a style={{textDecoration:'none', color:'white'}} href="https://x.com/?lang=en-in&mx=2" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                    <a style={{textDecoration:'none', color:'white'}} href="https://github.com/" target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a style={{textDecoration:'none', color:'white'}} href="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                    <a style={{textDecoration:'none', color:'white'}} href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a style={{textDecoration:'none', color:'white'}} href="" target='_blank'><i className="fa-solid fa-phone"></i></a>                
                </div>
            </div>
        </div>
        <p className='text-center mt-5 text-white'>Copyright &copy; December 2024 , Media Player. Built with React. </p>
    </div>
 
      

  )
}

export default Footer
