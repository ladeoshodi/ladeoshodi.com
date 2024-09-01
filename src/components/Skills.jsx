import { Box, Typography, Icon, styled, Paper } from "@mui/material";

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
  "@media(max-width: 500px)": {
    width: "100%",
  },
});

function Skills() {
  return (
    <>
      <Typography
        component="h3"
        variant="h3"
        sx={{
          p: 3,
          "@media(max-width: 500px)": {
            textAlign: "center",
          },
        }}
      >
        <Icon sx={{ fontSize: "2.2rem", mr: 1 }}>construction</Icon>
        Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Card>
          <Icon sx={{ fontSize: "2.2rem" }}>computer</Icon>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Web Development
          </Typography>
          <Typography>
            <strong>Languages</strong> - HTML | CSS | Javascript | Python
          </Typography>
          <Typography>
            <strong>Libraries and Frameworks</strong> - ReactJS | NodeJS |
            ExpressJS | Jest | Django | MaterialUI
          </Typography>
          <Typography>
            <strong>Databases</strong> - SQL | PostgreSQL | MongoDB
          </Typography>
          <Typography>
            <strong>Other</strong> - GIT | Github | RESTful APIs
          </Typography>
        </Card>
        <Card>
          <Icon sx={{ fontSize: "2.2rem" }}>work</Icon>
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
          <Icon sx={{ fontSize: "2.2rem" }}>build</Icon>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Tools
          </Typography>
          <Typography>
            Confluence | Jira | Miro | Azure Devops | Trello | Notion | Balsamiq
            | Pivotal Tracker | VSCode | Postman
          </Typography>
        </Card>
        <Card>
          <Icon sx={{ fontSize: "2.2rem" }}>star</Icon>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            People
          </Typography>
          <Typography>
            Leadership | Mentorship | Organisation & Planning | Attentive to
            Details| Critical/Analytical Thinking | Adaptable
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default Skills;
