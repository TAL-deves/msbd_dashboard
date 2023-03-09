import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { MdError } from "react-icons/md";

const HitChart = (props) => {
  const boxStyle = {
    color: "error.main",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };
  const fontSize = {
    fontSize: "1.5rem",
  };
  const iconSize = "8rem";

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#000" textAnchor="middle" dy={-6}>{`${value}`}</text>;
  };
  

  return (
    <Box>
      {props.data ? (
        <Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <BarChart
              width={1200}
              height={400}
              data={props.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              s
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={Object.keys(props.data[0])[0]} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={Object.keys(props.data[0])[1]} fill="#264653" label={renderCustomBarLabel} />
              {Object.keys(props.data[0])[2] ? (
                <Bar dataKey={Object.keys(props.data[0])[2]} fill="#2A9D8F" label={renderCustomBarLabel} />
              ) : (
                ""
              )}
            </BarChart>
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <BarChart
              width={400}
              height={400}
              data={props.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              s
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={Object.keys(props.data[0])[0]} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={Object.keys(props.data[0])[1]} fill="#264653" />
              <Bar dataKey={Object.keys(props.data[0])[2]} fill="#2A9D8F" />
            </BarChart>
          </Box>
        </Box>
      ) : (
        <Box sx={boxStyle}>
          <MdError size={iconSize} />
          <Typography sx={fontSize}>No data availabe</Typography>
        </Box>
      )}
    </Box>
  );
};

export default HitChart;
