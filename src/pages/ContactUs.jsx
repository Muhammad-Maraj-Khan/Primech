import React from 'react'
import { useLocation } from 'react-router-dom';
import TextHero from '../components/TextHero'
import Service_Content_Text from '../components/Service_Content_Text'
import ContactForm from '../components/ContactForm'
import Service_Hero from '../components/Service_Hero'
import { contact_img } from '../assets'

const ContactUs = () => {
  const location = useLocation();
  const { plan } = location.state || {}; // Default to an empty object if no state is passed

  return (
    <React.Fragment>
      <TextHero title={"Contact Us"}/>
      <Service_Content_Text heading={"Got Question? We Are Here To Assist!"} text={"We believe that every revolution starts from a small discussion, Let’s do it! Schedule a free consultation call with us and explore the ultimate options for your digital; success."}/>
      <ContactForm selectedPlan={plan}/>
      <Service_Hero img={contact_img} heading={"READY TO TAKE OFF?"} text={"Choose Primech for web development and design services that elevate your brand's visual impact. Whether you need PHP web development services, laravel web development services, java web development services, or comprehensive custom web development solutions, from design to maintenance, we have your back."} smWidthImg={'40%'}/>
    </React.Fragment>
  )
}

export default ContactUs;
