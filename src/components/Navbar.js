import React, { useState } from 'react';
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import resume from '../Assets/Rajender-Kumar-resume.pdf'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[65px] flex justify-between items-center px-12 bg-black z-10 text-gray-300 text-lg'>
      <div>
        <p>My Portfolio</p>
      </div>

      {/* MENU */}
      <ul className='hidden md:flex space-x-12'>
        <li className='cursor-pointer hover:text-sky-500 duration-300 hover:scale-125'><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='cursor-pointer hover:text-sky-500 duration-300 hover:scale-125'><Link to='profession' smooth={true} duration={500}>Profession</Link></li>
        <li className='cursor-pointer hover:text-sky-500 duration-300 hover:scale-125'><Link to='experience' smooth={true} duration={500}>Experience</Link></li>
        <li className='cursor-pointer hover:text-sky-500 duration-300 hover:scale-125'><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
        <li className='cursor-pointer hover:text-sky-500 duration-300 hover:scale-125'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* HAMBURGER */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer duration-300'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-44 h-[300px] pt-16 bg-black flex flex-col justify-center items-center'}>
        <li className='py-3 text-xl border-b-[1px] w-40 text-center cursor-pointer hover:text-sky-500 duration-300 '><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='py-3 text-xl border-b-[1px] w-40 text-center cursor-pointer hover:text-sky-500 duration-300 '><Link onClick={handleClick} to='profession' smooth={true} duration={500}>Profession</Link></li>
        <li className='py-3 text-xl border-b-[1px] w-40 text-center cursor-pointer hover:text-sky-500 duration-300 '><Link onClick={handleClick} to='experience' smooth={true} duration={500}>Experience</Link></li>
        <li className='py-3 text-xl border-b-[1px] w-40 text-center cursor-pointer hover:text-sky-500 duration-300 '><Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link></li>
        <li className='py-3 text-xl border-b-[1px] w-40 text-center cursor-pointer hover:text-sky-500 duration-300 '><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* SOCIAL ICON */}
      <div className='hidden lg:flex fixed z-20 flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] p-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-500'>
            <a href="https://www.linkedin.com/in/rajender-kumar-v3/" className='flex justify-between items-center w-full text-gray-300' > Linkedin <FaLinkedin size={30} /></a>
          </li>
          
          <li className='w-[160px] p-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400'>
            <a className='flex justify-between items-center w-full text-gray-300' download={true} href={resume}>Resume <ImProfile size={30} /></a>
          </li>

          <li className='w-[160px] p-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Rajender-01'>Github <FaGithub size={30} /></a>
          </li>

          <li className='w-[160px] p-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d16a80]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:ft.rajender@gmail.com'>Email <HiOutlineMail size={30} /></a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
