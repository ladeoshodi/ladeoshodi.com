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
import { forwardRef } from "react";
import {
  SiTypescript,
  SiExpress,
  SiJest,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBulma,
  SiJavascript,
} from "@icons-pack/react-simple-icons";

import harryPotterGameImg from "../assets/harry-potter-game.png";

// Projects
const projects = [
  {
    name: "Minesweeper",
    summary: "Grid based browser game",
    tags: [
      { name: "HTML", icon: <SiHtml5 size={13} /> },
      { name: "CSS", icon: <SiCss3 size={13} /> },
      { name: "JavaScript", icon: <SiJavascript size={13} /> },
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
      { name: "HTML", icon: <SiHtml5 size={13} /> },
      { name: "CSS", icon: <SiCss3 size={13} /> },
      { name: "JavaScript", icon: <SiJavascript size={13} /> },
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
      { name: "HTML", icon: <SiHtml5 size={13} /> },
      { name: "CSS", icon: <SiCss3 size={13} /> },
      { name: "JavaScript", icon: <SiJavascript size={13} /> },
      { name: "ReactJS", icon: <SiReact size={13} /> },
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
      { name: "HTML", icon: <SiHtml5 size={13} /> },
      { name: "CSS", icon: <SiCss3 size={13} /> },
      { name: "JavaScript", icon: <SiJavascript size={13} /> },
      { name: "ReactJS", icon: <SiReact size={13} /> },
      { name: "Bulma CSS", icon: <SiBulma size={13} /> },
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
  {
    name: "Party Stack",
    summary: "Your party companion",
    tags: [
      { name: "HTML", icon: <SiHtml5 size={13} /> },
      { name: "CSS", icon: <SiCss3 size={13} /> },
      { name: "Bulma CSS", icon: <SiBulma size={13} /> },
      { name: "JavaScript", icon: <SiJavascript size={13} /> },
      { name: "ReactJS", icon: <SiReact size={13} /> },
      { name: "TypeScript", icon: <SiTypescript size={13} /> },
      { name: "ExpressJS", icon: <SiExpress size={13} /> },
      { name: "Jest", icon: <SiJest size={13} /> },
      { name: "MongoDB", icon: <SiMongodb size={13} /> },
    ],
    image: {
      imgUrl:
        "https://github.com/ladeoshodi/party-stack-fe/raw/main/readme-assets/home-page.png",
      alt: "party stack",
    },
    description: "An online repository of indoor party games",
    links: {
      "github (FE)": "https://github.com/ladeoshodi/party-stack-fe",
      "github (BE)": "https://github.com/ladeoshodi/party-stack-be",
      live: "https://party-stack.netlify.app",
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
