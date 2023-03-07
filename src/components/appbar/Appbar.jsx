import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import { HiTrendingUp, HiUserGroup } from "react-icons/hi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {
  styledFabDesign,
  redWhite,
  icon,
  iconSize,
  iconStyle,
  removeTextDecoration,
  tooltipStyle,
} from "./appbarStyle";

export default function Appbar() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: { xs: "0", md: "2rem" } }}>
      <AppBar
        value={value}
        onChange={handleChange}
        position="fixed"
        sx={{
          p: "1rem",
          top: { xs: "auto", md: 0 },
          bottom: { xs: 0, md: "auto" },
        }}
      >
        <BottomNavigation value={value} onChange={handleChange} sx={redWhite}>
          <BottomNavigationAction
            icon={
              <Link to="/hitlog" style={removeTextDecoration}>
                <Tooltip title="Hit log" sx={tooltipStyle}>
                  <Box sx={iconStyle}>
                    <HiTrendingUp sx={icon} size={iconSize} />
                    <Typography sx={{ display: { md: "none" } }}>
                      Hitmap
                    </Typography>
                  </Box>
                </Tooltip>
              </Link>
            }
          />
          <BottomNavigationAction
            icon={
              <Link to="/purchase" style={removeTextDecoration}>
                <Tooltip title="Transactions" sx={tooltipStyle}>
                  <Box sx={iconStyle}>
                    <FaMoneyBillAlt sx={icon} size={iconSize} />
                    <Typography sx={{ display: { md: "none" } }}>
                      Transactions
                    </Typography>
                  </Box>
                </Tooltip>
              </Link>
            }
          />
          <BottomNavigationAction
            value={value}
            onChange={handleChange}
            sx={redWhite}
            icon={
              <Link to="/users" style={removeTextDecoration}>
                <Tooltip title="Users" sx={tooltipStyle}>
                  <Box sx={iconStyle}>
                    <HiUserGroup sx={icon} size={iconSize} />
                    <Typography sx={{ display: { md: "none" } }}>
                      Purchase
                    </Typography>
                  </Box>
                </Tooltip>
              </Link>
            }
          />
          <BottomNavigationAction
            value={value}
            onChange={handleChange}
            sx={redWhite}
            icon={
              <Link to="/search" style={removeTextDecoration}>
                <Tooltip title="Search" sx={tooltipStyle}>
                  <Box sx={iconStyle}>
                    <BsSearch sx={icon} size={iconSize} />
                    <Typography sx={{ display: { md: "none" } }}>
                      Search
                    </Typography>
                  </Box>
                </Tooltip>
              </Link>
            }
          />
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
