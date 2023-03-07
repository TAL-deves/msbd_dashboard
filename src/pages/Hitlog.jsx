import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HitChartComponent from "../components/hitChartComponent/HitChartComponent";
import { useState, useEffect } from "react";
import { fetchData } from "../api/handleApiWithAxios";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ p: "3rem 0rem" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const Hitlog = () => {
  const [value, setValue] = useState(0);
  const [hitdata, setHitData] = useState("");
  const [userdata, setUserData] = useState("");
  const [ssldata, setSslData] = useState("");
  const [sslmontlydata, setSslMontlyData] = useState("");
  const [hiturl, setHitUrl] = useState("nthdayhitcheck");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getData(hiturl) {
      let hitdatas = await fetchData(hiturl);
      let userdatas = await fetchData("alluserdatas");
      let ssldatas = await fetchData("allpurchasedata");
      let sslmontlydatas = await fetchData("monthwisevalidpurchases");
      setHitData(hitdatas);
      setUserData(userdatas);
      setSslData(ssldatas);
      setSslMontlyData(sslmontlydatas);
    }

    getData(hiturl);
  }, [hiturl]);

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        variant="fullWidth"
        orientation="horizontal"
        aria-label="Hitlog tabs"
      >
        <Tab
          label="Today"
          {...a11yProps(0)}
          onClick={() => {
            setHitUrl("nthdayhitcheck");
          }}
        />
        <Tab
          label="Last 3 Days"
          {...a11yProps(1)}
          onClick={() => {
            setHitUrl("nthdayhitcheck?days=3");
          }}
        />
        <Tab
          label="Last 30 Days"
          {...a11yProps(2)}
          onClick={() => {
            setHitUrl("nthdayhitcheck?days=30");
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <HitChartComponent hitdata={hitdata} userdata={userdata} ssldata={ssldata} sslmontlydata={sslmontlydata} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HitChartComponent hitdata={hitdata} day={3} userdata={userdata} ssldata={ssldata} sslmontlydata={sslmontlydata} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HitChartComponent hitdata={hitdata} day={30} userdata={userdata} ssldata={ssldata} sslmontlydata={sslmontlydata} />
      </TabPanel>
    </>
  );
};

export default Hitlog;
