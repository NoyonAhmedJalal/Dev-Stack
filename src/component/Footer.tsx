import React from 'react';
import footerLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <section className='container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-10 px-4 gap-8 md:gap-4'>
            <div>
                <img src={footerLogo} alt="" />
                <p className='max-w-lg mt-2'>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <ul className='flex gap-5 mt-4'>
                    <a className='hover:text-fuchsia-600' href="/">GitHub</a>
                    <a className='hover:text-fuchsia-600' href="/">Twitter</a>
                    <a className='hover:text-fuchsia-600' href="/">LinkedIn</a>
                </ul>
                <p className='mt-7'>© 2026 Dev Stack. All rights reserved.</p>
            </div>
            <div className='flex flex-wrap gap-8 sm:gap-12 md:gap-10 justify-between w-full md:w-auto'>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>PRODUCT</h1>
                    <ul>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>COMPANY</h1>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>LEGAL</h1>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;