import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const allProjects = [
  {
    title: "Spring Boot Blog REST API",
    description: "Backend REST API for a blogging platform: posts, comments, users, JWT auth.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/mohit12141/springboot-blog-rest-api",
    demo: ""
  },
  {
    title: "Student Management System",
    description: "CRUD app using Spring Boot for managing students and grades.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/mohit12141/Student-Management-System-Springboot",
    demo: ""
  },
  {
    title: "Weather Dashboard",
    description: "Weather forecast app using OpenWeatherMap API.",
    tech: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com/mohit12141/weather",
    demo: ""
  },
  {
    title: "Simple Billing System",
    description: "Basic billing system built in Java for invoicing and recordkeeping.",
    tech: ["Java"],
    github: "https://github.com/mohit12141/Simple-Billing-System",
    demo: ""
  },
  {
    title: "Portfolio Website",
    description: "This site! Built using React, Tailwind CSS and GitHub Pages.",
    tech: ["React", "Tailwind CSS", "GitHub Pages"],
    github: "https://github.com/mohit12141/portfolio",
    demo: "https://mohit12141.github.io/portfolio/"
  }
];

const hiddenFilters = ["GitHub Pages"];
const allTechs = [
  "All",
  ...Array.from(
    new Set(
      allProjects.flatMap(p => p.tech).filter(tech => !hiddenFilters.includes(tech))
    )
  ),
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.tech.includes(activeFilter)));
    }
  }, [activeFilter]);

  const renderProjectCard = (project, i) => (
    <div
      key={i}
      data-aos="fade-up"
      className="bg-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-xl h-full"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2 text-textDark">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-white text-sm text-primary px-3 py-1 rounded-full shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-black transition"
          >
            <FaGithub size={20} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-black transition"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>
  );


  const middleIndex =
  activeFilter === "All" &&
  swiperInstance?.params?.slidesPerView
    ? activeIndex + Math.floor(swiperInstance.params.slidesPerView / 2)
    : -1;


  return (
    <section id="projects" className="pt-24 bg-white dark:bg-[#111827] px-4 md:px-12 py-16 text-textDark dark:text-gray-200">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">Projects</h2>

        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                activeFilter === tech
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {activeFilter === "All" ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {filteredProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`transition-all duration-300 ${
                    i === middleIndex
                      ? 'scale-105 shadow-2xl z-10'
                      : 'scale-95 opacity-80'
                  }`}
                >
                  {renderProjectCard(project, i)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => renderProjectCard(project, i))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
