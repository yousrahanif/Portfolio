// import React from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import img from '../images/profile.jpg';

// const Header = () => (
//   <header className="text-center p-8 bg-white rounded-2xl shadow-lg">
//     {/* Profile Image */}
//     <div className="relative w-40 h-40 mx-auto">
//       <img
//         src={img}
//         alt="Yousra Hanif"
//         className="w-full h-full rounded-full border-4 border-gray-200 shadow-md"
//       />
//     </div>

//     <h1 className="text-4xl font-extrabold mt-6 tracking-wide">Yousra Hanif</h1>
//     <p className="mt-3 text-lg font-medium italic">Web Application Developer</p>
//     <p className="text-lg font-medium italic">Coding Instructor</p>
//     <p className="text-lg font-medium italic">Computer Science Master's Student</p>

//     {/* Social Links */}
//     <div className="flex justify-center mt-6 gap-6">
//       {/* LinkedIn */}
//       <a
//         href="https://www.linkedin.com/in/yousrahanif/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-700 text-4xl hover:scale-110 transition-transform"
//         aria-label="LinkedIn Profile"
//       >
//         <FaLinkedin />
//       </a>

//       {/* GitHub */}
//       <a
//         href="https://github.com/yousrahanif"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-700 text-4xl hover:scale-110 transition-transform"
//         aria-label="GitHub Profile"
//       >
//         <FaGithub />
//       </a>
//     </div>
//   </header>
// );

// export default Header;


import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import img from '../images/profile.jpg';

const Header = () => (
  <header className="text-center p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-lg">
    {/* Profile Image */}
    <div className="relative w-40 h-40 mx-auto">
      <img
        src={img}
        alt="Yousra Hanif"
        className="w-full h-full rounded-full border-4 border-gray-300 shadow-lg"
      />
    </div>

    {/* Designation */}
    <h1 className="text-4xl font-extrabold mt-6 tracking-wide  text-blue-600">Yousra Hanif</h1>
    <p className="mt-3 text-xl font-semibold">
      Web Application Developer | Full Stack Developer
    </p>
    <p className="text-md text-gray-600 mt-2 italic">
      Passionate about creating intuitive web experiences and teaching the next generation of coders.
    </p>

    {/* Social Links */}
    <div className="flex justify-center mt-6 gap-8">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yousrahanif/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-3xl hover:text-teal-500 hover:scale-110 transition-transform"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yousrahanif"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-3xl hover:text-teal-500 hover:scale-110 transition-transform"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </a>
    </div>
  </header>
);

export default Header;


