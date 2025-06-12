import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
// import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      {/* <DarkModeToggle /> */}
      <Navbar />
     
      {/* Placeholder sections to link the navbar */}
      <section id="about" className="min-h-screen p-8 bg-secondary">
        {/* <h2 className="text-3xl text-primary font-bold">About Section</h2> */}
        <About />
      </section>

      <section id="projects" className="min-h-screen p-8">
        {/* <h2 className="text-3xl text-primary font-bold">Projects Section</h2> */}
        <Projects />
      </section>

      <section id="certifications" className="min-h-screen p-8 bg-secondary">
        {/* <h2 className="text-3xl text-primary font-bold">Certifications Section</h2> */}
         <Certifications />
      </section>

      <section id="contact" className="min-h-screen p-8">
        {/* <h2 className="text-3xl text-primary font-bold">Contact Section</h2> */}
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
