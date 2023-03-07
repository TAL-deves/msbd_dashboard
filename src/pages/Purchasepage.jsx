import React from "react";
import { useState, useEffect } from "react";
import TableData from "../components/muiTable/TableData";
import purchasedata from "../data/purchaceData.json";
import { paymentColumns } from "../data/columnData";
import { Box, Typography } from "@mui/material";
import { fetchData } from "../api/handleApiWithAxios";
import { TbCurrencyTaka } from "react-icons/tb";

export function TableDataComponent(props) {
  const { data } = props;

  return (
    <Box
      sx={{
        p: "2rem 0",
      }}
    >
      <Typography
        align="center"
        variant="h3"
        sx={{
          textTransform: "uppercase",
          color: "primary.main",
          p: ".8rem 0",
        }}
      >
        {data.name}
      </Typography>
      <TableData data={data.data} columns={paymentColumns} />
    </Box>
  );
}

const Purchasepage = () => {
  const [purchasedDetailsData, setPurchasedDetailsData] = useState("");
  const [purchasedDetailsData2, setPurchasedDetailsData2] = useState("");
  const [hiturl2, setHitUrl2] = useState("allpurchasedata2");
  const [hiturl, setHitUrl] = useState("allpurchasedata");

  useEffect(() => {
    async function getData() {
      let purchasedDetailsDatas = await fetchData(hiturl2);
      let purchasedDetailsDatass = await fetchData(hiturl);

      console.log("purchasedDetailsDatas ---- ", purchasedDetailsDatass.data.validPurchase.data.totalEarningFromSSL);

      setPurchasedDetailsData2(purchasedDetailsDatass);
      setPurchasedDetailsData(purchasedDetailsDatas);
    }

    getData();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "warning.main",
          borderRadius: "10px",
          width: "400px",
          height: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute", // Position the box absolutely
          left: "50%", // Move the box 50% from the left edge of its container
          transform: "translateX(-50%)", // Move the box back 50% of its own width
          mb: "2rem",
        }}
      >
        <Typography variant="h5" color="black.main">
          Total amount from SSL: {purchasedDetailsData2?.data?.validPurchase?.data?.totalEarningFromSSL}
        </Typography>
        <TbCurrencyTaka
          style={{
            fontSize: "1.5rem",
          }}
        />
      </Box>
      <Box>
        {purchasedDetailsData
          ? purchasedDetailsData.map((d, index) => {
              return <TableDataComponent key={d.name} data={d} index={index} />;
            })
          : ""}
      </Box>
    </Box>
  );
};

export default Purchasepage;
