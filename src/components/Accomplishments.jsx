// import React from 'react';
// import camp from '../images/camp.jpg'
// import panel from '../images/panel.jpg'

// import diploma from '../images/diploma.png'
// const Accomplishments = () => (
//   <section id="accomplishments" className="p-10 bg-gray-100">
//     <h3 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">A Few Accomplishments</h3>
//     <p className="text-center text-2xl mb-10">Here are some highlights of my achievements and experiences:</p>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Instructed Robotics Engineering Summer Camp */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={camp}
//             alt="Robotics Engineering Summer Camp"
//             className="w-full h-80 object-cover"           />
//         </a>
//         <h4 className="font-bold text-lg mb-4">Instructed Robotics Engineering Summer Camp</h4>
//         <p className="mb-4">
//           Led a summer camp focused on robotics engineering, guiding participants through various
//           projects and hands-on activities.
//         </p>
//         <a
//           href="https://www.thecoderschool.com/locations/bayside/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           Schedule Here
//         </a>
//       </div>

//       {/* Panelist for Software Engineering Event */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={panel}
//             alt="Panelist for Software Engineering Event"
//             // className="w-full h-auto rounded-lg"
//             className="w-full h-80 object-cover" 
//           />
//         </a>
//         <h4 className="font-bold text-lg mb-4">Panelist for Software Engineering Event</h4>
//         <p className="mb-4">
//           Participated as a panelist in a Software Engineering event, sharing insights and
//           experiences with aspiring engineers and students.
//         </p>
//         <a
//           href="https://www.linkedin.com/posts/estefania-hereira_flushinginternationalhs-techcareers-mentorship-ugcPost-7184753103282315265-Cq-x?utm_source=share&utm_medium=member_desktop"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           Event Overview
//         </a>
//       </div>

//       {/* Graduated Cum Laude and Dean's List */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <a href="#" className="block mb-4">
//           <img
//             src={diploma}
//             alt="Graduated Cum Laude"
//             // className="w-full h-auto rounded-lg"
//             className="w-full h-80 object-cover" 
//           />
//         </a>
//         <h4 className="font-bold text-lg mb-4">Graduated Cum Laude and Dean's List</h4>
//         <p className="mb-4">
//           Graduated with honors, earning a Cum Laude distinction and consistently making the
//           Dean's List throughout my academic career.
//         </p>
//         <a
//           href="https://drive.google.com/file/d/13LLTOn93qXTJHelr5SmVWHKysanhr9On/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           View Here
//         </a>
//       </div>
//     </div>
//   </section>
// );

// export default Accomplishments;


import React from 'react';
import camp from '../images/camp.jpg';
import panel from '../images/panel.jpg';
import diploma from '../images/diploma.png';

const Accomplishments = () => (
  <section id="accomplishments" className="p-10 bg-gray-100">
    <h3 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
      A Few Accomplishments
    </h3>
    <p className="text-center text-2xl mb-10">Here are some highlights of my achievements and experiences:</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Instructed Robotics Engineering Summer Camp */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <a href="#" className="block mb-4">
          <img
            src={camp}
            alt="Robotics Engineering Summer Camp"
            className="w-full h-80 object-cover"
          />
        </a>
        <h4 className="font-extrabold text-lg mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text ">
          Instructed Robotics Summer Camp
        </h4>
        <p className="mb-4">
          Led a summer camp focused on robotics engineering, guiding participants through various
          projects and hands-on activities.
        </p>
        <a
          href="https://www.thecoderschool.com/locations/bayside/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Schedule Here
        </a>
      </div>

      {/* Panelist for Software Engineering Event */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <a href="#" className="block mb-4">
          <img
            src={panel}
            alt="Panelist for Software Engineering Event"
            className="w-full h-80 object-cover"
          />
        </a>
        <h4 className="font-extrabold text-lg mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-transparent bg-clip-text ">
          Panelist for Software Engineering Event
        </h4>
        <p className="mb-4">
          Participated as a panelist in a Software Engineering event, sharing insights and
          experiences with aspiring engineers and students.
        </p>
        <a
          href="https://www.linkedin.com/posts/estefania-hereira_flushinginternationalhs-techcareers-mentorship-ugcPost-7184753103282315265-Cq-x?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Event Overview
        </a>
      </div>

      {/* Graduated Cum Laude and Dean's List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <a href="#" className="block mb-4">
          <img
            src={diploma}
            alt="Graduated Cum Laude"
            className="w-full h-80 object-cover"
          />
        </a>
        <h4 className="font-extrabold text-lg mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text ">
          Graduated Cum Laude and Dean's List
        </h4>
        <p className="mb-4">
          Graduated with honors, earning a Cum Laude distinction and consistently making the
          Dean's List throughout my academic career.
        </p>
        <a
          href="https://drive.google.com/file/d/13LLTOn93qXTJHelr5SmVWHKysanhr9On/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Here
        </a>
      </div>
    </div>
  </section>
);

export default Accomplishments;

