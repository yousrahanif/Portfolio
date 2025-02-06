// import React from 'react';
// import packman from '../images/packman.png'
// import space from '../images/space.png'

// import greet from '../images/greet.png'
// import fihs from '../images/fihs.png'


// const TeachingProjects = () => (
//   <section id="teaching" className="p-10 bg-white">
//     <h3 className="text-3xl font-bold text-center mb-6">Teaching Projects</h3>
//     <p className="text-center text-2xl mb-10">Here are some of the projects I’ve used to teach coding concepts:</p>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Scratch Projects */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={packman}
//             alt="Scratch Projects"
//             // className="w-full h-auto rounded-lg"
//             className="w-full h-80 object-cover" 
//           />
//         </a>
//         <h4 className="font-bold text-lg mb-4">Scratch Projects</h4>
//         <p className="mb-4">
//           Designed for kids aged 5-9, these projects focus on block coding and are engaging and
//           educational:
//         </p>
//         <ul className="list-disc list-inside mb-4">
//           <li>
//             <strong>Maze Game:</strong> A fun maze game that helps students understand basic game
//             mechanics and logical thinking.
//           </li>
//           <li>
//             <strong>Logo Maker:</strong> A creative project where students design and customize
//             their own logos, learning about shapes and colors in Scratch.
//           </li>
//         </ul>
//         <a
//           href="https://scratch.mit.edu/projects/1037539523/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           View Game
//         </a>
//       </div>

//       {/* Python Projects */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={space}
//             alt="Python Projects"
//             className="w-full h-80 object-cover"           />
//         </a>
//         <h4 className="font-bold text-lg mb-4">Python Projects</h4>
//         <p className="mb-4">
//           These projects help students learn Python through interactive and practical applications:
//         </p>
//         <ul className="list-disc list-inside mb-4">
//           <li>
//             <strong>Rock-Paper-Scissors Game:</strong> A classic game implemented in Python to
//             teach basic game logic and user input handling.
//           </li>
//           <li>
//             <strong>Space Shooter:</strong> An engaging game developed using Python's pixel pad to
//             enhance understanding of game development.
//           </li>
//           <li>
//             <strong>Turtle Race:</strong> A fun project using Python's Turtle module to teach
//             programming concepts through a visual and interactive race game.
//           </li>
//         </ul>
//         <a
//           href="https://pixelpad.io/app/fwstnfxiniv/?edit=1#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           View Game
//         </a>
//       </div>

//       {/* Java Projects */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={greet}
//             alt="Java Projects"
//             className="w-full h-80 object-cover"           />
//         </a>
//         <h4 className="font-bold text-lg mb-4">Java Projects</h4>
//         <p className="mb-4">
//           Explore these Java projects designed to teach fundamental programming concepts and
//           application development:
//         </p>
//         <ul className="list-disc list-inside mb-4">
//           <li>
//             <strong>Calculator App:</strong> A simple calculator application built in Java to
//             demonstrate basic GUI development and user interaction.
//           </li>
//           <li>
//             <strong>Customized AP Computer Science Course:</strong> Developed a tailored course to
//             enhance students' understanding of AP Computer Science topics, with practical examples
//             and exercises.
//           </li>
//         </ul>
//         <a
//           href="https://replit.com/@yousrahanif/Simple-Gui-Java#src/main/java/Main.java"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           View Code
//         </a>
//       </div>

//       {/* JavaScript, HTML, CSS Projects */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={fihs}
//             alt="JavaScript, HTML, and CSS Projects"
//             className="w-full h-80 object-cover"           />
//         </a>
//         <h4 className="font-bold text-lg mb-4">JavaScript, HTML, and CSS Projects</h4>
//         <p className="mb-4">
//           These projects focus on web development and interactive design, using JavaScript, HTML,
//           and CSS:
//         </p>
//         <ul className="list-disc list-inside mb-4">
//           <li>
//             <strong>Money Converter:</strong> A practical web application that converts currencies,
//             teaching students about DOM manipulation and JavaScript functionality.
//           </li>
//           <li>
//             <strong>Pin Generator:</strong> An interactive tool that allows users to change colors,
//             helping students learn about CSS styling and JavaScript event handling.
//           </li>
//         </ul>
//         <a
//           href="https://flushing-international-high-school.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           View Live
//         </a>
//       </div>
//     </div>
//   </section>
// );

// export default TeachingProjects;

// import React from "react";
// import packman from "../images/packman.png";
// import pixelpad from "../images/jump.png";


// import webDev from "../images/fihs.png";
// import bank from "../images/bank.png";

// const TeachingProjects = () => (
//   <section id="teaching" className="p-10 bg-white">
//     <h3 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">Teaching Projects</h3>
//     <p className="text-center text-2xl mb-10">Here are some of the projects I’ve used to teach coding concepts:</p>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Scratch Projects */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={packman}
//             alt="Scratch Projects"
//             className="w-full h-80 object-cover"
//           />
//         </a>
//         <h4 className="font-bold text-lg mb-4 text-center">Scratch Projects</h4>
//         <p className="mb-4">
//           For kids aged 5-10, Scratch introduces block coding concepts through engaging projects.
//           Students work on fun games like catching ghosts, maze navigation, and creative animations, 
//           building their problem-solving and logic skills.
//         </p>
//       </div>
//         {/* JavaScript, HTML, CSS Projects */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={webDev}
//             alt="Web Development Projects"
//             className="w-full h-80 object-cover"
//           />
//         </a>
//         <h4 className="font-bold text-lg mb-4 text-center">Web Development Projects</h4>
//         <p className="mb-4">
//           For students passionate about web development, we build portfolios, school websites, 
//           and interactive projects. These classes teach JavaScript, HTML, and CSS fundamentals, 
//           focusing on responsive design and functionality.
//         </p>
//       </div>

//       {/* Python Projects */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={pixelpad}
//             alt="Python Projects"
//             className="w-full h-80 object-cover"
//           />
//         </a>
//         <h4 className="font-bold text-lg mb-4 text-center">Python Projects</h4>
//         <p className="mb-4">
//           Designed for students aged 10 and up, Python classes use Pixelpad to explore advanced coding concepts. 
//           Students learn about objects, dictionaries, and lists by creating interactive games like space shooters 
//           and turtle races.
//         </p>
//       </div>

//       {/* Java Projects */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={bank}
//             alt="Java Projects"
//             className="w-full h-80 object-cover"
//           />
//         </a>
//         <h4 className="font-bold text-lg mb-4 text-center">Java Projects</h4>
//         <p className="mb-4">
//           Targeting 9th and 10th graders preparing for AP Computer Science, Java classes focus on 
//           classes, objects, and functions. Students create projects like GUI-based calculators to apply 
//           these concepts in real-world scenarios.
//         </p>
//       </div>

    
//     </div>
//   </section>
// );

// export default TeachingProjects;
import React from "react";
import packman from "../images/packman.png";
import pixelpad from "../images/jump.png";
import webDev from "../images/fihs.png";
import bank from "../images/bank.png";

const TeachingProjects = () => (
  <section id="teaching" className="p-10 bg-white">
    <h3 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
      Teaching Projects
    </h3>
    <p className="text-center text-xl sm:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
      Explore some of the most exciting projects I've created to teach coding! 
      These projects span across <span className="font-bold text-indigo-600">Scratch</span>, 
      <span className="font-bold text-purple-600"> Web Development</span>, 
      <span className="font-bold text-pink-600"> Python</span>, and 
      <span className="font-bold text-blue-600"> Java</span>—designed to make learning 
      fun, interactive, and engaging for students of all ages.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Scratch Projects */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <a href="#" className="block mb-4">
          <img
            src={packman}
            alt="Scratch Projects"
            className="w-full h-80 object-cover rounded-md"
          />
        </a>
        <h4 className="font-bold text-lg mb-4 text-center text-purple-600">Scratch Projects</h4>
        <p className="mb-4">
          For kids aged 5-10, Scratch introduces block coding concepts through engaging projects.
          Students work on fun games like catching ghosts, maze navigation, and creative animations, 
          building their problem-solving and logic skills.
        </p>
      </div>
      {/* Web Development Projects */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <a href="#" className="block mb-4">
          <img
            src={webDev}
            alt="Web Development Projects"
            className="w-full h-80 object-cover rounded-md"
          />
        </a>
        <h4 className="font-bold text-lg mb-4 text-center text-indigo-600">Web Development Projects</h4>
        <p className="mb-4">
          For students passionate about web development, we build portfolios, school websites, 
          and interactive projects. These classes teach JavaScript, HTML, and CSS fundamentals, 
          focusing on responsive design and functionality.
        </p>
      </div>
      {/* Python Projects */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <a href="#" className="block mb-4">
          <img
            src={pixelpad}
            alt="Python Projects"
            className="w-full h-80 object-cover rounded-md"
          />
        </a>
        <h4 className="font-bold text-lg mb-4 text-center text-pink-600">Python Projects</h4>
        <p className="mb-4">
          Designed for students aged 10 and up, Python classes use Pixelpad to explore advanced coding concepts. 
          Students learn about objects, dictionaries, and lists by creating interactive games like space shooters 
          and turtle races.
        </p>
      </div>
      {/* Java Projects */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <a href="#" className="block mb-4">
          <img
            src={bank}
            alt="Java Projects"
            className="w-full h-80 object-cover rounded-md"
          />
        </a>
        <h4 className="font-bold text-lg mb-4 text-center text-blue-600">Java Projects</h4>
        <p className="mb-4">
          Targeting 9th and 10th graders preparing for AP Computer Science, Java classes focus on 
          classes, objects, and functions. Students create projects like GUI-based calculators to apply 
          these concepts in real-world scenarios.
        </p>
      </div>
    </div>
  </section>
);

export default TeachingProjects;
