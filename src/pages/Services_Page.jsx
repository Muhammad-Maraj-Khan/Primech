import React from 'react';
import Service_Hero from '../components/Service_Hero';
import Service_Content from '../components/Service_Content';
import Service_Content_Text from '../components/Service_Content_Text';
import Service_Content_Text_2 from '../components/Service_Content_Text_2';
import { Hero_2, Website, logo_design, app_development, animation } from '../assets';

const Services_Page = () => {
  const services = [
    {
      image: Website,
      title: "UI/UX Design",
      description: "As a leading UI/UX design agency in the USA, we aim to provide customized UI/UX design solutions that meet user expectations.",
      buttonLabel: "Contact Us",
      link: "/contactus" // Add the link here
    },
    {
      image: logo_design,
      title: "Web Development",
      description: "As the best website design company, we offer custom website design & development services specific to each organization's unique needs.",
      buttonLabel: "Contact Us",
      link: "/contactus" // Add the link here
    },
    {
      image: app_development,
      title: "Digital Marketing",
      description: "We will help you find the right audience at the right time; our digital marketing agency is here to help you.",
      buttonLabel: "Contact Us",
      link: "/contactus" // Add the link here
    },
    {
      image: animation,
      title: "SEO",
      description: "Specializing in elevating your website’s search engine rankings, increasing traffic, and delivering measurable results, our SEO expert team is ready to enhance your online presence.",
      buttonLabel: "Contact Us",
      link: "/contactus" // Add the link here
    },
    {
      image: animation,
      title: "Graphic Design",
      description: "Our graphic design services range from branding and logos, and UI/UX designs for websites to mobile apps we create designs that tell your story.",
      buttonLabel: "Contact Us",
      link: "/contactus" // Add the link here
    }
  ];

  return (
    <div>
      <Service_Hero heading={"We Activate Businesses & Brands for the Digital Change"} text={"Transform your digital presence with our creative solutions that fit your brand's every need."} img={Hero_2} smWidthImg={'50%'} />
      <Service_Content_Text heading={"Step Into The Future Of With Our Experts"} text={"We are a one-stop station for your business plan, from website development to graphic design."} />
      <div className='flex flex-wrap justify-evenly items-center md:w-[100%] w-[100%] sm:flex-row flex-col sm:my-[3rem] my-[2rem] text-white'>
        {services.map((service, index) => (
          <Service_Content
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            buttonLabel={service.buttonLabel}
            link={service.link} // Pass the link here
          />
        ))}
      </div>
      <Service_Content_Text_2 
        title1="Turn website visitors into paying clients"
        text="In this competitive market, we are here to give your business a long run. Reach out to potential clients all over the USA and get the best leads across the country."
        title2="2x Your Growth Now"
        buttonText="Contact Us"
      />
    </div>
  );
};

export default Services_Page;
