import React from 'react';
import img from '../images/profile.jpg'

const Header = () => (
  <header className="text-center p-5">
    <img
      src={img}
      alt="Yousra Hanif"
      className="w-32 h-32 mx-auto rounded-full"
    />
    <h1 className="text-3xl font-bold mt-4">Yousra Hanif</h1>
    <p className="mt-2 font-semibold">Web Application Developer</p>
    <p className="font-semibold">Coding Instructor</p>
    <p className="font-semibold">Computer Science Master's Student</p>
  </header>
);

export default Header;

