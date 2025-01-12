import React from 'react'
import products from "../Json/Products.json"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
export const Product = () => {
    const navigate = useNavigate();
    function handlePurchase(perfume) {
        navigate(`/product/details`, { state: { perfume } })

    }
    return (
        <>
            <div>
                <p className=' mt-28 text-white font-bold text-4xl shadow-lg p-6 pb-8 flex justify-center items-center w-full'>Unleash the essence of elegance – your signature scent awaits!</p></div>
            <div className='pt-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full justify-items-center p-10 lg:p-28 md:p-20 sm:p-28 gap-8 '>
                {
                    products.map((perfume, index) => (
                        <div key={index} className='p-8 flex flex-col gap-4 justify-center items-center w-full   bg-customBg rounded-lg '>
                            <h3 className='text-zinc-800 text-2xl font-bold'>{perfume.perfumeName}</h3>
                            <img src={perfume.image} className='h-60 w-60' />
                            <p className='text-zinc-800 text-xl flex items-center'>{perfume.description}</p>
                            <p className='flex text-zinc-800 text-xl font-semibold'>Price: <FaIndianRupeeSign className='h-5  mt-1 ' />
                                {perfume.price}</p>
                            <button className='text-white bg-orange-400 p-2 w-full rounded-lg font-bold hover:bg-zinc-800 hover:text-white' onClick={() => handlePurchase(perfume)}>Purchase</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
