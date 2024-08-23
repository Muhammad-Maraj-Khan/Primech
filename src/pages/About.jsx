import React from 'react'
import TextHero from '../components/TextHero'
import Service_Content_Text from '../components/Service_Content_Text'
import Subtitle from '../components/Subtitle'
import AcheivementCard from '../components/AcheivementCard'
import Heading_Text from '../components/Heading_Text'
import Service_Hero from '../components/Service_Hero'
import CoreValue from '../components/CoreValue'
import { satisfiedCustomer, completion, roi, awards ,about_purpose } from '../assets'

const About = () => {

  const achievements = [
    {
        image: satisfiedCustomer,
        title: "Our Satisfied Customers",
        value: "500+"
    },
    {
        image: completion,
        title: "Completion Rate",
        value: "95%"
    },
    {
        image: roi,
        title: "Increase in ROI",
        value: "80%"
    },
    {
      image: awards,
      title: "Collected Awards",
      value: "10+"
  }
];

  return (
    <React.Fragment>
      <TextHero title={"Why Primech?"}/>
      <Service_Content_Text heading={"Conquering The Digital Space For A Decade!"} text={"We are not only an agency, we are a family that is looking after a hundred businesses, giving their ideas a new life in the digital realm."}/>
      <Subtitle subtitle={"A Glimpse Of Our Achievements!"} text={"Our experience speaks about the perfection of our work"}/>
      <div className='flex flex-wrap justify-center items-center md:w-[100%] w-[100%] sm:flex-row flex-col sm:my-[3rem] my-[2rem] text-white'>
      {achievements.map((achievement, index) => (
                <AcheivementCard
                    key={index}
                    image={achievement.image}
                    title={achievement.title}
                    value={achievement.value}
                />
            ))}
      </div>
      <Heading_Text heading={"Core What Makes Us Different?"} text={"Our values help us to stay on our path of achieving new milestones every day."}/>
      <CoreValue/>
      <Service_Hero heading={"Stay Ahead of the Competition With 100% Results"} text={"Primech is here for only one reason, to create hyper-growth for your business. Our holistic approach is designed to ensure that each project is handled with exceptional care and attention to detail, guaranteeing the best possible results for your business."} img={about_purpose} smWidthImg={'40%'} />
    </React.Fragment>
  )
}

export default About