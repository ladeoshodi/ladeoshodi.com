import { Box, Typography, styled } from "@mui/material";

function Nav({ headerRef, skillsRef, projectsRef, connectRef }) {
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
        <NavItem onClick={() => handleClick(headerRef)}>Home</NavItem>
        <NavItem onClick={() => handleClick(skillsRef)}>Skills</NavItem>
        <NavItem onClick={() => handleClick(projectsRef)}>Projects</NavItem>
        <NavItem onClick={() => handleClick(connectRef)}>Connect</NavItem>
      </Box>
    </>
  );
}

export default Nav;
