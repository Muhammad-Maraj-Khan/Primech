import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({ selectedPlan }) => {
    const [plan, setPlan] = useState(selectedPlan || "Standard");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gvwfr2r', 'template_oz615m3', e.target, 'eFnbp3KEhNJ7K1mvp')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setModalMessage('Email sent successfully!');
                setShowModal(true);
            }, (error) => {
                console.log('Failed to send email:', error);
                setModalMessage('Failed to send email: ' + error.text);
                setShowModal(true);
            });
    };

    const closeModal = () => {
        setShowModal(false);
    };
    
    
    return (

        <div className="z-[1] flex items-center justify-center p-5 md:p-10 w-full rounded-xl sm:mt-[2rem]">
            <div className="mx-auto w-full md:max-w-[70%] max-w-[100%]">
                <h1 className='text-white text-2xl font-bold'>Send us a message</h1>
                <form onSubmit={sendEmail}>
    <div className='flex flex-col md:flex-row items-start justify-between gap-4'>
        <div className='w-full md:w-[40%]'>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#ffffff]">
                    Full Name
                </label>
                <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-md bg-[#c5c5c5] py-3 sm:px-6 px-3 text-base font-medium text-[#000000] outline-none focus:border-[#ffffff] focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="number" className="mb-3 block text-base font-medium text-[#ffffff]">
                    Mobile Number
                </label>
                <input
                    type="number"
                    name="user_number"
                    id="number"
                    required
                    placeholder="+000000000"
                    className="w-full rounded-md bg-[#c5c5c5] py-3 sm:px-6 px-3 text-base font-medium text-[#000000] outline-none focus:border-[#ffffff] focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#ffffff]">
                    Email Address
                </label>
                <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    placeholder="example@domain.com"
                    className="w-full rounded-md bg-[#c5c5c5] py-3 sm:px-6 px-3 text-base font-medium text-[#000000] outline-none focus:border-[#ffffff] focus:shadow-md"
                />
            </div>
        </div>
        <div className="mb-5 sm:w-[50%] w-[100%]">
            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#ffffff]">
                Message
            </label>
            <textarea
                rows="4"
                name="user_message"
                id="message"
                required
                placeholder="Type your message"
                className="w-full resize-none rounded-md bg-[#c5c5c5] pt-3 pb-[9.5rem] sm:px-6 px-3 text-base font-medium text-[#000000] outline-none focus:border-[#ffffff] focus:shadow-md"
            ></textarea>
        </div>
    </div>

                    <div className="mb-5">
                        <label htmlFor="plan" className="block mb-3 text-base font-medium text-[#ffffff]">
                            Choose Plan
                        </label>
                        <select
                            name="plan"
                            id="plan"
                            className="w-full rounded-md bg-[#c5c5c5] py-3 px-3 text-base font-medium text-[#000000] outline-none focus:border-[#ffffff] focus:shadow-md"
                            value={plan}
                            onChange={(e) => setPlan(e.target.value)}
                        >
                            <option value="Standard">Standard ($99)</option>
                            <option value="Premium">Premium ($199)</option>
                            <option value="Enterprise">Enterprise ($299)</option>
                        </select>
                    </div>
                    <div>
                    <button
                        type="submit"
                        className="w-[100%] rounded-md bg-[#EA13D8] py-3 px-8 text-base font-semibold text-white outline-none hover:-translate-y-1 hover:scale-105 duration-300"
                    >
                        Submit
                    </button>
                    </div>
                </form>
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-5 rounded-lg">
                            <p>{modalMessage}</p>
                            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactForm;