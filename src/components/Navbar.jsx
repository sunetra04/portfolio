import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, handleThemeSwitch }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg">
        <nav className="flex justify-between items-center p-6 bg-white/70 dark:bg-gray-800/70 shadow-md">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">MyPortfolio</h1>
          <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-gray-800 dark:text-gray-200">
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <button
            onClick={handleThemeSwitch}
            className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
    </header>
  );
}
