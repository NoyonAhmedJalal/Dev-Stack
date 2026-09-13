
import bannerImage from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-4 py-8 sm:py-12 gap-8 lg:gap-0'>
            <div className='text-center lg:text-left'>
                <div>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4'>Build Your Ideal <br className='hidden sm:inline' /> <span className="bg-linear-to-r from-[#FF5232] via-[#E12885] to-[#8031E2] bg-clip-text text-transparent">Development Stack</span></h1>
                    <p className='max-w-lg text-sm sm:text-base mb-4 mx-auto lg:mx-0'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                </div>
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-10'>
                    <button className="bg-linear-to-r from-[#FF5232] to-[#E12885] hover:opacity-90 text-white font-medium px-6 py-2.5 rounded-lg transition-all shadow-md w-full sm:w-auto">
                        Explore Technologies
                    </button>
                    <button className="border border-gray-200  bg-white hover:bg-gray-100  px-6 py-2.5 rounded-xl transition-all duration-200 w-full sm:w-auto">
                        Learn More
                    </button>
                </div>
            </div>
            <img className='w-full max-w-md lg:max-w-lg object-contain' src={bannerImage} alt="" />

        </section>
    );
};

export default Banner;