import React from 'react';

import aiImg from '../images/ai.png';
import restaurantImg from '../images/restaurant.png';

import biodata from '../images/biodata.png'

import donation from '../images/donation.png'

const ProjectsSection = () => (
  <section id="projects" className="p-10 bg-gray-100">
    <h3 className="text-3xl font-bold text-center mb-6">My Projects</h3>
    <p className="text-center text-2xl mb-10">Here are some of the projects I've worked on:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Project 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={biodata} alt="Matrimony Website" className="w-full h-80 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">Find Your Better Half</h4>
          <p className="text-gray-700 mb-4">
          Developed LoveForever, a matrimonial web app enabling users to create and browse biodata profiles. Built with Node.js, React, and Flowbite for a seamless user experience.          </p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yousrahanif/findYourBetterHalf-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              GitHub Link
            </a>
            <a
              href="https://matrimony-351f1.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Live Link
            </a>
          </div>
        </div>
      </div>
        {/* Project 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={donation} alt="Donation Application" className="w-full h-80 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">Donation Application</h4>
          <p className="text-gray-700 mb-4">
          Built a donation platform with campaign creation, secure payments, and personalized dashboards. Developed using React, Node.js, Express.js, MongoDB, and DaisyUI.          </p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yousrahanif/Donation-Platform-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              GitHub Link
            </a>
            <a
              href="https://fundtogether-37491.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Live Link
            </a>
          </div>
        </div>
      </div>
        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={restaurantImg} alt="E-commerce Restaurant Website" className="w-full h-80 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">E-commerce Restaurant Website</h4>
          <p className="text-gray-700 mb-4">
          Developed a robust e-commerce platform for restaurants using Node.js, React, and JSX, enabling secure menu browsing, food ordering, and seamless restaurant services.          </p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yousrahanif/eCommerce-Restaurant-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              GitHub Link
            </a>
            <a
              href="https://restaurants-boss-d160e.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Live Link
            </a>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={aiImg} alt="AI Customer Support System" className="w-full h-80 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">AI Customer Support System</h4>
          <p className="text-gray-700 mb-4">
          Built a dynamic customer support app using Next.js, React, and OpenAI, allowing users to ask questions and receive real-time, accurate AI-driven responses.          </p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yousrahanif/OpenAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              GitHub Link
            </a>
            <a
              href="https://open-ai-six-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Live Link
            </a>
          </div>
        </div>
      </div>
    
    
    </div>
  </section>
);

export default ProjectsSection;
