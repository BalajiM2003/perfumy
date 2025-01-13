import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        const alert = window.confirm("We received your feedback and will process on it soon");
        if (alert) {
            navigate("/perfumy");
        }
    }
    return (
        <div className="   text-white min-h-screen flex flex-col items-center">

            <div className="text-center py-12 mt-20">
                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg text-gray-300">We’d love to hear from you! Reach out with any questions or feedback.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 px-4 w-full lg:w-1/2 md:w-1/2 ">

                <div className="bg-customBg rounded-lg p-8 shadow-lg flex flex-col gap-6 w-full text-zinc-800">
                    <h2 className="text-2xl font-semibold mb-2">Contact Details</h2>
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-zinc-800 text-2xl" />
                        <p>123 Abc st,city</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaPhone className="text-zinc-800 text-2xl" />
                        <p>+91 9876543210</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-zinc-800 text-2xl" />
                        <p>support@perfumy.com</p>
                    </div>
                </div>

                <div className="bg-customBg rounded-lg p-8 shadow-lg w-full mb-10 text-zinc-800">
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium ">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-4 py-2   rounded-lg  border-2 focus:outline-none focus:border-orange-400"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium ">
                                Your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2   rounded-lg   border-2 focus:outline-none focus:border-orange-400 "
                                required
                            />

                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium ">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Enter your message"
                                className="mt-1 block w-full px-4 py-2   rounded-lg border-2  focus:outline-none focus:border-orange-400"
                                required
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>

                        </div>
                        <button
                            type="submit"
                            className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors"

                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};


