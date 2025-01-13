import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { perfume } = location.state || {}; // Retrieve the selected product

    const [paymentDetails, setPaymentDetails] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handlePayment = (e) => {
        e.preventDefault();
        if (Object.values(paymentDetails).some((field) => !field)) {
            alert('Please fill in all payment details.');
            return;
        }
        alert('Payment successful! Thank you for your purchase.');
        navigate('/perfumy'); // Redirect to homepage or a success page
    };

    if (!perfume) {
        return (
            <div className="text-center text-white ">
                <p className='mt-20'>Product details are missing. Please go back and select a product.</p>
                <button
                    className="bg-orange-400 text-white px-4 py-2 rounded mt-4"
                    onClick={() => navigate('/perfumy/product')}
                >
                    Go Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className=" text-white min-h-screen flex justify-center items-center">
            <div className="bg-customBg p-8 rounded-lg shadow-lg max-w-2xl mt-40  mb-40 w-full">
                <h1 className="text-4xl font-bold text-zinc-800 text-center mb-6">Payment</h1>

                {/* Product Summary */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-zinc-800 mb-4">Product Summary</h2>
                    <div className="flex items-center">
                        <img
                            src={perfume.image}
                            alt={perfume.perfumeName}
                            className="w-32 h-32 rounded-md shadow-md mr-6"
                        />
                        <div>
                            <p className="text-xl text-zinc-800 font-semibold">{perfume.perfumeName}</p>
                            <p className="text-zinc-800">{perfume.description}</p>
                            <p className="text-zinc-800 text-lg font-bold mt-2">
                                Price: ₹{perfume.price}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Payment Form */}
                <form onSubmit={handlePayment} className="space-y-4">
                    <div>
                        <label className="block text-zinc-800 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={paymentDetails.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full p-2 rounded  text-gray-400  border-2 border-gray-600 focus:outline-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-800  mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={paymentDetails.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full p-2 rounded  text-gray-400  border-2 border-gray-600 focus:outline-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-800  mb-2">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={paymentDetails.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9123 4567"
                            className="w-full p-2 rounded  text-gray-400  border-2 border-gray-600 focus:outline-orange-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-zinc-800 mb-2">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={paymentDetails.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="w-full p-2 rounded  text-gray-400  border-2 border-gray-600 focus:outline-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={paymentDetails.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                className="w-full p-2 rounded  text-gray-400  border-2 border-gray-600 focus:outline-orange-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-400 text-white font-bold py-4 rounded mt-8 hover:bg-orange-500 transition"
                    >
                        Pay ₹{perfume.price}
                    </button>
                </form>
            </div>
        </div>
    );
};

