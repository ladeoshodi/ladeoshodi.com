import { Box, Typography } from "@mui/material";

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
          marginBottom: 1,
          backgroundColor: "white",
        }}
      >
        <Typography
          sx={[
            { minWidth: 100 },
            {
              "&:hover": {
                cursor: "pointer",
                color: "#da0064",
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
                color: "#da0064",
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
                color: "#da0064",
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
                color: "#da0064",
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
