import React from 'react';
import resumePDF from '../files/resume.pdf'
const AboutSection = () => (
  <section id="about" className="p-10 bg-gray-100 flex justify-center items-center flex-col text-center">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="mt-4 max-w-3xl mx-auto">
    Web Developer with 2+ years of experience creating dynamic, responsive web apps. Proficient in JavaScript, Python, Java, and skilled with React, Tailwind CSS, Node.js, Express, MySQL, MongoDB. Expert in building scalable solutions that enhance user experience and performance.    </p>
    <div className="mt-6 flex justify-center">
      <a
        href="https://drive.google.com/file/d/1AEAtG5Xg6E2fNUAbvrfhymp5YZ3zmkdt/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mx-2"
      >
        View Resume
      </a>
      <a
        href={resumePDF}
        download="Yousra_Hanif_Resume.pdf"
        className=" btn btn-active btn-primary mx-2"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default AboutSection;
