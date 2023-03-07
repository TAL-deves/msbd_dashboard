const styledFabDesign = {
  backgroundColor: "error.main",
  "&:hover": {
    backgroundColor: "secondary.main",
  },
};

const redWhite = {
  bgcolor: "primary.main",
};

const icon = {
  color: "error.main",
  fontSize: "1.8rem",
};

const iconSize = "3rem";

const iconStyle = {
  color: "warning.main",
  transition: ".1s ease-in-out",
  "&:hover": {
    bgcolor: "warning.main",
    color: "primary.main",
    padding: "1rem",
    borderRadius: "15px",
  },
};

const removeTextDecoration = {
  textDecoration: "none",
};

const tooltipStyle = {
  display: { xs: "none", sm: "none", md: "block" },
};

export {
  styledFabDesign,
  redWhite,
  icon,
  iconSize,
  iconStyle,
  removeTextDecoration,
  tooltipStyle,
};
