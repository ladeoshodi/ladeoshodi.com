import {
  Box,
  Typography,
  styled,
  Link,
  Chip,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
    name: "Party Stack",
    description: "An online repository of indoor party games",
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
    links: {
      github: "https://github.com/ladeoshodi/party-stack-fe",
      live: "https://party-stack.netlify.app",
    },
  },
  {
    name: "Minesweeper",
    description:
      "A web version of the classic Minesweeper game, test how quickly you can find all the mines in the field",
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

    links: {
      github: "https://github.com/ladeoshodi/minesweeper",
      live: "https://ladeoshodi.github.io/minesweeper/",
    },
  },
  {
    name: "Browser Calculator",
    description:
      "A simple web calculator for evaluating additions, subtractions, divisions, multiplications and percentages",
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

    links: {
      github: "https://github.com/ladeoshodi/browser-calculator",
      live: "https://ladeoshodi.github.io/browser-calculator/",
    },
  },
  {
    name: "Search-A-Word",
    description: "Search for any word using a free dictionary API",
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

    links: {
      github: "https://github.com/ladeoshodi/search-a-word",
      live: "https://search-a-word.netlify.app/",
    },
  },
  {
    name: "A Harry Potter Quiz Game",
    description: "An interactive timed online quiz game",
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

    links: {
      github: "https://github.com/ladeoshodi/harry-potter-quiz-game",
      live: "https://harry-potter-quiz-game.netlify.app",
    },
  },
];

// Styled components

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
      <Typography sx={{ fontWeight: 200, mb: 2, px: 2 }}>
        Here are a few projects I&apos;ve worked on in my spare time
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
              <Card key={idx} sx={{ maxWidth: 345 }} elevation={12}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image.imgUrl}
                  title={project.image.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
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
                </CardContent>
                <CardActions>
                  <Link
                    href={project.links.github}
                    underline="hover"
                    target="_blank"
                    rel="noreferrer"
                    color="#da0064"
                  >
                    See it on Github{" "}
                    <GitHubIcon sx={{ fontSize: "1rem", mr: 1 }} />
                  </Link>
                  <Link
                    href={project.links.live}
                    underline="hover"
                    target="_blank"
                    rel="noreferrer"
                    color="#da0064"
                  >
                    See it Live{" "}
                    <LanguageIcon sx={{ fontSize: "1rem", mr: 1 }} />
                  </Link>
                </CardActions>
              </Card>
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
