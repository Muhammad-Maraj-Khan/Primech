import React from 'react'

const Service_Content_Text = ({heading, text}) => {
  return (
<div className='flex justify-center items-center text-white flex-col sm:mt-[5rem] mt-[3rem]'>
    <p className='md:w-[90%]  w-[90%] text-center z-[1] sm:text-4xl text-3xl font-bold'>{heading}</p>
    <p className='md:w-[50%]  w-[90%] text-center z-[1] mt-[1rem] text-[0.8rem]'>{text}</p>
</div>
  )
}

export default Service_Content_Text