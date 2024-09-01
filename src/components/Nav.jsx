import { Box, Typography, styled } from "@mui/material";

function Nav() {
  const NavItem = styled(Typography)({
    "&:hover": {
      cursor: "pointer",
      color: "#da0064",
    },
  });

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
        <NavItem>Home</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Connect</NavItem>
      </Box>
    </>
  );
}

export default Nav;
