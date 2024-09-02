import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const materialUISvg = (
  <svg
    fill="#ffffff"
    width="13px"
    height="13px"
    viewBox="-2.4 -2.4 28.80 28.80"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <title>Material-UI icon</title>
      <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path>
    </g>
  </svg>
);

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#414bb2",
        color: "white",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Typography>
        Copyright &copy; Lade Oshodi {new Date().getFullYear()}
      </Typography>
      <Typography sx={{ fontSize: "small" }}>
        Built with <FontAwesomeIcon icon={faReact} /> ReactJS and{" "}
        {materialUISvg} MaterialUI
      </Typography>
    </Box>
  );
}

export default Footer;
