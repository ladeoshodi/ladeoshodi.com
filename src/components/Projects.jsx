import {
  Box,
  Typography,
  Icon,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import { useState } from "react";

// Projects
const projects = [
  {
    name: "Minesweeper",
    summary: "Grid based browser game",
    tags: "HTML, CSS, JS",
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
    tags: "HTML, CSS, JS",
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
    tags: "ReactJS",
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
      expandIcon={<Icon sx={{ fontSize: "0.9rem" }}>arrow_forward_ios</Icon>}
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

function Projects() {
  const [expanded, setExpanded] = useState("panel1");

  function handleChange(panel) {
    return (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  }

  return (
    <>
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
        <Icon sx={{ fontSize: "2.2rem", mr: 1 }}>business</Icon>
        Projects
      </Typography>
      <div style={{ padding: "16px" }}>
        {projects.map((project, idx) => {
          return (
            <ProjectContainer
              key={project.name}
              expanded={expanded === `panel${idx}`}
              onChange={handleChange(`panel${idx}`)}
            >
              <ProjectSummary aria-controls="panel1-content" id="panel1-header">
                <Box>
                  <Typography>{project.name}</Typography>
                  <Typography sx={{ fontWeight: "lighter" }}>
                    {project.summary}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "lighter",
                      fontStyle: "italic",
                      fontSize: "small",
                    }}
                  >
                    Technologies: {project.tags}
                  </Typography>
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
                      <Icon sx={{ fontSize: "1rem", mr: 1 }}>code</Icon>
                    </Link>
                    <Link
                      href={project.links.live}
                      color="#da0064"
                      target="_blank"
                      rel="noreferrer"
                    >
                      See it Live{" "}
                      <Icon sx={{ fontSize: "1rem" }}>language</Icon>
                    </Link>
                  </LinkWrapper>
                </Box>
              </ProjectDetails>
            </ProjectContainer>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
