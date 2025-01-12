import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";

export const Details = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { perfume } = location.state || {}; // Retrieve passed data

    if (!perfume) {
        return (
            <div className="text-center text-white mt-20">
                <p>Product not found.</p>
                <button
                    className="bg-orange-400 text-white px-4 py-2 rounded mt-4"
                    onClick={() => navigate('/product')}
                >
                    Go Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className='p-8 mt-20 mb-20 flex  justify-center items-center'>
            <div className="text-white  mt-20  w-full lg:w-3/4 md:w-3/4 sm:3/4 p-10 bg-customBg flex flex-col gap-6 rounded-2xl">
                <h1 className="text-3xl font-bold text-zinc-800 flex justify-center items-center">{perfume.perfumeName}</h1>
                <img src={perfume.image} alt={perfume.perfumeName} className="w-80 h-80 mt-6 mx-auto" />
                <p className="text-4xl mt-4 flex justify-center items-center text-zinc-800">{perfume.description}</p>
                <p className="text-2xl font-semibold mt-2 text-zinc-800">
                    Price: <FaIndianRupeeSign className="inline-block text-zinc-800" /> {perfume.price}
                </p>
                <p className="text-2xl mt-2 font-semibold text-zinc-800">Rating: {perfume.rating} ★</p>
                <p className="text-2xl mt-2 font-semibold text-zinc-800">Manufacturer: {perfume.manufacturer}</p>
                <div className="mt-4">
                    <h3 className="text-2xl font-semibold text-zinc-800 ">Reviews:</h3>
                    {perfume.reviews && perfume.reviews.length > 0 ? (
                        perfume.reviews.map((review, idx) => (
                            <p key={idx} className="mt-2 text-zinc-800 text-xl">{review}</p>
                        ))
                    ) : (
                        <p className="mt-2">No reviews yet.</p>
                    )}
                </div>
                <button className="bg-orange-400 text-lg font-semibold text-white px-6 py-3 hover:bg-zinc-800 rounded-lg mt-6" onClick={() => navigate('/payment', { state: { perfume } })}>Buy Now</button>

                <button className="bg-orange-400 text-lg font-semibold text-white px-6 py-3 hover:bg-zinc-800 rounded-lg mt-6" onClick={() => navigate('/product')}>Back to Products</button>
            </div>
        </div>

    );
};
