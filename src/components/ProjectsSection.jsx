import React from 'react';
import profImg from '../images/prof.png';
import aiImg from '../images/ai.png';
import restaurantImg from '../images/restaurant.png';
import flashcardImg from '../images/flashcard.png';

const ProjectsSection = () => (
  <section id="projects" className="p-10 bg-gray-100">
    <h3 className="text-3xl font-bold text-center mb-6">My Projects</h3>
    <p className="text-center text-2xl mb-10">Here are some of the projects I've worked on:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Project 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={profImg} alt="Rate My Professor" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">Rate My Professor</h4>
          <p className="text-gray-700 mb-4">
            Developed and deployed a web application using Next.js, React, OpenAI, and Pinecone, enabling users to query and receive detailed insights about professors by reading data from a custom database and external sources.
          </p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yousrahanif/Rate-My-Professor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              GitHub Link
            </a>
            <a
              href="https://rate-my-professor-sigma.vercel.app/"
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
        <img src={aiImg} alt="AI Customer Support System" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">AI Customer Support System</h4>
          <p className="text-gray-700 mb-4">
            Built a dynamic customer support application using Next.js, React, and OpenAI, enabling users to ask questions and receive accurate, real-time responses through a sophisticated AI-driven interface.
          </p>
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
      {/* Project 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={restaurantImg} alt="E-commerce Restaurant Website" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">E-commerce Restaurant Website</h4>
          <p className="text-gray-700 mb-4">
            Implemented a robust e-commerce platform for restaurants using Node.js, React, and JSX. Facilitates secure menu browsing, food ordering, and seamless access to restaurant services.
          </p>
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
      {/* Project 4 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={flashcardImg} alt="Flashcard SaaS Application" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-3">Flashcard SaaS Application</h4>
          <p className="text-gray-700 mb-4">
            Built a scalable web application for creating and managing flashcards using Next.js, React, Firebase, and Stripe. This SaaS solution enables users to efficiently create, organize, and study flashcards with integrated payment features for premium access.
          </p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yousrahanif/Flashcard-SaaS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              GitHub Link
            </a>
            <a
              href="https://flashcards-rho-amber.vercel.app/"
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
