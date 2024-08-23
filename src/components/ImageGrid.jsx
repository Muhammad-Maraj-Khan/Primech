import React, { useState } from 'react';
import { logos, t_shirt, app, book_cover } from "../assets/category_assets" // You need to define these imports according to your asset structure

const ImageGrid = ({ category }) => {
  const imagesByCategory = {
    'logo': logos,
    'branding': logos,
    'website': logos,
    't-shirt': t_shirt,
    'flyers': logos,
    'posters': logos,
    'app': app,
    'book-cover': book_cover,
  };

  const images = imagesByCategory[category] || logos; // Default to logos if no category matched
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 w-full">
      {images.map((image, index) => (
        <div key={index} className="w-full h-100 overflow-hidden grid-main relative">
          <img
            src={image}
            alt={`Display ${index + 1}`}
            className="w-full h-full object-cover"
            onClick={() => handleClick(image, index)}
          />
        </div>
      ))}
      {selectedImage && (
        <div className="modal">
          <div className="flex items-center justify-center w-[100%]">
            <button onClick={handlePrev} className="prev-btn navigation-btn">
              <span className="sm:text-xl text-sm">&#10094;</span> {/* Unicode left arrow */}
            </button>
            <img src={selectedImage} alt="Selected" className="modal-image"/>
            <button onClick={handleNext} className="next-btn navigation-btn">
              <span className="sm:text-xl text-sm">&#10095;</span> {/* Unicode right arrow */}
            </button>
          </div>
          <button className="close-btn bg-transparent hover:bg-white text-white hover:text-secondary py-2 px-12 border border-white hover:border-transparent rounded-full sm:font-thin md:text-[0.9rem] text-[0.60rem] md:w-[10rem] w-[5rem]" onClick={() => setSelectedImage(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
