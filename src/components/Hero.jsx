import React from "react";
import Avatar from "/src/assets/Avatar.png";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm <span className="text-purple-600">Yusuf Hafidzun</span>
            </h1>
            <h2
              className={`text-2xl md:text-3xl font-semibold mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Frontend Developer & UI Designer
            </h2>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I create beautiful, responsive, and user-friendly websites with
              modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className={`px-6 py-3 rounded-full font-medium text-white ${
                  darkMode
                    ? "bg-gradient-to-l from-purple-500 to-blue-500"
                    : "bg-gradient-to-l from-purple-500 to-blue-500"
                }
                }`}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-full font-medium ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center ml-40">
            <div className="relative">
              {/* <div
                className={`absolute -inset-2 rounded-3xl ${
                  darkMode ? "bg-purple-900" : "bg-purple-100"
                } blur-lg opacity-50`}
              ></div> */}
              <div className="relative rounded-2xl">
                <img
                  src={Avatar}
                  alt="Professional headshot of John Doe, a web developer with a friendly smile, wearing glasses and a casual outfit"
                  className="w-full h-auto max-w-md "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
