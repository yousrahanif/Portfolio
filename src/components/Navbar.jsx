import React from 'react';
import resumePDF from '../files/resume.pdf'

const Navbar = () => (
  <nav className="bg-gray-800 text-white sticky top-0 z-50">
    <div className="navbar p-4">
      <div className="navbar-start">
        <a href="#home" className="text-xl font-bold lg:text-2xl">Yousra Hanif</a>
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Technical Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Academic Projects</a></li>
            <li><a href="#teaching" className="hover:text-blue-400">Teaching Projects</a></li>
            <li><a href="#accomplishments" className="hover:text-blue-400">Accomplishments</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Technical Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Academic Projects</a></li>
          <li><a href="#teaching" className="hover:text-blue-400">Teaching Projects</a></li>
          <li><a href="#accomplishments" className="hover:text-blue-400">Accomplishments</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end flex justify-center items-center">
  <a
    href={resumePDF}
    download
    className="btn btn-primary hidden lg:inline-flex justify-center items-center">
    Download Resume
  </a>
</div>

    </div>
  </nav>
);

export default Navbar;
