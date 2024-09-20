import styles from "../style";
import { logo_white } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="about" className={`${styles.flexCenter} pb-5 flex-col main__gradient sm:px-7 px-4 sm:h-[20rem] h-[25rem] mt-4`} >
    <div className="flex sm:flex-row flex-col sm:mb-[0rem] mb-[1rem] flex-wrap justify-between items-center w-[100%] h-[14rem] sm:h-[10rem]  text-white">
      <img src={logo_white} className="h-[8rem] md:h-[10rem]" />
      <a href="tel:+12133758381" className="hover:underline md:text-3xl text-2xl">+1(213) 375-8381</a>
      <a href="mailto:contact@primechagency.com" className="hover:underline md:text-3xl text-2xl">contact@primechagency.com</a>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#ffffff]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Primech. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;