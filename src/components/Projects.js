import React from "react";
import netflix from '../Assets/netflix-clone.mp4'
import todos from '../Assets/todos.mp4'
import googlekeep from '../Assets/google-keep.mp4'
import Chatgpt from '../Assets/chatgpt.mp4'
import live from '../Assets/Live-Projects.mp4'

const Projects = () => {
  return (
    <>
      <section name="projects" className="w-full h-full max-w-4xl mx-auto flex flex-col items-center p-10 my-10">
      {/* HEADING */}
        <div className="grid place-items-start w-full my-4">
          <h1 className="text-left w-fit p-2 text-xl lg:text-2xl border-4 border-t-0 rounded-xl border-sky-400 font-medium">
            PROJECTS
          </h1>
        </div>

      {/* CARDS */}
      <div className="my-10 space-y-7">
        <div className=" relative w-full group h-fit shadow-inner shadow-sky-300 p-2 hover:bg-black/70 duration-300 rounded-md">
        <p className="md:hidden">Netflix Clone(React & Tailwind)</p>
            <video className="w-full h-full object-cover  mix-blend-overlay " autoPlay loop muted  src={netflix}></video>
            <div className="hidden w-full h-full absolute top-0 group-hover:flex flex-col items-center justify-center space-y-4">
                <h1 className="text-white text-xl">Netflix Landing Page</h1>
                <h2 className="text-white text-xl">React & Tailwind CSS</h2>
                <a href="https://netflix-landing-page-chi.vercel.app/" target="_netflix"><button className="bg-sky-400 hover:bg-sky-600 duration-300 text-white w-24 h-10 rounded-md">Demo</button></a>
            </div>
        </div>
        <div className=" relative w-full group h-fit shadow-inner shadow-sky-300 p-2 hover:bg-black/70 duration-300 rounded-md">
        <p className="md:hidden">Todos List (React & Tailwind)</p>
            <video className="w-full h-full object-cover  mix-blend-overlay " autoPlay loop muted  src={todos}></video>
            <div className="hidden w-full h-full absolute top-0 group-hover:flex flex-col items-center justify-center space-y-4">
                <h1 className="text-white text-xl">Todos app</h1>
                <h2 className="text-white text-xl">React & Tailwind CSS</h2>
                <a href="https://todo-app-gamma-blush.vercel.app/" 
                target="_netflix"><button className="bg-sky-400 hover:bg-sky-600 duration-300 text-white w-24 h-10 rounded-md">Demo</button></a>
            </div>
        </div>
        <div className=" relative w-full group h-fit shadow-inner shadow-sky-300 p-2 hover:bg-black/70 duration-300 rounded-md">
        <p className="md:hidden">Google Keep (React & Tailwind)</p>
            <video className="w-full h-full object-cover  mix-blend-overlay " autoPlay loop muted  src={googlekeep}></video>
            <div className="hidden w-full h-full absolute top-0 group-hover:flex flex-col items-center justify-center space-y-4">
                <h1 className="text-white text-xl">Google Keep Clone</h1>
                <h1 className="text-white text-xl">React & Tailwind</h1>
                <a href="https://google-keep-chi.vercel.app/" target="_netflix"><button className="bg-sky-400 hover:bg-sky-600 duration-300 text-white w-24 h-10 rounded-md">Demo</button></a>
            </div>
        </div>
        <div className=" relative w-full group h-fit shadow-inner shadow-sky-300 p-2 hover:bg-black/70 duration-300 rounded-md">
        <p className="md:hidden">Form Validation (React & Tailwind)</p>
            <video className="w-full h-full object-cover  mix-blend-overlay " autoPlay loop muted  src={Chatgpt}></video>
            <div className="hidden w-full h-full absolute top-0 group-hover:flex flex-col items-center justify-center space-y-4">
                <h1 className="text-white text-xl">Form ValidationS</h1>
                <h2 className="text-white text-xl">React & Tailwind</h2>
                <a href="https://chatgpt-login-page.vercel.app/" target="_netflix"><button className="bg-sky-400 hover:bg-sky-600 duration-300 text-white w-24 h-10 rounded-md">Demo</button></a>
            </div>
        </div>
        <div className=" relative w-full group h-fit shadow-inner shadow-sky-300 p-2 hover:bg-black/70 duration-300 rounded-md">
        <p className="md:hidden">Live Project (React & Tailwind)</p>
            <video className="w-full h-full object-cover  mix-blend-overlay " autoPlay loop muted  src={live}></video>
            <div className="hidden w-full h-full absolute top-0 group-hover:flex flex-col items-center justify-center space-y-4">
                <h1 className="text-white text-xl">Live Projects</h1>
                <h2 className="text-white text-xl">React & Tailwind</h2>
                <a href="https://www.lalpathlabs.com" target="_netflix"><button className="bg-sky-400 hover:bg-sky-600 duration-300 text-white w-24 h-10 rounded-md">Demo</button></a>
            </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Projects;
