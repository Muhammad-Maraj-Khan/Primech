import React from 'react'
import Button from './Button'
const Services_text = () => {
  return (
    <div className='flex justify-center items-center text-white flex-col sm:mt-[3rem] mt-[2rem]'>
        <p className='md:w-[50%]  w-[90%] text-center z-[1] text-[0.8rem]'>You're just one click away from turning your dream project into a reality. Discover the Power of Primech, the only agency that provides creative solutions most economically.</p>
        <div className='flex justify-evenly items-center sm:flex-row flex-col sm:w-[100%] w-[90%] z-[1] sm:mt-8 mt-0'>
            <Button title={"Logo Design"}/>
            <Button title={"Logo Design + Branding"}/>
            <Button title={"Logo Design + Branding + Website"}/>
        </div>
    </div>
  )
}

export default Services_text