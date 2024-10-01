import { Box, Typography } from "@mui/material";
import { SiMui, SiReact } from "@icons-pack/react-simple-icons";

function CopyRight() {
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
        Built with <SiReact size={13} /> ReactJS and <SiMui size={13} />{" "}
        MaterialUI
      </Typography>
    </Box>
  );
}

export default CopyRight;
