import React from "react";

const Button = ({ title, isSelected, onClick }) => {
  // Determine the CSS classes based on whether the button is selected
  const buttonClass = isSelected
    ? "my-4 bg-white text-secondary py-2 px-12 border border-transparent rounded-full sm:font-thin md:text-[0.9rem] text-[0.60rem] md:w-[20rem] w-[17rem]"
    : "my-4 bg-transparent hover:bg-white text-white hover:text-secondary py-2 px-12 border border-white hover:border-transparent rounded-full sm:font-thin md:text-[0.9rem] text-[0.60rem] md:w-[20rem] w-[17rem]";

  return (
    <button className={buttonClass} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
