import React from "react";
import { FaUniversity, FaBriefcase } from "react-icons/fa";

const EducationExperienceSection = () => {
  return (
    <section className="p-10 bg-gray-100 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-6">Education & Experience</h2>

      {/* Educational Qualifications */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <FaUniversity className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-xl font-bold">MS in Computer Science</h3>
          <p className="text-sm text-gray-600">
            {/* <strong>Computer Science</strong>   */}
            Georgia Institute of Technology  
            <span className="block mt-2">Expected: May 2026 | CGPA: 4.0/4.0</span>
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <FaUniversity className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-bold">BS in Computer Science</h3>
          <p className="text-sm text-gray-600">
            {/* <strong >Computer Science</strong>   */}
            Queens College, CUNY  
            <span className="block mt-2">Graduated: May 2022 | CGPA: 3.7/4.0</span>
          </p>
        </div>
      </div>

      {/* Professional Experience */}
      <h3 className="text-2xl font-bold mt-12 mb-6">Professional Experience</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <FaBriefcase className="text-5xl text-purple-500 mb-4" />
          <h3 className="text-xl font-bold">Web Application Developer</h3>
          <p className="text-sm text-gray-600">
            NYC Department of Education, FIHS  
            <span className="block mt-2">Aug 2024 – Present</span>
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <FaBriefcase className="text-5xl text-red-500 mb-4" />
          <h3 className="text-xl font-bold">Software Engineering Fellow</h3>
          <p className="text-sm text-gray-600">
            Headstarter AI  
            <span className="block mt-2">Jul 2024 – Sep 2024</span>
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <FaBriefcase className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold">Development Intern</h3>
          <p className="text-sm text-gray-600">
            Arena Talent  
            <span className="block mt-2">Sep 2024 – Dec 2024</span>
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <FaBriefcase className="text-5xl text-teal-500 mb-4" />
          <h3 className="text-xl font-bold">Associate Software Engineer</h3>
          <p className="text-sm text-gray-600">
            Infosys Limited  
            <span className="block mt-2">Jun 2022 – Dec 2023</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;
