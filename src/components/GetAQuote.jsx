import React from 'react';
import { Link } from 'react-router-dom';

const GetAQuote = () => {
    return (
        <div className="getaquote">
            <div className="hero_content">
                <h2 className="my-2 sm:text-[2.7rem] text-[2rem] w-[100%] font-semibold text-center sm:leading-[4rem] leading-[3rem]">Discover The Core Of <span className='text-gradient'>Digital Excellence </span>with Primech</h2>
                <div className="my-2 sm:text-[1rem] text-[0.7rem] sm:w-[45%] w-[80%] text-center"><p>Ranging from customized UI/UX design solutions, website design & development services, digital marketing, graphic designing, and e-commerce web development, we cover every digital need across the USA.</p></div>
                <Link to="/services_page">
                    <button className="my-4 bg-transparent hover:bg-white text-white hover:text-secondary py-2 px-12 border border-white hover:border-transparent rounded-full font-thin sm:text-[1rem] text-[0.8rem]">Discover More!</button>
                </Link>
            </div>
        </div>
    )
}

export default GetAQuote;
