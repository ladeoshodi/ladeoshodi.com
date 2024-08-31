import { Box, Avatar, Typography } from "@mui/material";

import ladeLogo from "../assets/lade-logo.png";

function Nav() {
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
        }}
      >
        <Avatar src={ladeLogo} alt="lade logo"></Avatar>
        <Typography
          sx={[
            { minWidth: 100 },
            {
              "&:hover": {
                cursor: "pointer",
                color: "#652cb3",
              },
            },
          ]}
        >
          Home
        </Typography>
        <Typography
          sx={[
            { minWidth: 100 },
            {
              "&:hover": {
                cursor: "pointer",
                color: "#652cb3",
              },
            },
          ]}
        >
          Skills
        </Typography>
        <Typography
          sx={[
            { minWidth: 100 },
            {
              "&:hover": {
                cursor: "pointer",
                color: "#652cb3",
              },
            },
          ]}
        >
          Projects
        </Typography>
        <Typography
          sx={[
            { minWidth: 100 },
            {
              "&:hover": {
                cursor: "pointer",
                color: "#652cb3",
              },
            },
          ]}
        >
          Connect
        </Typography>
      </Box>
    </>
  );
}

export default Nav;
