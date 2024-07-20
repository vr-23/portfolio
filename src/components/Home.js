import React from 'react';
import background from '../assets/background.jpg'; // Adjust the path as necessary
import developer from '../assets/developer.jpg'; // Import developer image
import './Home.css';

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>
      <div className="relative text-center text-white p-8 rounded-lg">
        <img
          src={developer}
          alt="Developer"
          className="profile-photo w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-bold">Hello, I'm Vishnu Vardhan Reddy Sudireddy</h1>
        <p className="mt-4 text-2xl">UI Developer | Full-Stack Developer</p>
        <div className="mt-8">
          <p className="text-lg">
            I am a passionate UI and Full-Stack Developer with extensive experience in creating dynamic and user-centric web applications. My expertise spans across modern technologies such as React, Angular, and Node.js, enabling me to build scalable and efficient solutions. I thrive in collaborative environments and am dedicated to delivering high-quality software that meets user needs and drives business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
