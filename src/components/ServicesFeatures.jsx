import React from 'react';

const ServicesFeatures = ({ title, subtitle, featuresList, price, buttonLabel, imageUrl }) => {
    return (
        <div>
            <div className='card md:h-[35rem] h-[39xxxrem] md:w-[34rem] sm:w-[29.5rem] w-[20rem] hover:-translate-y-1 hover:scale-105 duration-300 z-[1]'>
                <h1 className='text-gradient sm:text-5xl text-3xl font-bold'>{title}</h1>
                <h1 className='sm:mt-[1rem] mt-[0.7rem]'>{subtitle}</h1>
                <div className='flex sm:flex-row flex-col items-center sm:my-[2rem] my-[1rem]'>
                    <img src={imageUrl} alt="Service Feature" className='md:h-[13rem] h-[10rem] sm:w-[13rem] w-[10rem] sm:mr-[1rem] mr-[0.7rem]' />
                    <div className='features-scroll-container sm:mt-[0rem] mt-[0.9rem]'>
                        {featuresList.map((feature, index) => (
                            <p key={index} className='font-thin'>&#x2022; {feature}</p>
                        ))}
                    </div>
                </div>
                <h1 className='text-secondary md:text-5xl sm:text-4xl text-3xl font-bold'>{price}</h1>
                <button className="sm:mt-2 mt-2 bg-[#EA13D8] hover:bg-white text-white hover:text-secondary py-1 px-16 hover:border-transparent rounded font-thin sm:text-[1rem] text-[0.8rem] w-[100%]">
                    {buttonLabel}
                </button>
            </div>
        </div>
    )
}

export default ServicesFeatures;
