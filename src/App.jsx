import Nav from "./components/Nav";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Nav
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
      />
      <Header />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
