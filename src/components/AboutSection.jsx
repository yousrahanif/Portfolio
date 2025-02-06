// import React from 'react';
// import resumePDF from '../files/resume.pdf'
// const AboutSection = () => (
//   <section id="about" className="p-10 bg-gray-100 flex justify-center items-center flex-col text-center">
//     <h2 className="text-3xl font-bold mb-6">About Me</h2>
//     <p className="mt-4 max-w-3xl mx-auto">
//     Web Developer with 2+ years of experience creating dynamic, responsive web apps. Proficient in JavaScript, Python, Java, and skilled with React, Tailwind CSS, Node.js, Express, MySQL, MongoDB. Expert in building scalable solutions that enhance user experience and performance.    </p>
//     <div className="mt-6 flex justify-center">
//       <a
//         href="https://drive.google.com/file/d/1AEAtG5Xg6E2fNUAbvrfhymp5YZ3zmkdt/view?usp=sharing"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="btn btn-primary mx-2"
//       >
//         View Resume
//       </a>
//       <a
//         href={resumePDF}
//         download="Yousra_Hanif_Resume.pdf"
//         className=" btn btn-active btn-primary mx-2"
//       >
//         Download Resume
//       </a>
//     </div>
//   </section>
// );


// export default AboutSection;

import React from 'react';
import { FaCode, FaChalkboardTeacher, FaPalette } from 'react-icons/fa';
import resumePDF from '../files/resume.pdf';
import Header from './Header';

const AboutSection = () => (
  <section
    id="about"
    className="p-10 bg-gray-100 flex justify-center items-center flex-col text-center"
  >
    {/* <h2 className="text-3xl font-bold mb-6">Who Am I</h2> */}
   <Header></Header>
<h2 className="text-4xl font-extrabold text-center mt-6 mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
  Who Am I
</h2>



    {/* Visual Highlights */}
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
      {/* Card 1: Problem-Solving & Programming */}
      <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
        <FaCode className="text-5xl text-blue-500 mb-4" />
        <h3 className="text-xl font-bold">Problem-Solver at Heart</h3>
        <p className="mt-2 text-sm text-gray-600">
          As a Web Developer, I love breaking down complex problems and creating efficient, scalable solutions with tools like React, Node.js, and Tailwind CSS.
        </p>
      </div>

      {/* Card 2: Teaching & Mentoring */}
      <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
        <FaChalkboardTeacher className="text-5xl text-green-500 mb-4" />
        <h3 className="text-xl font-bold">Teaching & Mentoring</h3>
        <p className="mt-2 text-sm text-gray-600">
          I find joy in teaching kids and young developers how to code, sharing my knowledge to inspire creativity and logical thinking.
        </p>
      </div>

      {/* Card 3: Creative Hobbies */}
      <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
        <FaPalette className="text-5xl text-yellow-500 mb-4" />
        <h3 className="text-xl font-bold">Beyond Programming</h3>
        <p className="mt-2 text-sm text-gray-600">
          Outside of coding, I enjoy painting, going on long drives, and finding creative inspiration in everyday life.
        </p>
      </div>
    </div>

    {/* Resume Links */}
    <div className="mt-10 flex justify-center gap-4">
      <a
        href="https://drive.google.com/file/d/1AEAtG5Xg6E2fNUAbvrfhymp5YZ3zmkdt/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View Resume
      </a>
      <a
        href={resumePDF}
        download="Yousra_Hanif_Resume.pdf"
        className="btn btn-active btn-primary"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default AboutSection;
