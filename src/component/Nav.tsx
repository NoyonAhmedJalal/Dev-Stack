
import React from 'react';
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className='flex  items-center justify-between p-5 container mx-auto'>
                <img src={logo} alt="" />
            <ul className='flex gap-5 items-center'>
                <a className='hover:text-fuchsia-600' href="/">Home</a>
                <a className='hover:text-fuchsia-600' href="/">Technologies</a>
                 <a className='hover:text-fuchsia-600' href="/">Project</a>
                  <a className='hover:text-fuchsia-600' href="/">About</a>
                   <a className='hover:text-fuchsia-600' href="/">Contact</a>
            </ul>
            <div className='flex  gap-1'>
                <button className="btn border-none rounded-3xl">Sign In</button>
                <button className="btn btn-secondary border-none rounded-3xl">Sing Up</button>
            </div>
            
        </nav>
    );
};

export default Nav;