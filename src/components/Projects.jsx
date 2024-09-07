import {
  Box,
  Typography,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Chip,
  Button,
  Grid2 as Grid,
} from "@mui/material";
import { useState } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { forwardRef } from "react";

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
    size: "auto",
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
      imgUrl:
        "https://private-user-images.githubusercontent.com/174737263/365114502-cf2ea972-3d20-475b-a82c-ff1e9c9c91b7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3MDgxNzcsIm5iZiI6MTcyNTcwNzg3NywicGF0aCI6Ii8xNzQ3MzcyNjMvMzY1MTE0NTAyLWNmMmVhOTcyLTNkMjAtNDc1Yi1hODJjLWZmMWU5YzljOTFiNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwN1QxMTE3NTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYjM1N2UyZWEwYzFmNWNmMmE3MWViNzM1NGQ4ZDM0MjI5MDE1MzllYmEwNDRjOGVmNzFmYTUzMTQzZTBlYjNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.8hpRismhV_dWaf6haq8Kk8COabQUJvRb82kgOf30MGg",
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
const ProjectContainer = styled(Accordion)({
  border: "1px solid rgba(0, 0, 0, 0.12)",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
});

const ProjectSummary = styled((props) => {
  return (
    <AccordionSummary
      expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  );
})({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": { marginLeft: "16px" },
  "& .MuiAccordionSummary-content.Mui-expanded": { marginLeft: "16px" },
});

const ProjectDetails = styled(AccordionDetails)({
  display: "flex",
  gap: "16px",
  padding: "16px",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  "@media(max-width: 500px)": {
    flexWrap: "wrap",
  },
});

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
  const [expanded, setExpanded] = useState("");

  function handleChange(panel) {
    return (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  }

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
        <Grid
          container
          spacing={2}
          sx={{
            padding: "16px",
            "@media(max-width: 500px)": {
              flexDirection: "column",
            },
          }}
        >
          {projects.map((project, idx) => {
            return (
              <Grid key={idx} size={project.size}>
                <Box
                  className="project-container"
                  sx={{
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    backgroundColor: "white",
                    display: "flex",
                    gap: "10px",
                    borderRadius: "5px",
                    padding: "10px",
                    "@media(max-width: 500px)": {
                      flexDirection: "column",
                    },
                  }}
                >
                  <img
                    src={project.image.imgUrl}
                    alt={project.image.alt}
                    style={{ width: "150px", height: "150px" }}
                  ></img>

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
                </Box>
              </Grid>
            );
          })}
        </Grid>
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
