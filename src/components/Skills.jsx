import { Typography, Stack, Chip } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { forwardRef } from "react";
import {
  SiBulma,
  SiConfluence,
  SiCss3,
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

const Skills = forwardRef(function Skills(prop, skillsRef) {
  const skills = [
    { name: "HTML", icon: <SiHtml5 size={15} /> },
    { name: "CSS", icon: <SiCss3 size={15} /> },
    { name: "Bulma CSS", icon: <SiBulma size={15} /> },
    { name: "Material UI", icon: <SiMui size={15} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={15} /> },
    { name: "JavaScript", icon: <SiJavascript size={15} /> },
    { name: "ReactJS", icon: <SiReact size={15} /> },
    { name: "TypeScript", icon: <SiTypescript size={15} /> },
    { name: "Node", icon: <SiNodedotjs size={15} /> },
    { name: "ExpressJS", icon: <SiExpress size={15} /> },
    { name: "Jest", icon: <SiJest size={15} /> },
    { name: "Python", icon: <SiPython size={15} /> },
    { name: "Django", icon: <SiDjango size={15} /> },
    { name: "MongoDB", icon: <SiMongodb size={15} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={15} /> },
    { name: "Git", icon: <SiGit size={15} /> },
    { name: "GitHub", icon: <SiGithub size={15} /> },
    { name: "Postman", icon: <SiPostman size={15} /> },
    { name: "Confluence", icon: <SiConfluence size={15} /> },
    { name: "Jira", icon: <SiJira size={15} /> },
    { name: "Agile", icon: <ViewKanbanIcon sx={{ width: 20 }} /> },
  ];

  return (
    <div className="skills-section" ref={skillsRef}>
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
        <ConstructionIcon sx={{ fontSize: "2.2rem", mr: 1 }} />
        Skills
      </Typography>
      <Typography sx={{ fontWeight: 200, mb: 2, px: 2 }}>
        Here are the key skills, languages and frameworks I work with and will
        be adding more as I learn:
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ p: 2, justifyContent: "center", flexWrap: "wrap", gap: 1 }}
      >
        {skills.map((skill, idx) => {
          return (
            <Chip
              key={idx}
              icon={skill.icon}
              label={skill.name}
              color="secondary"
              sx={{ p: 2.5 }}
              variant="outlined"
            />
          );
        })}
      </Stack>
    </div>
  );
});

export default Skills;
