import React from 'react'

const Heading_Text = ({ heading, text }) => {
    return (
        <React.Fragment>
            <div className='w-[100%] flex items-center justify-center'>
                <div className='flex justify-center items-center text-white flex-col sm:mt-[5rem] mt-[3rem]'>
                    <p className='md:w-[90%]  w-[90%] text-center z-[1] sm:text-5xl text-4xl font-bold'>{heading}</p>
                    <div className='bg-white w-[60%] h-[0.2rem] mt-4'></div>
                    <p className='md:w-[50%]  w-[90%] text-center z-[1] mt-[1rem]'>{text}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Heading_Text