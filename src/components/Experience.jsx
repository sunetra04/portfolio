import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Front-end Intern",
      company: "Pinnacle Labs",
      desc: "Worked as a front-end intern, focusing on building responsive user interfaces."
    },
    {
      role: "Python Intern",
      company: "ShadowFox",
      desc: "Worked as a Python intern, focusing on building data pipelines and machine learning models."
    },
    {
      role: "Freelance Projects",
      company: "2024 – Present",
      desc: "Collaborated with clients to deliver high-quality web solutions."
    },
    {
      role: "SalesForce Developer Training",
      company: "Indian Institute of Training",
      desc: "Worked on real-world projects, collaborating with cross-functional teams."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h3>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
            <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
