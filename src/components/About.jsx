import React, { useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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


  return (
    <section id="about" className="pt-24 bg-white dark:bg-[#111827] px-4 md:px-12 py-16 text-textDark dark:text-gray-200">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src={profileImg}
            alt="Mohit Sahu"
            className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-primary"
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I'm Mohit Sahu, a passionate Backend Developer with 1+ years of
            experience in building scalable REST APIs using Java and Spring
            Boot. I thrive in Agile environments, optimize database performance,
            and apply clean coding principles to deliver maintainable code.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I'm skilled in JPA, MySQL, RESTful design patterns, and cloud
            fundamentals across Azure and GCP. I love exploring new tech and
            simplifying complex problems with clean, scalable architecture.
          </p>
          <a
            href="/MohitSahu_SpringBoot.pdf"
            download
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16 px-4">
        <h3 className="text-2xl font-semibold text-center text-primary mb-6">
          Tech Stack
        </h3>

        <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800">
          {techStack.map((tech) => (
            <Tippy content={tech.description} key={tech.name} placement="top">
              <li className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition flex items-center justify-center text-2xl mb-1 group">
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
    </section>
  );
};

export default About;
