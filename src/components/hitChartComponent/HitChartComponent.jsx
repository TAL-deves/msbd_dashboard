import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HitChart from "../hitChart/HitChart";

const HitChartComponent = (props) => {

  const { hitdata, day, userdata, ssldata, sslmontlydata } = props;

  console.log(sslmontlydata);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" mb={5} align="center">
        HITMAP{" "}
        {hitdata.day?
            <Typography inline variant="h5" sx={{
                color:"secondary.main"
            }}>From {new Date(Date.now() - day * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
              } To {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            :
            <Typography inline={true} variant="h5" sx={{
                color:"secondary.main"
            }}>{new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
        }
        
      </Typography>
      <HitChart data={hitdata} />
      <Typography mt={3} variant="h5" align="center">USER REGISTRATION HITMAP</Typography>
      <HitChart data={userdata} />
      <Typography mt={3} variant="h5" align="center">SSL PAYMENT HITMAP</Typography>
      <HitChart data={ssldata.hitmap} />
      <Typography mt={3} variant="h5" align="center">MONTHWISE SELL HITMAP (SSL ONLY)</Typography>
      <HitChart data={sslmontlydata} />
    </Box>
  );
};

export default HitChartComponent;
