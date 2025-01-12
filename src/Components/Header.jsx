import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { useNavigate } from 'react-router-dom'
export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between   text-xl  z-50 fixed top-0 left-0 w-full  '>
            <Disclosure as="nav" className="fixed top-0 left-0 w-full pt-3 pb-3 shadow-lg  text-white bg-zinc-800">
                {({ open }) => (
                    <div className=''>
                        <div className="relative flex    items-center justify-between">
                            <DisclosureButton className=" lg:hidden md:hidden  sm:hidden group relative  items-center justify-center pl-4 rounded-md p-0">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-8 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-[open]:block" />
                            </DisclosureButton>

                            <div className='pl-16 mr-20 font-bold text-3xl '>
                                Perfumy
                            </div>
                            <div className=' gap-10 font-semibold hidden pr-10 lg:pr-40 md:pr-24 sm:pr-24 sm:placeholder-amber-200 lg:flex md:flex sm:flex '>
                                <button className="hover:text-orange-400  " onClick={() => navigate("/")}>Home</button>
                                <button className="hover:text-orange-400  " onClick={() => navigate('/product')}>Product</button>
                                <button className="hover:text-orange-400 " onClick={() => navigate('/contact')}>Contact</button>
                                <button className="hover:text-orange-400 " onClick={() => navigate('/about')}>About</button>
                            </div>
                        </div>

                        <DisclosurePanel className="lg:hidden md:hidden sm:hidden">
                            <div className='flex flex-col space-y-3 bg-zinc-800'>
                                <button className="hover:text-orange-400 " onClick={() => navigate("/")}>Home</button>
                                <button className="hover:text-orange-400  " onClick={() => navigate('/product')}>Product</button>
                                <button className="hover:text-orange-400  " onClick={() => navigate('/contact')}>Contact</button>
                                <button className="hover:text-orange-400 pb-6 " onClick={() => navigate('/about')}>About</button>
                            </div>
                        </DisclosurePanel>
                    </div>
                )}
            </Disclosure>
        </div>
    )
}
