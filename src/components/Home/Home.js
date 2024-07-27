import React from 'react';
import background from '../../assets/background.jpg';
import developer from '../../assets/developer.jpg';
import linkedinLogo from '../../assets/linked-in-logo-svg.png';
import githubLogo from '../../assets/github-square.png';
import './Home.css';

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center mt-9"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>
      <div className="relative text-center text-white p-4 md:p-8 rounded-lg">
        <img
          src={developer}
          alt="Developer"
          className="profile-photo w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hello, I'm Vishnu Vardhan Reddy Sudireddy
        </h1>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/vishnu-vardhan-reddy-sudireddy-363839130/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </a>
          <a href="https://github.com/vr-23" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </a>
        </div>
        <p className="mt-4 text-xl sm:text-2xl md:text-2xl">UI Developer | Full-Stack Developer</p>
        <div className="mt-4 md:mt-8">
          <p className="text-sm sm:text-base md:text-lg">
            I am a passionate UI and Full-Stack Developer with extensive
            experience in creating dynamic and user-centric web applications. My
            expertise spans across modern technologies such as React, Angular,
            and Node.js, enabling me to build scalable and efficient solutions.
            I thrive in collaborative environments and am dedicated to
            delivering high-quality software that meets user needs and drives
            business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
