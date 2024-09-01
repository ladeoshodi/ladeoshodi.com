import { Box, Avatar, Paper, Typography } from "@mui/material";

import ladeImg from "../assets/lade-oshodi.jpeg";

function Header() {
  return (
    <>
      <Box
        component="header"
        sx={{ display: "flex", gap: 8, alignItems: "center", padding: 3 }}
      >
        <Paper elevation={12} sx={{ borderRadius: 8, width: 0.5, height: 0.5 }}>
          <Avatar
            alt="Lade Oshodi"
            src={ladeImg}
            sx={{ width: 1, height: 1, borderRadius: 8 }}
          />
        </Paper>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: "transparent",
            backgroundClip: "text",
            backgroundImage: "linear-gradient(to right, #da0064, #261414)",
          }}
        >
          HI 👋🏾, I&apos;M LADE AND I LOVE BUILDING DIGITAL PRODUCTS
        </Typography>
      </Box>
    </>
  );
}

export default Header;
