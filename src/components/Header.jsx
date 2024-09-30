import { Box, Avatar, Paper, Typography } from "@mui/material";

import ladeImg from "../assets/lade-oshodi.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Box
        component="header"
        sx={{ display: "flex", gap: 8, alignItems: "center", padding: 3 }}
      >
        <Paper
          elevation={12}
          sx={{
            borderRadius: 8,
            width: 0.5,
            height: 0.5,
            display: { xs: "none", sm: "block" },
          }}
        >
          <Avatar
            alt="Lade Oshodi"
            src={ladeImg}
            sx={{ width: 1, height: 1, borderRadius: 8 }}
          />
        </Paper>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              color: "transparent",
              backgroundClip: "text",
              backgroundImage: "linear-gradient(to right, #da0064, #261414)",
              mb: 1,
            }}
          >
            HI 👋🏾, I&apos;M LADE
          </Typography>
          <Typography component="h5" variant="h5">
            I am a{" "}
            <Box
              component="span"
              sx={{ color: "#da0064", fontStyle: "italic" }}
            >
              Full-Stack Developer
            </Box>{" "}
            with a background in product management
          </Typography>
          <Typography component="h5" variant="h5" sx={{ pt: 2 }}>
            Read my{" "}
            <Box component="span" sx={{ color: "#da0064" }}>
              <Link to="/about-me">STORY</Link>
            </Box>{" "}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
