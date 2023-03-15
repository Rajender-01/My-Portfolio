import React from "react";
import video from '../Assets/coffee.mp4'
import '../styles/Header.css'
import resume from '../Assets/Rajender-Kumar-resume.pdf'

const Header = () => {
  return (
    <>
      <header name="home" className="w-full h-full bg-black/50 ">
        {/* VIDEO */}
        <video className="object-cover w-full h-screen mix-blend-overlay" src={video} autoPlay muted loop />
        {/* TEXT */}
        <div className="p-1 absolute w-72 h-auto sm:w-[37rem] lg:w-[45rem] text-white top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] space-y-2">
          <p className="text-sm sm:text-lg sm:font-medium">Hii My Name is</p>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl uppercase font-medium"> <p className="text-sky-500"> Rajender Kumar</p></h1>
          <p className="text-2xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-gray-200">I'm a Front-End Developer</p>
          <p className="text-gray-400 text-sm sm:text-base pb-7"> I have a strong passion for creating websites and web applications that are visually appealing and highly functional. </p>
          <a className=' w-25 text-gray-300  border-2 p-2 hover:bg-sky-400 hover:border-sky-400 hover:text-black duration-300' download={true} href={resume}>Download Resume</a>
        </div>

        <div className="md:custom-shape-divider-bottom-1678755289 custom-shape-divider-bottom-1678880852">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
          </svg>
        </div>
      </header>
    </>
  );
};

export default Header;
