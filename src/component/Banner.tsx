import React from 'react';
import bannerImage from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <section className='flex  items-center justify-between container mx-auto'>
            <div>
                <div>
                    <h1 className='text-5xl font-extrabold mb-4'>Build Your Ideal <br /> <span className="bg-linear-to-r from-[#FF5232] via-[#E12885] to-[#8031E2] bg-clip-text text-transparent">Development Stack</span></h1>
                    <p className='max-w-lg text-base mb-4'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                </div>
                <div className='flex gap-4 mt-10'>
                    <button className="bg-linear-to-r from-[#FF5232] to-[#E12885] hover:opacity-90 text-white font-medium px-6 py-2.5 rounded-lg transition-all shadow-md">
                        Explore Technologies
                    </button>
                    <button className="border border-gray-200  bg-white hover:bg-gray-100  px-6 py-2.5 rounded-xl transition-all duration-200">
                        Learn More
                    </button>
                </div>
            </div>
            <img src={bannerImage} alt="" />

        </section>
    );
};

export default Banner;