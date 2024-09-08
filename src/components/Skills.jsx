import { Box, Typography, styled, Paper } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";
import { forwardRef } from "react";

const Skills = forwardRef(function Skills(prop, skillsRef) {
  const Card = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    fontSize: "1rem",
    padding: "8px",
    textAlign: "center",
    flexGrow: 1,
    width: "40%",
    color: "rgba(40, 40, 40, 0.87)",
    "@media(max-width: 500px)": {
      width: "100%",
    },
  });

  return (
    <div ref={skillsRef}>
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <Card>
          <ComputerIcon sx={{ fontSize: "2.2rem" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Web Development
          </Typography>
          <Typography>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Languages
            </Box>{" "}
            - HTML | CSS | Javascript | Python
          </Typography>
          <Typography>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Libraries and Frameworks
            </Box>{" "}
            - ReactJS | NodeJS | ExpressJS | TypeScript | Jest | Django |
            MaterialUI
          </Typography>
          <Typography>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Databases
            </Box>{" "}
            - SQL | PostgreSQL | MongoDB
          </Typography>
          <Typography>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Other
            </Box>{" "}
            - GIT | Github | RESTful APIs
          </Typography>
        </Card>
        <Card>
          <WorkIcon sx={{ fontSize: "2.2rem" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Business
          </Typography>
          <Typography>
            Product Management | Agile (Scrum & Kanban) | Sprint Planning |
            Requirement Gathering | Backlog Management | Roadmapping | Business
            Analysis | Stakeholder Management | Workshop Planning & Facilitation
            | User Research | User story writing | User Personas
          </Typography>
        </Card>
        <Card>
          <BuildIcon sx={{ fontSize: "2.2rem" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Tools
          </Typography>
          <Typography>
            Confluence | Jira | Miro | Azure Devops | Trello | Notion | Balsamiq
            | Pivotal Tracker | VSCode | Postman
          </Typography>
        </Card>
        <Card>
          <StarIcon sx={{ fontSize: "2.2rem" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            People
          </Typography>
          <Typography>
            Leadership | Mentorship | Organisation & Planning | Attentive to
            Details| Critical/Analytical Thinking | Adaptable
          </Typography>
        </Card>
      </Box>
    </div>
  );
});

export default Skills;
