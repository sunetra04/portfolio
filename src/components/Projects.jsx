import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "A sleek portfolio built with React + Tailwind CSS.",
      github: "https://github.com/sunetra04/portfolio",
      demo: "https://sunetra04.github.io/portfolio/",
    },
    {
      id: 2,
      title: "Weather App",
      desc: "Real-time weather forecast app using OpenWeather API.",
      github: "https://github.com/sunetra04/weather-app",
      demo: "https://your-weather-app-link.com",
    },
    {
      id: 3,
      title: "Movie App",
      desc: "A movie search application using The Movie Database API.",
      github: "https://github.com/sunetra04/TrendFlix",
      demo: "https://sunetra04.github.io/TrendFlix/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
            
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <Github className="w-5 h-5" />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
