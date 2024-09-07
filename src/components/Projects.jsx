import {
  Box,
  Typography,
  styled,
  Link,
  Chip,
  Button,
  Paper,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { forwardRef } from "react";

import harryPotterGameImg from "../assets/harry-potter-game.png";

const bulmaCSSIcon = (
  <svg
    width="13"
    height="13"
    viewBox="0 0 42 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 44L3.81818 16L19.0909 0L38.1818 20L26.7273 32L42 48L19.0909 64L0 44Z"
      fill="#616161"
    />
  </svg>
);
// Projects
const projects = [
  {
    name: "Minesweeper",
    summary: "Grid based browser game",
    tags: [
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "JavaScript", icon: <JavascriptIcon /> },
    ],
    image: {
      imgUrl:
        "https://github.com/ladeoshodi/minesweeper/raw/main/assets/minesweeper.png",
      alt: "minesweeper",
    },
    description:
      "A web version of the classic Minesweeper game, test how quickly you can find all the mines in the field",
    links: {
      github: "https://github.com/ladeoshodi/minesweeper",
      live: "https://ladeoshodi.github.io/minesweeper/",
    },
    size: { xs: "auto", sm: 6, md: 8 },
  },
  {
    name: "Browser Calculator",
    summary: "Simple Calculator on the Browser",
    tags: [
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "JavaScript", icon: <JavascriptIcon /> },
    ],
    image: {
      imgUrl:
        "https://github.com/ladeoshodi/browser-calculator/raw/main/image.png",
      alt: "calculator",
    },
    description:
      "A simple web calculator for evaluating additions, subtractions, divisions, multiplications and percentages",
    links: {
      github: "https://github.com/ladeoshodi/browser-calculator",
      live: "https://ladeoshodi.github.io/browser-calculator/",
    },
    size: "auto",
  },
  {
    name: "Search-A-Word",
    summary: "Dictionary API",
    tags: [
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "JavaScript", icon: <JavascriptIcon /> },
      { name: "ReactJS", icon: <FontAwesomeIcon icon={faReact} /> },
    ],
    image: {
      imgUrl:
        "https://github.com/ladeoshodi/search-a-word/raw/main/src/assets/search-a-word.png",
      alt: "search a word",
    },
    description: "Search for any word using a free dictionary API",
    links: {
      github: "https://github.com/ladeoshodi/search-a-word",
      live: "https://search-a-word.netlify.app/",
    },
    size: "auto",
  },
  {
    name: "A Harry Potter Quiz Game",
    summary: "Quiz Game",
    tags: [
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "JavaScript", icon: <JavascriptIcon /> },
      { name: "ReactJS", icon: <FontAwesomeIcon icon={faReact} /> },
      { name: "Bulma CSS", icon: bulmaCSSIcon },
    ],
    image: {
      imgUrl: harryPotterGameImg,
      alt: "harry potter quiz game",
    },
    description: "An interactive timed online quiz game",
    links: {
      github: "https://github.com/ladeoshodi/harry-potter-quiz-game",
      live: "https://harry-potter-quiz-game.netlify.app",
    },
    size: "auto",
  },
];

// Styled components
const LinkWrapper = styled("div")({
  marginTop: "8px",
  "@media(max-width: 500px)": {
    display: "flex",
    flexDirection: "column",
  },
});

const ListItem = styled("li")({
  margin: "4px",
  fontWeight: "lighter",
  fontStyle: "italic",
  fontSize: "small",
});

const Projects = forwardRef(function Projects(prop, projectsRef) {
  return (
    <div ref={projectsRef}>
      <Typography
        component="h3"
        variant="h3"
        sx={{
          p: 2,
          "@media(max-width: 500px)": {
            textAlign: "center",
          },
        }}
      >
        <BusinessIcon sx={{ fontSize: "2.2rem", mr: 1 }} />
        Projects
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "16px",
            padding: "16px",
            "@media(max-width: 500px)": {
              flexDirection: "column",
            },
          }}
        >
          {projects.map((project, idx) => {
            return (
              <Paper
                key={idx}
                className="project-container"
                square={false}
                elevation={12}
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "10px",
                  flex: 1,
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <img
                    src={project.image.imgUrl}
                    alt={project.image.alt}
                    style={{ width: "70%" }}
                  ></img>
                </Box>
                <Box className="project-content">
                  <Typography>{project.name}</Typography>
                  <Typography sx={{ fontWeight: "lighter" }}>
                    {project.summary}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      listStyle: "none",
                      p: 0.5,
                      m: 0,
                    }}
                  >
                    {project.tags.map((tag, idx) => {
                      return (
                        <ListItem key={idx}>
                          <Chip
                            icon={tag.icon}
                            label={tag.name}
                            sx={{ p: 0.5 }}
                          />
                        </ListItem>
                      );
                    })}
                  </Box>
                  <Typography>{project.description}</Typography>
                  <LinkWrapper>
                    <Link
                      href={project.links.github}
                      color="#da0064"
                      target="_blank"
                      rel="noreferrer"
                    >
                      See it on Github{" "}
                      <GitHubIcon sx={{ fontSize: "1rem", mr: 1 }} />
                    </Link>
                    <Link
                      href={project.links.live}
                      color="#da0064"
                      target="_blank"
                      rel="noreferrer"
                    >
                      See it Live{" "}
                      <LanguageIcon sx={{ fontSize: "1rem", mr: 1 }} />
                    </Link>
                  </LinkWrapper>
                </Box>
              </Paper>
            );
          })}
        </Box>
        <Button
          href="https://github.com/ladeoshodi"
          rel="noreferrer"
          target="_blank"
          variant="contained"
          sx={{ backgroundColor: "#da0064", marginBottom: "16px" }}
        >
          See More on GitHub
        </Button>
      </Box>
    </div>
  );
});

export default Projects;
