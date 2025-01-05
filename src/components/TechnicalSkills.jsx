import React from 'react';

const TechnicalSkills = () => (
  <section id="skills" className="p-10 bg-white">
    <h3 className="text-3xl font-bold text-center mb-6">Technical Skills</h3>
    <div className="space-y-6">
      {/* JavaScript Skill */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">JavaScript</span>
        <span>85%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: '85%' }}
        ></div>
      </div>

      {/* Java Skill */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">Java</span>
        <span>75%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-orange-500 h-2.5 rounded-full"
          style={{ width: '75%' }}
        ></div>
      </div>

      {/* Python Skill */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">Python</span>
        <span>65%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: '65%' }}
        ></div>
      </div>

      {/* Other Skills */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">ReactJS</span>
        <span>80%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-teal-500 h-2.5 rounded-full"
          style={{ width: '80%' }}
        ></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold">Node.js</span>
        <span>75%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: '75%' }}
        ></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold">MongoDB</span>
        <span>70%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-red-500 h-2.5 rounded-full"
          style={{ width: '70%' }}
        ></div>
      </div>
    </div>
  </section>
);

export default TechnicalSkills;
