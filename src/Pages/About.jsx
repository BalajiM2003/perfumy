import React from 'react';

export const About = () => {
    return (
        <div className=" text-white min-h-screen flex flex-col items-center ">
            <div className="text-center py-16 mt-20 px-4">
                <h1 className="text-5xl font-extrabold text-zinc-800 mb-6">About Us</h1>
                <p className="text-2xl font-semibold text-gray-300 leading-relaxed">
                    At <span className="text-zinc-800 font-semibold">Perfumy</span>, we believe that every fragrance tells a story. Our mission is to help you find the scent that perfectly captures yours.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 -py-2 px-0 ">
                <div className="w-full flex justify-center items-center ">
                    <img
                        src="/perfumy/assets/abc.jpg"
                        alt="Perfume bottles and flowers"
                        className=" shadow-lg opacity-80 h-3/4 rounded"
                    />
                </div>
                <div className="max-w-xl flex flex-col justify-center pb-20">
                    <h2 className="text-3xl font-semibold text-zinc-800 mb-4">Our Story</h2>
                    <p className="text-gray-300 text-xl font-semibold leading-relaxed">
                        Founded in 2021, Perfumy began as a dream to connect people to the art of fragrances.
                        From humble beginnings in a small boutique to becoming a trusted name in the world of luxury scents,
                        we’ve always been driven by passion, craftsmanship, and a love for the finer things in life.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mt-4">
                        Every bottle in our collection is carefully selected, featuring unique blends that evoke emotions,
                        create memories, and celebrate individuality. We partner with master perfumers and use the finest ingredients to ensure an unparalleled sensory experience.
                    </p>
                </div>
            </div>

            <div className="bg-zinc-800 py-12 px-6 lg:px-28 w-full">
                <h2 className="text-4xl font-bold text-center text-zinc-800 mb-6">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Elegance</h3>
                        <p className="text-gray-300">
                            We believe in timeless beauty and sophistication that stands the test of time.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Quality</h3>
                        <p className="text-gray-300">
                            Every scent we offer is crafted with meticulous attention to detail and care.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Sustainability</h3>
                        <p className="text-gray-300">
                            We are committed to protecting the environment through ethical sourcing and sustainable practices.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 px-6 lg:px-28 bg-customBg w-full">
                <h2 className="text-4xl font-bold text-center text-zinc-800 mb-10">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
                    <div>
                        <img
                            src="/perfumy/assets/dummy.png"
                            alt="Founder"
                            className="rounded w-40 h-40 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-zinc-800">ABC</h3>
                        <p className="text-zinc-800">Founder & CEO</p>
                    </div>
                    <div>
                        <img
                            src="/perfumy/assets/dummy.png"
                            alt="Creative Director"
                            className="rounded w-40 h-40 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-zinc-800">DEF</h3>
                        <p className="text-zinc-800">Creative Director</p>
                    </div>
                    <div>
                        <img
                            src="/perfumy/assets/dummy.png"
                            alt="Master Perfumer"
                            className="rounded w-40 h-40 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-zinc-800">GHI</h3>
                        <p className="text-zinc-800">Master Perfumer</p>
                    </div>
                    <div>
                        <img
                            src="/perfumy/assets/dummy.png"
                            alt="Marketing Lead"
                            className="rounded w-40 h-40 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-zinc-800">JKL</h3>
                        <p className="text-zinc-800">Marketing Lead</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white py-12 text-center text-black w-full">
                <h2 className="text-3xl font-bold mb-4">Discover Your Signature Scent</h2>
                <p className="text-lg mb-6 font-semibold">
                    Ready to find the fragrance that speaks to your soul? Browse our collection and immerse yourself in the world of exquisite perfumes.
                </p>
                <button
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                    onClick={() => window.location.href = '/perfumy/product'}
                >
                    Explore Our Collection
                </button>
            </div>
        </div>
    );
};


