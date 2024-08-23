import React from 'react'

const TextHero = ({title}) => {
    return (
        <React.Fragment>
            <div className='w-[100%] sm:h-[17rem] h-[13rem] bg-[#202020] flex justify-center items-center overflow-hidden relative'>
                <h1 className='text-white font-semibold sm:text-6xl text-5xl'>{title}</h1>
                <div className="absolute z-[0] w-[100%] md:h-[10%] h-[12%] sm:top-[15rem] top-[12rem] pink__gradient__3" />
            </div>
            </React.Fragment>
    )
}

export default TextHero