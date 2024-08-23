import React from 'react'

const Subtitle = ({subtitle, text}) => {
  return (
   <React.Fragment>
    <div className='flex justify-center items-center text-white sm:mt-20 mt-14 mb-5 flex-col'>
        <p className='md:w-[100%]  w-[90%] text-center z-[1] sm:text-4xl text-2xl font-bold'>{subtitle}</p>
        <p className='md:w-[50%]  w-[90%] text-center z-[1] mt-[1rem]'>{text}</p>
      </div>
   </React.Fragment>
  )
}

export default Subtitle