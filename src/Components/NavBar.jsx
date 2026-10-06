import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-zinc-900/90 backdrop-blur-md text-white z-50 shadow-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

        {/* LOGO / NAME */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide hover:text-blue-400 transition"
        >
          Kishore<span className="text-blue-500">.</span>
        </a>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#Skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* RESUME BUTTON */}
       

      </div>
    </nav>
  );
}