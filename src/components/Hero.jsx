import Getstarted from "./Getstarted";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content  text-align:center align-items:center w-[100%]">
        <h2 className="my-2 sm:text-[2.8rem] text-[1.8rem] font-bold text-center">THE PERFECT BLEND OF PERFORMANCE AND IMAGINATION</h2>
        <div className="my-2 sm:text-[2.8rem] text-[1.8rem] sm:w-[90%] w-[95%] text-center font-thin sm:leading-[4rem] leading-[3.2rem]"><h1>Primech Where Creativity Meets Strategy to Provide Best Digital Solutions All Across The USA</h1></div>
        <Getstarted />
      </div>
    </div>
  );
};

export default Hero;