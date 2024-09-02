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

// Projects
const projects = [
  {
    name: "Minesweeper",
    summary: "Grid based browser game",
    tags: ["HTML", "CSS", "JavaScript"],
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
  },
  {
    name: "Browser Calculator",
    summary: "Simple Calculator on the Browser",
    tags: ["HTML", "CSS", "JavaScript"],
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
  },
  {
    name: "Search-A-Word",
    summary: "Dictionary API",
    tags: ["HTML", "CSS", "JavaScript", "ReactJS"],
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
        <div style={{ padding: "16px" }}>
          {projects.map((project, idx) => {
            return (
              <ProjectContainer
                key={project.name}
                expanded={expanded === `panel${idx}`}
                onChange={handleChange(`panel${idx}`)}
              >
                <ProjectSummary
                  aria-controls={`panel${idx}-content`}
                  id={`panel${idx}-header`}
                >
                  <Box>
                    <Typography>{project.name}</Typography>
                    <Typography sx={{ fontWeight: "lighter" }}>
                      {project.summary}
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        p: 0.5,
                        m: 0,
                      }}
                    >
                      {project.tags.map((tag) => {
                        let icon;

                        if (tag === "HTML") {
                          icon = <HtmlIcon />;
                        } else if (tag === "CSS") {
                          icon = <CssIcon />;
                        } else if (tag === "JavaScript") {
                          icon = <JavascriptIcon />;
                        } else if (tag === "ReactJS") {
                          icon = <FontAwesomeIcon icon={faReact} />;
                        }
                        return (
                          <ListItem key={tag}>
                            <Chip icon={icon} label={tag} sx={{ p: 1 }} />
                          </ListItem>
                        );
                      })}
                    </Box>
                  </Box>
                </ProjectSummary>
                <ProjectDetails>
                  <img
                    src={project.image.imgUrl}
                    alt={project.image.alt}
                    style={{ width: "30%" }}
                  ></img>
                  <Box>
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
                </ProjectDetails>
              </ProjectContainer>
            );
          })}
        </div>
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
