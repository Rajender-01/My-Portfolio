import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import JavaScript from "../Assets/javascript.png";
import ReactImg from "../Assets/react.png";
import es6 from "../Assets/es6.png";
import gitlab from "../Assets/gitlab-logo.png";
import GitHub from "../Assets/github.png";
import Tailwind from "../Assets/tailwind.png";

const skillsData = [
  {
    id: 1,
    img: html,
    text: "HTML",
  },
  {
    id: 2,
    img: css,
    text: "CSS",
  },
  {
    id: 3,
    img: JavaScript,
    text: "JavaScript",
  },
  {
    id: 4,
    img: ReactImg,
    text: "ReactImg",
  },
  {
    id: 5,
    img: GitHub,
    text: "GitHub",
  },
  {
    id: 6,
    img: Tailwind,
    text: "Tailwind",
  },
  {
    id: 7,
    img: es6,
    text: "es6",
  },
  {
    id: 8,
    img: gitlab,
    text: "gitlab",
  },
];

const Skills = () => {
  return (
    <>
      <section name="experience" className="w-full h-auto lg:h-fit flex flex-col justify-start max-w-4xl mx-auto lg:space-y-5 my-10">
        <div className="grid place-items-start w-full px-10">
          <h1 className="text-left w-fit p-2 text-xl lg:text-2xl  border-4 border-t-0 rounded-xl border-sky-400 font-medium">
            SKILLS / EXPERIENCE
          </h1>
        </div>

        <p className="p-10 text-lg lg:text-xl">
          As a Front-End Developer at Headway Vision, I contributed to the
          development of several web applications, collaborating with a team of
          designers, developers, and project managers. During my time at the
          company, I gained experience in using React Javascript, Tailwind css ,
          Git and as well as in developing and maintaining responsive designs
          and cross-browser compatible web applications.
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center px-10">
          {skillsData.map((icon) => (
            <div className="shadow-inner shadow-black/70 hover:scale-110 duration-500 flex flex-col items-center justify-between rounded-md">
              <img
                className="w-20 mx-auto mt-2"
                src={icon.img}
                alt="HTML icon"
              />
              <p className="my-4 capitalize">{icon.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
