import React, { useState } from 'react';
import TextHero from '../components/TextHero';
import Service_Content_Text from '../components/Service_Content_Text';
import Button from '../components/Button';
import ImageGrid from '../components/ImageGrid';
import Service_Content_Text_2 from '../components/Service_Content_Text_2'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('logo');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <TextHero title={'Our Portfolio'} />
      <Service_Content_Text heading={'Our Exception That Speaks Perfection'} text={"Learn about our work that has changed the digital presentations of businesses"} />
      <div className='flex sm:justify-evenly justify-center items-center sm:flex-row flex-col sm:w-[100%] w-[100%] mt-10'>
        <Button title={"Logo Design"} isSelected={selectedCategory === 'logo'} onClick={() => handleCategoryClick('logo')} />
        <Button title={"Branding"} isSelected={selectedCategory === 'branding'} onClick={() => handleCategoryClick('branding')} />
        <Button title={"Website"} isSelected={selectedCategory === 'website'} onClick={() => handleCategoryClick('website')} />
        <Button title={"T-shirt Design"} isSelected={selectedCategory === 't-shirt'} onClick={() => handleCategoryClick('t-shirt')} />
      </div>
      <div className='flex justify-evenly items-center sm:flex-row flex-col sm:w-[100%] w-[100%] mb-10'>
        <Button title={"Flyers Design"} isSelected={selectedCategory === 'flyers'} onClick={() => handleCategoryClick('flyers')} />
        <Button title={"Posters Design"} isSelected={selectedCategory === 'posters'} onClick={() => handleCategoryClick('posters')} />
        <Button title={"App Design"} isSelected={selectedCategory === 'app'} onClick={() => handleCategoryClick('app')} />
        <Button title={"Book Cover"} isSelected={selectedCategory === 'book-cover'} onClick={() => handleCategoryClick('book-cover')} />
      </div>
      <ImageGrid category={selectedCategory} />
      <Service_Content_Text_2 
      title1="You Can Be One Of Them"
      text="Don’t miss the chance to gear up your success."
      buttonText="Contact Us"
      />
    </div>
  )
}

export default Portfolio;
