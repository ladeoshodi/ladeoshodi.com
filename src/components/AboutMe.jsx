import Footer from "./Footer";
import { Typography, Breadcrumbs, Box, styled } from "@mui/material";
import { Link as AnchorLink } from "react-router-dom";

import ladeBackground from "../assets/lade-about.jpeg";
import Interests from "./Interests";
import AboutMeSummary from "./AboutMeSummary";
import CareerTimeline from "./CareerTimeline";

export const Paragraph = styled(Typography)({
  marginBottom: "8px",
});

function AboutMe() {
  return (
    <div className="body-content">
      <Breadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
        <AnchorLink to="/" style={{ color: "inherit" }}>
          Home
        </AnchorLink>
        <Typography sx={{ color: "text.primary" }}>About Me</Typography>
      </Breadcrumbs>
      <Box sx={{ p: 2 }}>
        <Typography component="h1" variant="h1">
          Lade Oshodi
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          sx={{ fontWeight: 300, mb: 2, color: "#da0064" }}
        >
          Software Engineering | Product Management | User Experience
        </Typography>
        <AboutMeSummary />
        <Box
          sx={{
            background: `no-repeat url(${ladeBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
            margin: "16px -16px 40px -16px",
            "@media (min-width:768px)": {
              height: "400px",
            },
          }}
        ></Box>
        <CareerTimeline />
        <Interests />
      </Box>
      <Footer />
    </div>
  );
}

export default AboutMe;
