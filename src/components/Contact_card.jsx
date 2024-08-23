import React from 'react'

const Contact_card = () => {
    return (

            <div class="z-[1] flex items-center justify-center p-10 md:w-[30%] sm:w-[40%] w-[80%] bg-black-gradient rounded-xl sm:mt-[2rem]">


                <div class="mx-auto w-full max-w-[550px]">
                <h1 className='text-white text-2xl font-bold'>Send us a message</h1>
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label
                                for="name"
                                class="mb-3 block text-base font-medium text-[#ffffff]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="email"
                                className="mb-3 block text-base font-medium text-[#ffffff]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        
                        <div class="mb-5">
                            <label
                                for="message"
                                className="mb-3 block text-base font-medium text-[#ffffff]"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className=" rounded-md bg-[#EA13D8] py-3 px-8 text-base font-semibold text-white outline-none hover:-translate-y-1 hover:scale-105 duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default Contact_card