import React from 'react'
import { satisfiedCustomer } from '../assets'

const AcheivementCard = ({ image, title, value }) => {
    return (
        <React.Fragment>
            <div className='acheivementCard md:h-[12rem] sm:h-[14rem] h-[8rem] md:w-[30rem] sm:w-[30rem] w-[21rem] hover:-translate-y-1 hover:scale-105 duration-300 sm:text-start'>
                <img src={image} alt="Achievement" className='w-[30%]'/>
                <div className='w-[0.2rem] h-[90%] bg-white'></div>
                <div className='flex items-center justify-center flex-col h-[100%] w-[40%]'>
                    <p className='text-center'>{title}</p>
                    <p className='text-4xl font-bold'>{value}</p>
                </div>
            </div>  
        </React.Fragment>

    )
}

export default AcheivementCard