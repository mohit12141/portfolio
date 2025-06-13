import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  FaJava,
  FaPython,
  FaGitAlt,
  FaGitlab,
  FaDocker,
  FaCloud,
  FaDatabase,
  FaLinux,
  FaCogs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiGrafana,
  SiGooglecloud,
} from "react-icons/si";

const techStack = [
  { name: 'Java', icon: <FaJava />, description: 'Core language for backend APIs' },
  { name: 'Python', icon: <FaPython />, description: 'Scripting and automation' },
  { name: 'SQL', icon: <FaDatabase />, description: 'Database querying and joins' },
  { name: 'Spring Boot', icon: <SiSpringboot />, description: 'Backend REST APIs in Java' },
  { name: 'MySQL', icon: <SiMysql />, description: 'Relational DB for structured data' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, description: 'Advanced RDBMS for production' },
  { name: 'Git', icon: <FaGitAlt />, description: 'Version control and branching' },
  { name: 'GitLab', icon: <FaGitlab />, description: 'CI pipelines & version control' },
  { name: 'Linux', icon: <FaLinux />, description: 'Terminal usage and server ops' },
  { name: 'CI/CD', icon: <FaCloud />, description: 'Build/test/deploy automation' },
  { name: 'Docker', icon: <FaDocker />, description: 'Containerization for deployments' },
  { name: 'Azure', icon: <FaCloud />, description: 'Cloud services and hosting' },
  { name: 'GCP', icon: <SiGooglecloud />, description: 'Cloud infrastructure and BigQuery' },
  { name: 'Grafana', icon: <SiGrafana />, description: 'Monitoring and dashboards' },
  { name: 'OpenShift', icon: <FaCogs />, description: 'Kubernetes platform for deployments' },
];

const TechStack = () => {
  return (
    <section id="tech" className="relative">
      <div id="tech-anchor" className="absolute -top-20" />

      <div className="pt-24 px-4 md:px-12 py-16 bg-section">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">🧰 Tools & Tech</h2>

          <ul className="flex flex-wrap justify-center gap-6 text-lg">
            {techStack.map((tech) => (
              <Tippy content={tech.description} key={tech.name} placement="top">
                <li className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-highlight dark:hover:bg-gray-700 transition flex items-center justify-center text-2xl mb-1 group">
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
                      {tech.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </li>
              </Tippy>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
