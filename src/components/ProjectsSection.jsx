// import React from 'react';

// import aiImg from '../images/ai.png';
// import restaurantImg from '../images/restaurant.png';
// import biodata from '../images/biodata.png'

// import donation from '../images/donation.png'

// const ProjectsSection = () => (
//   <section id="projects" className="p-10 bg-gray-100">
//     <h3 className="text-3xl font-bold text-center mb-6">My Projects</h3>
//     <p className="text-center text-2xl mb-10">Here are some of the projects I've worked on:</p>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* Project 1 */}
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <img src={biodata} alt="Matrimony Website" className="w-full h-80 object-cover" />
//         <div className="p-6">
//           <h4 className="font-bold text-xl mb-3">Find Your Better Half</h4>
//           <p className="text-gray-700 mb-4">
//           Developed LoveForever, a matrimonial web app enabling users to create and browse biodata profiles. Built with Node.js, React, and Flowbite for a seamless user experience.          </p>
//           <div className="flex justify-between">
//             <a
//               href="https://github.com/yousrahanif/findYourBetterHalf-Client"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               GitHub Link
//             </a>
//             <a
//               href="https://matrimony-351f1.web.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               Live Link
//             </a>
//           </div>
//         </div>
//       </div>
//         {/* Project 4 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <img src={donation} alt="Donation Application" className="w-full h-80 object-cover" />
//         <div className="p-6">
//           <h4 className="font-bold text-xl mb-3">Donation Application</h4>
//           <p className="text-gray-700 mb-4">
//           Built a donation platform with campaign creation, secure payments, and personalized dashboards. Developed using React, Node.js, Express.js, MongoDB, and DaisyUI.          </p>
//           <div className="flex justify-between">
//             <a
//               href="https://github.com/yousrahanif/Donation-Platform-Client"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               GitHub Link
//             </a>
//             <a
//               href="https://fundtogether-37491.web.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               Live Link
//             </a>
//           </div>
//         </div>
//       </div>
//         {/* Project 3 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <img src={restaurantImg} alt="E-commerce Restaurant Website" className="w-full h-80 object-cover" />
//         <div className="p-6">
//           <h4 className="font-bold text-xl mb-3">E-commerce Restaurant Website</h4>
//           <p className="text-gray-700 mb-4">
//           Developed a robust e-commerce platform for restaurants using Node.js, React, and JSX, enabling secure menu browsing, food ordering, and seamless restaurant services.          </p>
//           <div className="flex justify-between">
//             <a
//               href="https://github.com/yousrahanif/eCommerce-Restaurant-Website"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               GitHub Link
//             </a>
//             <a
//               href="https://restaurants-boss-d160e.web.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               Live Link
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Project 2 */}
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <img src={aiImg} alt="AI Customer Support System" className="w-full h-80 object-cover" />
//         <div className="p-6">
//           <h4 className="font-bold text-xl mb-3">AI Customer Support System</h4>
//           <p className="text-gray-700 mb-4">
//           Built a dynamic customer support app using Next.js, React, and OpenAI, allowing users to ask questions and receive real-time, accurate AI-driven responses.          </p>
//           <div className="flex justify-between">
//             <a
//               href="https://github.com/yousrahanif/OpenAI"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               GitHub Link
//             </a>
//             <a
//               href="https://open-ai-six-beta.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline">
//               Live Link
//             </a>
//           </div>
//         </div>
//       </div>
    
    
//     </div>
//   </section>
// );

// export default ProjectsSection;


// import React, { useState } from 'react';

// import aiImg from '../images/ai.png';
// import restaurantImg from '../images/restaurant.png';
// import biodata from '../images/biodata.png';
// import donation from '../images/donation.png';

// const ProjectModal = ({ open, onClose, project }) => {
//   if (!open) return null;

//   return (
//     <dialog id="my_modal_1" className="modal" open>
//       <div className="modal-box">
//         <h3 className="font-bold text-lg">{project.name}</h3>
//         <p className="py-4">{project.description}</p>
//         <ul className="list-disc pl-6">
//           <li><strong>Main Technology Stack:</strong> {project.stack}</li>
//           <li><strong>Challenges Faced:</strong> {project.challenges}</li>
//           <li><strong>Potential Improvements:</strong> {project.improvements}</li>
//         </ul>
//         <div className="modal-action">
//           <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">GitHub Link</a>
//           <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">Live Link</a>
//           <button className="btn" onClick={onClose}>Close</button>
//         </div>
//       </div>
//     </dialog>
//   );
// };

// const ProjectsSection = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       name: 'Find Your Better Half',
//       image: biodata,
//       description: 'Developed LoveForever, a matrimonial web app enabling users to create and browse biodata profiles.',
//       stack: 'Node.js, React, Flowbite',
//       challenges: 'Handling large data and ensuring smooth user experience across devices.',
//       improvements: 'Adding AI-based matchmaking and more detailed profile options.',
//       githubLink: 'https://github.com/yousrahanif/findYourBetterHalf-Client',
//       liveLink: 'https://matrimony-351f1.web.app/',
//     },
//     {
//       name: 'Donation Application',
//       image: donation,
//       description: 'Built a donation platform with campaign creation, secure payments, and personalized dashboards.',
//       stack: 'React, Node.js, Express.js, MongoDB, DaisyUI',
//       challenges: 'Integrating payment systems and ensuring data security.',
//       improvements: 'Expanding the platform to support global payments and multi-language support.',
//       githubLink: 'https://github.com/yousrahanif/Donation-Platform-Client',
//       liveLink: 'https://fundtogether-37491.web.app/',
//     },
//     {
//       name: 'E-commerce Restaurant Website',
//       image: restaurantImg,
//       description: 'Developed a robust e-commerce platform for restaurants using Node.js, React, and JSX.',
//       stack: 'Node.js, React, JSX',
//       challenges: 'Creating an intuitive UI and implementing real-time inventory updates.',
//       improvements: 'Adding AI-based menu recommendations and improving UX/UI.',
//       githubLink: 'https://github.com/yousrahanif/eCommerce-Restaurant-Website',
//       liveLink: 'https://restaurants-boss-d160e.web.app/',
//     },
//     {
//       name: 'AI Customer Support System',
//       image: aiImg,
//       description: 'Built a dynamic customer support app using Next.js, React, and OpenAI.',
//       stack: 'Next.js, React, OpenAI',
//       challenges: 'Training the AI model and integrating with real-time data sources.',
//       improvements: 'Expanding the AI capabilities to handle more complex queries.',
//       githubLink: 'https://github.com/yousrahanif/OpenAI',
//       liveLink: 'https://open-ai-six-beta.vercel.app/',
//     },
//   ];

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="p-10 bg-gray-100">
//       <h3 className="text-3xl font-bold text-center mb-6">My Projects</h3>
//       <p className="text-center text-2xl mb-10">Here are some of the projects I've worked on:</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <img src={project.image} alt={project.name} className="w-full h-80 object-cover" />
//             <div className="p-6">
//               <h4 className="font-bold text-xl mb-3 text-center">{project.name}</h4>
//               <p className="text-gray-700 mb-4 text-center">{project.description}</p>
//               <div className="flex justify-center">
//                 <button
//                   className="btn btn-primary text-white hover:underline"
//                   onClick={() => openModal(project)}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <ProjectModal open={modalOpen} onClose={closeModal} project={selectedProject} />
//     </section>
//   );
// };

// export default ProjectsSection;

import React, { useState } from 'react';

import aiImg from '../images/ai.png';
import restaurantImg from '../images/restaurant.png';
import biodata from '../images/biodata.png';
import donation from '../images/donation.png';

// Add icon imports from Font Awesome or your chosen icon library
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';

const ProjectModal = ({ open, onClose, project }) => {
  if (!open) return null;

  return (
    <dialog id="my_modal_1" className="modal" open>
      <div className="modal-box bg-gray-800 text-white">
        <h3 className="font-bold text-3xl text-yellow-400">{project.name}</h3>
        <p className="py-4 text-lg text-gray-300">{project.description}</p>
        <ul className="list-disc pl-6 text-gray-200">
          <li><strong className="text-blue-300">Main Technology Stack:</strong> {project.stack}</li>
          <li><strong className="text-blue-300">Challenges Faced:</strong> {project.challenges}</li>
          <li><strong className="text-blue-300">Potential Improvements:</strong> {project.improvements}</li>
        </ul>
        <div className="modal-action">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-blue-600 hover:bg-blue-800 text-white"
          >
            GitHub Link
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-green-600 hover:bg-green-800 text-white"
          >
            Live Link
          </a>
          <button className="btn bg-red-600 hover:bg-red-800 text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};


const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'Find Your Better Half',
      image: biodata,
      description: 'Developed LoveForever, a matrimonial web app enabling users to create and browse biodata profiles.',
      stack: 'Node.js, React, Flowbite',
      challenges: 'Handling large data and ensuring smooth user experience across devices.',
      improvements: 'Adding AI-based matchmaking and more detailed profile options.',
      githubLink: 'https://github.com/yousrahanif/findYourBetterHalf-Client',
      liveLink: 'https://matrimony-351f1.web.app/',
      techIcons: [
        <FaNodeJs key="node" className="text-green-500" />,
        <FaReact key="react" className="text-blue-500" />
      ], // Add tech icons with colors here
    },
    {
      name: 'Donation Application',
      image: donation,
      description: 'Built a donation platform with campaign creation, secure payments, and personalized dashboards.',
      stack: 'React, Node.js, Express.js, MongoDB, DaisyUI',
      challenges: 'Ensuring data security.',
      improvements: 'Expanding the platform to support global payments and multi-language support.',
      githubLink: 'https://github.com/yousrahanif/Donation-Platform-Client',
      liveLink: 'https://fundtogether-37491.web.app/',
      techIcons: [
        <FaReact key="react" className="text-blue-500" />,
        <FaNodeJs key="node" className="text-green-500" />,
        <SiExpress key="express" className="text-gray-500" />,
        <SiMongodb key="mongodb" className="text-green-700" />
      ],
    },
    {
      name: 'E-commerce Restaurant Website',
      image: restaurantImg,
      description: 'Developed a robust e-commerce platform for restaurants using Node.js, React, and JSX.',
      stack: 'Node.js, React, JSX',
      challenges: 'Creating an intuitive UI and implementing real-time inventory updates.',
      improvements: 'Adding AI-based menu recommendations and improving UX/UI.',
      githubLink: 'https://github.com/yousrahanif/eCommerce-Restaurant-Website',
      liveLink: 'https://restaurants-boss-d160e.web.app/',
      techIcons: [
        <FaNodeJs key="node" className="text-green-500" />,
        <FaReact key="react" className="text-blue-500" />
      ],
    },
    {
      name: 'AI Customer Support System',
      image: aiImg,
      description: 'Built a dynamic customer support app using Next.js, React, and OpenAI.',
      stack: 'Next.js, React, OpenAI',
      challenges: 'Training the AI model and integrating with real-time data sources.',
      improvements: 'Expanding the AI capabilities to handle more complex queries.',
      githubLink: 'https://github.com/yousrahanif/OpenAI',
      liveLink: 'https://open-ai-six-beta.vercel.app/',
      techIcons: [
        <SiNextdotjs key="next" className="text-black" />,
        <FaReact key="react" className="text-blue-500" />
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h3 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">My Projects</h3>
      <p className="text-center text-2xl mb-10">Here are some of the projects I've worked on:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-80 object-cover" />
            <div className="p-6">
              <h4 className="font-bold text-xl mb-3 text-center">{project.name}</h4>
              <p className="text-gray-700 mb-4 text-center">{project.description}</p>
              <div className="flex justify-center space-x-4 mb-4">
                {/* Display technology icons with colors */}
                {project.techIcons.map((icon, idx) => (
                  <div key={idx} className="text-2xl">{icon}</div>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  className="btn btn-primary text-white hover:underline"
                  onClick={() => openModal(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal open={modalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
};

export default ProjectsSection;
