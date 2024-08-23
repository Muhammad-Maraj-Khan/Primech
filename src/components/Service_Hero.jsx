import React from 'react'

const Service_Hero = ({heading, text, img,smWidthImg}) => {
    return (
        <div className='flex flex-wrap sm:flex-row flex-col justify-center items-center  w-[100%] md:px-[7rem] sm:px-[2rem] px-[1rem] sm:pt-[2rem] pt-[1rem]'>
            <div className='text-white sm:w-[50%] w-[100%] sm:text-left text-center'>
                <h1 className='md:text-4xl sm:text-4xl text-3xl font-bold'>{heading}</h1>
                <p className='sm:text-sm text-base mt-5'>{text}</p>
            </div>
            <img src={img} className={`sm:w-[${smWidthImg}] w-[100%] sm:mt-[0] mt-8`}/>
        </div>
    )
}

export default Service_Hero