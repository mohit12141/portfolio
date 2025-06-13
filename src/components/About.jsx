import React, { useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import "tippy.js/dist/tippy.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="relative">
      <div id="about-anchor" className="absolute -top-20" />

      <div className="w-full pt-24 px-4 md:px-12 py-16 bg-section">
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
              className="btn-primary inline-block shadow"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
