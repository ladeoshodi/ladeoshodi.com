import Nav from "./components/Nav";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useRef } from "react";
import profileBanner from "./assets/profile-banner.jpeg";
import { Box } from "@mui/material";

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
      <Box
        sx={{
          background: `no-repeat url(${profileBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90px",
          marginTop: "-8px",
          // "@media (min-width:768px)": {
          //   height: "60vh",
          // },
        }}
      ></Box>
      <div className="body-content">
        <Header />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
      </div>
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
