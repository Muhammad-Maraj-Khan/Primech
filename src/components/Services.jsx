import React from 'react'
import styles from "../style"
import Services_text from "./Services_text"
import Services_1 from "./Services_1"
import Services_text_2 from "./Services_text_2"
import Services_2 from "./Services_2"
import Services_text_3 from "./Services_text_3"
import ServicesFeatures from "./ServicesFeatures"
import SubHeading from './SubHeading'
import { Website } from '../assets'


const Services = () => {


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
    const servicesFeaturesData1 = [
        {
            title: "React Development",
            subtitle: "Full-stack development services with React.",
            featuresList: [
                "Interactive UIs",
                "JSX support",
                "Component-based architecture",
                "Virtual DOM",
                "One-way data flow",
            ],
            price: "$199",
            buttonLabel: "Learn More",
            imageUrl: Website
        },
        {
            title: "Angular",
            subtitle: "Robust solutions with Angular framework.",
            featuresList: [
                "Mobile & desktop",
                "MVC architecture",
                "Two-way data binding",
                "Angular CLI",
                "Dependency injection"
            ],
            price: "$249",
            buttonLabel: "Learn More",
            imageUrl: Website // Change if specific image available
        }
    ];
    const servicesFeaturesData2 = [
        {
            title: "Vue.js Development",
            subtitle: "Progressive JavaScript framework for building interfaces.",
            featuresList: [
                "Virtual DOM",
                "Event handling",
                "Reactive interfaces",
                "Composable components",
                "Easy integration"
            ],
            price: "$299",
            buttonLabel: "Learn More",
            imageUrl: Website // Change if specific image available
        },
        {
            title: "Node.js",
            subtitle: "Server-side solutions with Node.js.",
            featuresList: [
                "Non-blocking I/O",
                "Single-threaded event loop",
                "Full JavaScript",
                "npm ecosystem",
                "Scalable solutions"
            ],
            price: "$349",
            buttonLabel: "Learn More",
            imageUrl: Website // Change if specific image available
        }
    ];

    return (
        <div>
            <SubHeading />
            <Services_text />
            <div className='flex flex-wrap justify-evenly items-center md:w-[100%] w-[100%] sm:flex-row flex-col sm:my-[0rem] my-[2rem] text-white'>
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
            <Services_text_3 />
            <div className='flex flex-wrap justify-evenly items-center md:w-[100%] w-[100%] sm:flex-row flex-col sm:my-[3rem] my-[2rem] text-white'>
            {servicesFeaturesData1.map((service, index) => (
                <ServicesFeatures
                    key={index}
                    title={service.title}
                    subtitle={service.subtitle}
                    featuresList={service.featuresList}
                    price={service.price}
                    buttonLabel={service.buttonLabel}
                    imageUrl={service.imageUrl}
                />
            ))}
            </div>
            <div className='flex flex-wrap justify-evenly items-center md:w-[100%] w-[100%] sm:flex-row flex-col sm:my-[3rem] my-[2rem] text-white'>
            {servicesFeaturesData2.map((service, index) => (
                <ServicesFeatures
                    key={index}
                    title={service.title}
                    subtitle={service.subtitle}
                    featuresList={service.featuresList}
                    price={service.price}
                    buttonLabel={service.buttonLabel}
                    imageUrl={service.imageUrl}
                />
            ))}
            </div>
            
        </div>
    )
}

export default Services