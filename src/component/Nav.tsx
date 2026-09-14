
import { useState } from 'react';
import logo from '../assets/logo-text.png';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [activeMenu, setActiveMenu] = useState('Home')

    return (
        <nav className='sticky top-0 z-50 bg-white p-5 container mx-auto'>
            <div className='flex items-center justify-between gap-4'>
                <img src={logo} alt="" />

                <ul className='hidden md:flex flex-wrap gap-5 items-center justify-center'>
                    <a onClick={() => setActiveMenu('Home')} className={activeMenu === 'Home' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Home</a>
                    <a onClick={() => setActiveMenu('Technologies')} className={activeMenu === 'Technologies' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Technologies</a>
                    <a onClick={() => setActiveMenu('Project')} className={activeMenu === 'Project' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Project</a>
                    <a onClick={() => setActiveMenu('About')} className={activeMenu === 'About' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">About</a>
                    <a onClick={() => setActiveMenu('Contact')} className={activeMenu === 'Contact' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Contact</a>
                </ul>

                <div className='hidden md:flex gap-1'>
                    <button className="btn border-none rounded-3xl">Sign In</button>
                    <button className="btn btn-secondary border-none rounded-3xl">Sing Up</button>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden pt-4 border-t mt-4 flex flex-col gap-4">
                    <ul className='flex flex-col gap-3 items-start'>
                        <a onClick={() => setActiveMenu('Home')} className={activeMenu === 'Home' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Home</a>
                        <a onClick={() => setActiveMenu('Technologies')} className={activeMenu === 'Technologies' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Technologies</a>
                        <a onClick={() => setActiveMenu('Project')} className={activeMenu === 'Project' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Project</a>
                        <a onClick={() => setActiveMenu('About')} className={activeMenu === 'About' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">About</a>
                        <a onClick={() => setActiveMenu('Contact')} className={activeMenu === 'Contact' ? 'text-fuchsia-600' : 'hover:text-fuchsia-600'} href="#">Contact</a>
                    </ul>
                    <div className='flex flex-col gap-2 w-full'>
                        <button className="btn border-none rounded-3xl w-full">Sign In</button>
                        <button className="btn btn-secondary border-none rounded-3xl w-full">Sing Up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;