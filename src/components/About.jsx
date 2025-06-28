import React from "react";
import { FaCode, FaLaptopCode, FaLightbulb, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-6 rounded-xl border-2 border-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

       
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            ABOUT ME
          </h1>
        </div>

        
        <div className="text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left">
          <p>
            Hi! I'm <strong>Palak Sharma</strong>, a passionate and detail-oriented frontend
            developer with a love for turning ideas into visually appealing and
            user-friendly websites. With a strong foundation in <strong>HTML</strong>, <strong>CSS</strong>,
            <strong> JavaScript</strong>, and <strong>React</strong>, I enjoy building responsive and interactive web
            experiences.
          </p>
          <br />
          <p>
            I’m constantly exploring new technologies and design trends to improve my
            skills and deliver better solutions. Whether it's crafting a sleek portfolio
            or a dynamic web app, I bring <strong>creativity</strong>, <strong>curiosity</strong>, and
            <strong> commitment</strong> to every project I work on.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: <FaCode />, label: "Clean Code" },
            { icon: <FaReact />, label: "React Enthusiast" },
            { icon: <FaLightbulb />, label: "Creative Thinker" },
            { icon: <FaLaptopCode />, label: "Responsive Design" },
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-pink-600 font-medium shadow"
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default About;
