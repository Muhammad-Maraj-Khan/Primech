import React from 'react';
import { Link } from 'react-router-dom';

const ServiceContent = ({ image, title, description, buttonLabel, link }) => {
    return (
        <div className='card_2 md:h-[15rem] sm:h-[14rem] h-[22rem] md:w-[32rem] sm:w-[30rem] w-[20rem] hover:-translate-y-1 hover:scale-105 duration-300 sm:text-start text-center sm:px-[3rem] px-[1rem]'>
            <div className='flex flex-wrap sm:flex-row flex-col justify-center items-center sm:mb-3 mb-3 text-center w-[100%]'>
                <img src={image} alt="Service Icon" className='md:h-[3.5rem] sm:h-[2.5rem] md:w-[3.5rem] sm:w-[2.5em] h-[3.5rem] w-[3.5rem]' />
                <h3 className='font-bold md:text-2xl sm:text-xl text-2xl md:px-4 sm:px-1'>{title}</h3>
            </div>
            <p className='sm:text-sm text-sm'>{description}</p>
            <Link to={link}>
                <button className="bg-transparent sm:self-end self-center hover:bg-[#EA13D8] text-white hover:text-white sm:py-1 py-2 sm:px-10 px-14 border border-white hover:border-transparent rounded-full font-thin sm:text-[1rem] text-[1.3rem] sm:my-3 my-4">{buttonLabel}</button>
            </Link>
        </div>
    )
}

export default ServiceContent;
