import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
// import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-white dark:bg-[#111827] transition-colors duration-300">
      {/* Optional: Enable when dark mode is active */}
      {/* <DarkModeToggle /> */}

      <Navbar />

      {/* Section Order */}
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
