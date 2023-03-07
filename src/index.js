import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#264653', //Deep green
    },
    secondary: {
      main: '#2A9D8F', //light green
    },
    warning: {
      main: '#E9C46A', //yellow
    },
    error: {
      main: '#E76F51', //red
    },
    white:{
      main: '#fff'
    },
    black:{
      main: '#000'
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
