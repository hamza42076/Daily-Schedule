import React from "react";
import MyHeroImg from "../assets/myHERO.jpg";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-10">
      
      {/* Left Side - Info */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-400">Muhammad Hamza</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300">
          A Passionate <span className="text-green-400">Web Developer</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
          I love building modern, responsive, and user-friendly websites using 
          <span className="text-blue-400"> React</span> and 
          <span className="text-green-400"> TailwindCSS</span>. 
          Let’s work together to bring your ideas to life!
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a 
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-700 transition-colors"
          >
            <i className="ri-linkedin-box-fill text-white text-2xl"></i>
          </a>

          <a 
            href="https://www.facebook.com/hamza.khan.860234/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
          >
            <i className="ri-facebook-fill text-white text-2xl"></i>
          </a>

          <a 
            href="https://github.com/hamza42076?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-black transition-colors"
          >
            <i className="ri-github-fill text-white text-2xl"></i>
          </a>

          <a 
            href="https://www.instagram.com/hamza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-red-900 transition-colors"
          >
            <i className="ri-instagram-line text-white text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Right Side - Picture */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={MyHeroImg}
          alt="My Profile"
          className="rounded-full w-72 h-72 object-cover shadow-2xl border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default Hero;
