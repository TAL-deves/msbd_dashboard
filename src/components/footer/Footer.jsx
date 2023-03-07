import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Footer = () => {

  const footerBackground = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    bgcolor: "warning.main",
    py: 2,
    color: "primary.main"
  };


  return (
    <Box sx={footerBackground}>
      <Typography>Designed and created by MSR</Typography>
    </Box>
  );
};

export default Footer;
