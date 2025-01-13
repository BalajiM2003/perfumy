import React from 'react'
import scent1 from '/assets/Luxury-Perfume-PNG-Free-Download.png'
import scent2 from '/assets/p1-removebg-preview.png'
import scent3 from '/assets/p2-removebg-preview.png'
export const Home = () => {
    return (
        <>
            <div className=''>
                <div className="flex items-center justify-center pt-20">
                    <input type="text" placeholder="search" className='w-1/4 p-2 mt-20 rounded shadow-gold' />
                </div>
                <div className="home">
                    <div className="product block sm:flex  lg:flex md:flex pt-16 gap-10 text-center justify-items-center lg:justify-center p-10 md:justify-center sm:justify-center">
                        <div className="group transition duration-200 rounded-lg  p-6 flex mt-4 flex-col bg-customBg opacity-90  w-72 h-80 lg:h-full md:h-full  justify-center hover:bg-transparent ">
                            <img src={scent1} className='h-60  ' />
                            <p className='pt-4 text-sm lg:text-lg group-hover:opacity-0 '>1861 Renaissance by Xerjoff perfume for unisex EDP 3.3 / 3.4 oz New in Box</p>
                        </div>
                        <div className=" group rounded-lg mt-4 p-6 bg-customBg opacity-90 w-72 flex flex-col h-80 lg:h-full md:h-full hover:bg-transparent justify-center items-center">
                            <img src={scent2} className='h-60 pt-2 w-48 ' />
                            <p className='pt-4 text-sm lg:text-lg group-hover:opacity-0'>Confidential Private Gold by Lattafa perfume for unisex EDP 3.3 / 3.4 oz. </p>
                        </div>
                        <div className="group rounded-lg  p-6 mt-4 bg-customBg opacity-90 hover:bg-transparent w-72 justify-center h-80 lg:h-full md:h-full flex flex-col items-center">
                            <img src={scent3} className=' w-48 h-60' />
                            <p className='pt-4 text-sm lg:text-lg group-hover:opacity-0'>
                                Velvet Oud by Lattafa perfume for unisex EDP 3.3 / 3.4 oz New in Box</p>
                        </div>
                    </div>
                    <div className='  text-center'>
                        <p className='font-bold text-white text-2xl pb-8 pt-8'>About</p>
                        <p className='text-white pl-20 pr-20 pb-10 font-semiBold text-lg'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nesciunt tempora aliquam ipsum commodi dolores alias modi consequatur excepturi a.consectetur adipisicing elit. Ipsam, autem reiciendis quis mollitia at repellat odit cumque doloremque cupiditate officia.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates fuga esse consequatur odit dolorum error tempore maiores quo iste debitis?</p>
                    </div>
                </div>
            </div>
        </>
    )
}
