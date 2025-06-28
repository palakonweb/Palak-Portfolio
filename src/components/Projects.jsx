import React from 'react';

const projects = [
  {
    title: "Artistly.com",
    link: "https://github.com/palakonweb/Artistly-next",
    description: "A platform to book performing artists online."
  },
  {
    title: "Employee Task Manager",
    link: "https://github.com/palakonweb/react-employee-task-manager",
    description: "A task management system for employees."
  },
  {
    title: "Heritage Website",
    link: "https://github.com/palakonweb/Travel-website-react",
    description: "A travel site showcasing heritage destinations."
  }
];

const Projects = () => {
  return (
    <div className="p-6 bg-pink-50 min-h-auto border-2 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Example Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-pink-100 rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
