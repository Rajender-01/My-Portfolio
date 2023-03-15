import React from "react";
import "../styles/About.css";
import v1 from '../Assets/v1.png'


const About = () => {
  return (
    <>
      <section name="profession" className="w-full h-screen grid place-items-center my-9 lg:my-6 max-w-4xl mx-auto">
      <div className="grid place-items-start w-full p-10">
        <h1 className="text-left w-fit p-2 text-xl lg:text-2xl  border-4 border-t-0 rounded-xl border-sky-400 font-medium">PROFESSION</h1>
      </div>
        {/* IMAGE */}
        <div className="outer-circle mt-4">
          <div className="inner-circle bg-white"><img className=" sticky top-0 z-50 rounded-full hue-rotate-0" src={v1} alt="vishal" /></div>
          <span></span>
          <span></span>
          
        </div>
        {/* TEXT */}
        <div className="p-10 break-words max-w-4xl space-y-5 mt-8 text-lg lg:text-xl ">
          <p>
            I am a Front-End Developer with 6 months of experience in web
            development, specializing in the design, development and
            implementation of modern, user-friendly web interfaces. I have a
            strong passion for creating websites and web applications that are
            visually appealing and highly functional.
          </p>
          <p>
            My skill set includes HTML, CSS, JavaScript, React, and Tailwind
            CSS. In addition, I have experience working with various content
            management systems and frameworks.I am continuously expanding my
            knowledge and stay up-to-date on the latest web technologies.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
