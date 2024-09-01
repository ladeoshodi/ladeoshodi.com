import {
  Typography,
  Icon,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import { useState } from "react";

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
        <ProjectContainer
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ProjectSummary aria-controls="panel1-content" id="panel1-header">
            <div>
              <Typography>Minesweeper</Typography>
              <Typography sx={{ fontWeight: "lighter" }}>
                Grid based browser game
              </Typography>
            </div>
          </ProjectSummary>
          <ProjectDetails>
            <img
              src="https://github.com/ladeoshodi/minesweeper/raw/main/assets/minesweeper.png"
              alt="minesweeper"
              style={{ width: "30%" }}
            ></img>
            <Typography>
              Minesweeper is a game where mines are hidden in a grid of squares.
              Each square within the grid is either a safe square safe square ,
              a blank square blank square or a mine Minesweeper Logo. Safe
              squares have numbers telling you how many mines touch the square.
              You can use the number clues to solve the game by opening all of
              the safe squares. If you click on a mine you lose the game!{" "}
              <Typography>
                <strong>
                  To win, you must correctly flag flagged square all the mines
                  in the grid!
                </strong>
              </Typography>
              <LinkWrapper>
                <Link
                  href="https://github.com/ladeoshodi/minesweeper"
                  color="#da0064"
                >
                  See it on Github{" "}
                  <Icon sx={{ fontSize: "1rem", mr: 1 }}>code</Icon>
                </Link>
                <Link
                  href="https://ladeoshodi.github.io/minesweeper/"
                  color="#da0064"
                >
                  See it Live <Icon sx={{ fontSize: "1rem" }}>language</Icon>
                </Link>
              </LinkWrapper>
            </Typography>
          </ProjectDetails>
        </ProjectContainer>
        <ProjectContainer
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ProjectSummary aria-controls="panel2-content" id="panel2-header">
            <Typography>Accordion 2</Typography>
          </ProjectSummary>
          <ProjectDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ProjectDetails>
        </ProjectContainer>
      </div>
    </>
  );
}

export default Projects;
