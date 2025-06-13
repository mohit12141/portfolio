import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div id="contact-anchor" className="absolute -top-20" />

      <div className="pt-24 px-4 md:px-12 py-16 bg-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Let's Connect</h2>
          <p className="text-lg mb-10">
            I'm always open to interesting opportunities, collaborations, or just a friendly hello.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-2xl mb-10">
            <a
              href="mailto:mohitsahuimp@gmail.com"
              className="text-primary hover:text-accent transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/mohit12141"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-sahu-89254b191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/mohit1412/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="/MohitSahu_SpringBoot.pdf"
              download
              className="text-primary hover:text-accent transition"
              aria-label="Download Resume"
            >
              <FaFileDownload />
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Mohit Sahu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
