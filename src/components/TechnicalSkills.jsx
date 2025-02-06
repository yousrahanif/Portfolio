// import React from 'react';

// const TechnicalSkills = () => (
//   <section id="skills" className="p-10 bg-white">
//     <h3 className="text-3xl font-bold text-center mb-6">Technical Skills</h3>
//     <div className="space-y-6">
//       {/* JavaScript Skill */}
//       <div className="flex items-center justify-between">
//         <span className="font-semibold">JavaScript</span>
//         <span>85%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//         <div
//           className="bg-blue-500 h-2.5 rounded-full"
//           style={{ width: '85%' }}
//         ></div>
//       </div>

//       {/* Java Skill */}
//       <div className="flex items-center justify-between">
//         <span className="font-semibold">Java</span>
//         <span>75%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//         <div
//           className="bg-orange-500 h-2.5 rounded-full"
//           style={{ width: '75%' }}
//         ></div>
//       </div>

//       {/* Python Skill */}
//       <div className="flex items-center justify-between">
//         <span className="font-semibold">Python</span>
//         <span>65%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//         <div
//           className="bg-green-500 h-2.5 rounded-full"
//           style={{ width: '65%' }}
//         ></div>
//       </div>

//       {/* Other Skills */}
//       <div className="flex items-center justify-between">
//         <span className="font-semibold">ReactJS</span>
//         <span>80%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//         <div
//           className="bg-teal-500 h-2.5 rounded-full"
//           style={{ width: '80%' }}
//         ></div>
//       </div>

//       <div className="flex items-center justify-between">
//         <span className="font-semibold">Node.js</span>
//         <span>75%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//         <div
//           className="bg-green-600 h-2.5 rounded-full"
//           style={{ width: '75%' }}
//         ></div>
//       </div>

//       <div className="flex items-center justify-between">
//         <span className="font-semibold">MongoDB</span>
//         <span>70%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//         <div
//           className="bg-red-500 h-2.5 rounded-full"
//           style={{ width: '70%' }}
//         ></div>
//       </div>
//     </div>
//   </section>
// );

// export default TechnicalSkills;

import React from 'react';
import { FaJs, FaJava, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const TechnicalSkills = () => (
  <section id="skills" className="p-10 bg-white">
    <h3 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">Technical Skills</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
      {/* JavaScript Skill */}
      <div className="flex flex-col items-center">
        <FaJs className="text-yellow-500 text-4xl" />
        <span className="font-semibold mt-2">JavaScript</span>
      </div>

      {/* Java Skill */}
      <div className="flex flex-col items-center">
        <FaJava className="text-orange-600 text-4xl" />
        <span className="font-semibold mt-2">Java</span>
      </div>

      {/* Python Skill */}
      <div className="flex flex-col items-center">
        <FaPython className="text-green-500 text-4xl" />
        <span className="font-semibold mt-2">Python</span>
      </div>

      {/* ReactJS Skill */}
      <div className="flex flex-col items-center">
        <FaReact className="text-teal-500 text-4xl" />
        <span className="font-semibold mt-2">ReactJS</span>
      </div>

      {/* Node.js Skill */}
      <div className="flex flex-col items-center">
        <FaNodeJs className="text-green-600 text-4xl" />
        <span className="font-semibold mt-2">Node.js</span>
      </div>

      {/* MongoDB Skill */}
      <div className="flex flex-col items-center">
        <SiMongodb className="text-green-800 text-4xl" />
        <span className="font-semibold mt-2">MongoDB</span>
      </div>
    </div>
  </section>
);

export default TechnicalSkills;
