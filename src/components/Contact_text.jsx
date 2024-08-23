import React from 'react'
import { Link } from 'react-router-dom'


const Contact_text = () => {
  return (
    <div className='z-[1] flex flex-wrap justify-center items-center sm:text-start text-center  text-white flex-col md:w-[100%] sm:w-[100%] w-[80%] sm:my-[4rem] my-[2rem]'>
        <h1 className='sm:text-4xl text-3xl font-semibold my-2 text-center'>Great Relationships Begin With A Smarter <span className='text-gradient'>Conversation!</span></h1>
        <p className='text-xl text-center sm:w-[50%] w-[100%]'>Every day, we strive to assist you in enhancing your online visibility,  increase reach & engagement with your target audience, and drive sales with our web and mobile app development services</p>
        <div>     
        <Link to="/contactus">  

       <button className="bg-transparent hover:bg-white text-white hover:text-secondary py-2 px-12 border border-white hover:border-transparent rounded-full font-thin sm:text-[1.2rem] text-[1rem] my-3">Contact Us</button>
       </Link>  
    </div>
    </div>
  )
}

export default Contact_text