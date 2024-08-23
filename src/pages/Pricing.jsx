import React from 'react'
import TextHero from '../components/TextHero'
import USPs from '../components/USPs'
import SubHeading from '../components/SubHeading'
import Services_text from '../components/Services_text'
import Services_1 from '../components/Services_1'
import Services_2 from '../components/Services_2'
import Services_text_2 from '../components/Services_text_2'
import Services_text_3 from '../components/Services_text_3'

const Pricing = () => {


  const serviceData1 = [
    {
        price: "$99",
        plan: "Standard",
        features: [
            "4 Logo Design Concepts",
            "By 3 Experienced Designers",
            "8 Free Revisions",
            "Dedicated Project Manager",
            "24 - 48 Hours Delivery"
        ],
        deliveryDetails: [
            "1 Finalized Logo",
            "100% Ownership",
            "Online .JPEG & .PNG Files",
            "Print Ready .PDF File",
            "No Vector .EPS File",
            "No Editable Vector .AI File"
        ],
        orderButton: {
            text: "Order Now",
            bgColor: "bg-[#EA13D8]"
        }
    },
    {
        price: "$199",
        plan: "Premium",
        features: [
            "8 Logo Design Concepts",
            "By 5 Experienced Designers",
            "Unlimited Revisions",
            "Dedicated Project Manager",
            "12 - 24 Hours Delivery"
        ],
        deliveryDetails: [
            "3 Finalized Logos",
            "100% Ownership",
            "Online .JPEG, .PNG, and .SVG Files",
            "Print Ready .PDF, .EPS Files",
            "Editable .AI File"
        ],
        orderButton: {
            text: "Order Now",
            bgColor: "bg-[#EA13D8]"
        }
    },
    {
        price: "$299",
        plan: "Enterprise",
        features: [
            "15 Logo Design Concepts",
            "By 7 Experienced Designers",
            "Unlimited Revisions",
            "Two Dedicated Project Managers",
            "Immediate Delivery"
        ],
        deliveryDetails: [
            "5 Finalized Logos",
            "Full Branding Kit",
            "Online .JPEG, .PNG, .SVG Files",
            "Print Ready .PDF, .EPS Files",
            "Editable .AI and .PSD Files"
        ],
        orderButton: {
            text: "Order Now",
            bgColor: "bg-[#EA13D8]"
        }
    }
];
const serviceData2 = [
    {
        price: "$99",
        plan: "Standard",
        features: [
            "4 Logo Design Concepts",
            "By 3 Experienced Designers",
            "8 Free Revisions",
            "Dedicated Project Manager",
            "24 - 48 Hours Delivery"
        ],
        deliveryDetails: [
            "1 Finalized Logo",
            "100% Ownership",
            "Online .JPEG & .PNG Files",
            "Print Ready .PDF File",
            "No Vector .EPS File",
            "No Editable Vector .AI File"
        ],
        orderButton: {
            text: "Order Now",
            bgColor: "bg-[#078BE5]"
        }
    },
    {
        price: "$199",
        plan: "Premium",
        features: [
            "8 Logo Design Concepts",
            "By 5 Experienced Designers",
            "Unlimited Revisions",
            "Dedicated Project Manager",
            "12 - 24 Hours Delivery"
        ],
        deliveryDetails: [
            "3 Finalized Logos",
            "100% Ownership",
            "Online .JPEG, .PNG, and .SVG Files",
            "Print Ready .PDF, .EPS Files",
            "Editable .AI File"
        ],
        orderButton: {
            text: "Order Now",
            bgColor: "bg-[#078BE5]"
        }
    },
    {
        price: "$299",
        plan: "Enterprise",
        features: [
            "15 Logo Design Concepts",
            "By 7 Experienced Designers",
            "Unlimited Revisions",
            "Two Dedicated Project Managers",
            "Immediate Delivery"
        ],
        deliveryDetails: [
            "5 Finalized Logos",
            "Full Branding Kit",
            "Online .JPEG, .PNG, .SVG Files",
            "Print Ready .PDF, .EPS Files",
            "Editable .AI and .PSD Files"
        ],
        orderButton: {
            text: "Order Now",
            bgColor: "bg-[#078BE5]"
        }
    }
];
  return (
    <div>
      <TextHero title={"Pricing Plans"}/>
      <SubHeading/>
      <Services_text/>
      <div className='flex flex-wrap justify-evenly items-center md:w-[100%] w-[100%] sm:flex-row flex-col sm:mb-[3rem] mb-[2rem] text-white'>
                {serviceData1.map((service, index) => (
                    <Services_1
                        key={index}
                        price={service.price}
                        plan={service.plan}
                        features={service.features}
                        deliveryDetails={service.deliveryDetails}
                        orderButton={service.orderButton}
                    />
                ))}
            </div>
            <Services_text_2 />
            <div className='flex flex-wrap justify-evenly items-center md:w-[100%] w-[100%] sm:flex-row flex-col sm:my-[3rem] my-[2rem] text-white'>
                {serviceData2.map((service, index) => (
                    <Services_2
                        key={index}
                        price={service.price}
                        plan={service.plan}
                        features={service.features}
                        deliveryDetails={service.deliveryDetails}
                        orderButton={service.orderButton}
                    />
                ))}
            </div>
    </div>
  )
}

export default Pricing