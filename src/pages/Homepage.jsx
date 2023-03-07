import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Homepage = () => {

const boxStyle = {
  height:"100px",
  width:"100px",
  bgcolor: "error.main",
  m:"2rem",
  textAlign:"center",
  display:"flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItem: "center",
  color: "primary.main",
  transition:".3s ease",
  "&:hover":{
    bgcolor: "primary.main",
    color: "error.main",
    borderRadius:"20px"
  }
}


  return (
    <Box>
      <Box sx={boxStyle}>
        <Typography>Hello</Typography>
      </Box>
    </Box>
  )
}

export default Homepage