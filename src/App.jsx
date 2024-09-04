import Nav from "./components/Nav";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <>
      <Nav
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        connectRef={connectRef}
      />
      <Header />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Connect ref={connectRef} />
      <Footer />
    </>
  );
}

export default App;
