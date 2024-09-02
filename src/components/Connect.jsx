import { Box, Typography, ButtonGroup, styled } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ConnectIcons = styled("a")({
  color: "white",
  ".MuiSvgIcon-root": {
    fontSize: "2.3rem",
  },
});

function Connect() {
  return (
    <Box
      sx={{
        backgroundColor: "#da0064",
        padding: "32px",
        color: "white",
        display: "flex",
        gap: "24px",
      }}
    >
      <Box>
        <Typography sx={{ marginBottom: "16px" }}>
          let&apos;s connect
        </Typography>
        <Typography>
          If you are building tech-focused products to help professionals reach
          their potential, let&apos;s discuss how my expertise can benefit your
          organisation.
        </Typography>
      </Box>
      <ButtonGroup
        variant="text"
        aria-label="Basic button group"
        sx={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <ConnectIcons
          href="mailto:pincers-06-icing@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          <MailOutlineIcon />
        </ConnectIcons>
        <ConnectIcons
          href="https://github.com/ladeoshodi"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </ConnectIcons>
        <ConnectIcons
          href="https://www.linkedin.com/in/olufunmiladeoshodi/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </ConnectIcons>
      </ButtonGroup>
    </Box>
  );
}

export default Connect;
