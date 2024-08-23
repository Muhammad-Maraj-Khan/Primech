import React from 'react'
import Contact_text from './Contact_text'
import { bg_effect_1 } from '../assets'
import { bg_effect_2 } from '../assets'


const Contact_home = () => {
  return (
    <div className='flex flex-wrap sm:flex-row flex-col w-[100%] justify-evenly items-center'>
      <Contact_text />
      <div className='absolute z-[0] w-[80%] md:top-[325rem] sm:top-[474rem] top-[654rem]'>
        <img src={bg_effect_1} />
      </div>
      <div className='absolute z-[0] w-[20%] md:left-[65rem] sm:left-[40rem] left-[15rem] md:top-[320rem] sm:top-[480rem] top-[643rem]'>
        <img src={bg_effect_2} />
      </div>
    </div>
  )
}

export default Contact_home