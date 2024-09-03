import { Typography, Breadcrumbs } from "@mui/material";
import { Link as AnchorLink } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
        <AnchorLink to="/" style={{ underline: "hover", color: "inherit" }}>
          Home
        </AnchorLink>
        <Typography sx={{ color: "text.primary" }}>About Me</Typography>
      </Breadcrumbs>
      <h1>Hi This page is about me</h1>
    </>
  );
}

export default AboutMe;
