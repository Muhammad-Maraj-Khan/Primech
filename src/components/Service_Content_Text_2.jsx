import React from 'react'
import { Link } from 'react-router-dom';

const Service_Content_Text_2 = ({ title1, text, title2, buttonText }) => {
  return (

    <div className='flex sm:flex-row flex-col text-white w-[100%] justify-evenly items-center mt-10 py-[3rem] bg-slate-900 sm:text-left text-center'>
      <div className='sm:w-[40%] w-[80%]'>
        <h2 className='sm:text-3xl text-2xl text-secondary font-bold mb-3'>{title1}</h2>
        <p className='sm:text-base text-sm'>{text}</p>
        <h2 className='sm:text-3xl text-2xl text-secondary font-bold mb-3'>{title2}</h2>
      </div>
      <Link to="/contactus">
      <button className="my-4 bg-transparent hover:bg-white text-white hover:text-secondary py-2 px-12 border border-white hover:border-transparent rounded font-thin sm:text-[1.2rem] text-[0.8rem]">{buttonText}</button>
      </Link>
    </div>
  );
}

export default Service_Content_Text_2