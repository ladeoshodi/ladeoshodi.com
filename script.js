const navLinks = Array.from(document.querySelectorAll(".nav-links"));

const home = document.querySelector("#header");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const connect = document.querySelector("#connect");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("home-link")) {
      home.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.classList.contains("skills-link")) {
      skills.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.classList.contains("projects-link")) {
      projects.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.classList.contains("connect-link")) {
      connect.scrollIntoView({ behavior: "smooth" });
    }
  });
});
