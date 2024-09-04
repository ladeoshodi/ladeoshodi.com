import { Box, Typography, styled } from "@mui/material";
import { Link as AnchorLink } from "react-router-dom";

function Nav({ skillsRef, projectsRef, footerRef }) {
  const NavItem = styled(Typography)({
    "&:hover": {
      cursor: "pointer",
      color: "#da0064",
    },
  });

  function handleClick(pageRef) {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          textAlign: "center",
          p: 1,
          marginBottom: 1,
          backgroundColor: "white",
        }}
      >
        <NavItem>
          <AnchorLink
            to="/about-me"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            About Me
          </AnchorLink>
        </NavItem>
        <NavItem onClick={() => handleClick(skillsRef)}>Skills</NavItem>
        <NavItem onClick={() => handleClick(projectsRef)}>Projects</NavItem>
        <NavItem onClick={() => handleClick(footerRef)}>Connect</NavItem>
      </Box>
    </>
  );
}

export default Nav;
