import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">SUNETRA</span>
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-700 dark:text-gray-300">
        A passionate developer who builds modern and sleek web applications.
      </p>
      <div className="flex space-x-6">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          View Work
        </a>
        <a href="#contact" className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}
