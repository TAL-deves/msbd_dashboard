import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Appbar from "./components/appbar/Appbar";
import Footer from "./components/footer/Footer";
import Hitlog from "./pages/Hitlog";
import Userspage from "./pages/Userspage";
import Purchasepage from "./pages/Purchasepage";
import AddACourse from "./pages/AddACourse";

function App() {
  return (
    <Box>
      <Appbar />
      <Box
        sx={{
          marginTop: { xs: 0, md: "2rem" },
          height: "80vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Hitlog />} />
          <Route path="/hitlog" element={<Hitlog />} />
          <Route path="/users" element={<Userspage />} />
          <Route path="/purchase" element={<Purchasepage />} />
          <Route path="/add" element={<AddACourse />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
