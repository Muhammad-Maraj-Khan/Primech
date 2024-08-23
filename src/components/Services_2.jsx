import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services_1 = ({ price, plan, features, deliveryDetails, orderButton }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/contactus', { state: { plan: plan } });
  };

  return (
    <div className='card md:h-[35rem] h-[38rem] sm:w-[22rem] w-[20rem] hover:-translate-y-1 hover:scale-105 duration-300'>
        <h1 className='text-gradient-2 text-6xl font-bold'>{price}</h1>
        <h2 className='text-3xl font-bold'>{plan}</h2>
        <div className="features-container">
          <h3 className='text-xl mt-[1rem] font-bold'>Features</h3>
          <div className='scroll-container-2'>
            {features.map((feature, index) => (
                <p key={index} className='font-thin'>&#x2022; {feature}</p>
            ))}
          </div>
        </div>
        <div className="details-container">
          <h3 className='text-xl mt-[1rem] font-bold'>What will you get?</h3>
          <div className='scroll-container-2'>
            {deliveryDetails.map((detail, index) => (
                <p key={index} className='font-thin'>&#x2022; {detail}</p>
            ))}
          </div>
        </div>
        <button onClick={handleOrderClick} className={`my-4 ${orderButton.bgColor} hover:bg-white text-white hover:text-[#078be5] py-1 px-16 hover:border-transparent rounded font-thin sm:text-[1rem] text-[0.8rem] w-[100%]`}>
            {orderButton.text}
        </button>
    </div>
  );
}

export default Services_1;
