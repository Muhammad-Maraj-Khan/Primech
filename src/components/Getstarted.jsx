import React from 'react'
import { Link } from 'react-router-dom'

const Getstarted = () => {
  return (
    <div>
    <Link to="/services_page">  
       <button className="bg-transparent hover:bg-white text-white hover:text-secondary py-2 px-12 border border-white hover:border-transparent rounded-full font-thin sm:text-[1.2rem] text-[1rem] my-3">Get started</button>
    </Link>  
    </div>
  )
}

export default Getstarted