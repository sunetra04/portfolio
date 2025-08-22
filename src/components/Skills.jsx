import React from "react";
import { Code, GitMerge, Palette, Terminal, Server, Rocket} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      skills: ["JavaScript", "Python", "C"],
    },
    {
      title: "Full-Stack Web Development",
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      skills: ["HTML5 & CSS3", "React 19", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Version Control",
      icon: <GitMerge className="w-8 h-8 text-indigo-500" />,
      skills: ["Git", "GitHub"],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8 text-indigo-500" />,
      skills: ["Figma"],
    },
    {
      title: "Operating System",
      icon: <Terminal className="w-8 h-8 text-indigo-500" />,
      skills: ["Linux", "Basic Command Line Proficiency"],
    },
    {
      title: "Deployment",
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      skills: ["AWS","DOCKER","GCP","KUBERNETES"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Skills</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              {category.icon}
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h4>
            </div>
            <ul className="list-inside list-disc text-gray-600 dark:text-gray-300 space-y-2">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
