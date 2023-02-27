import { Box, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box sx={{border: '1px solid black', padding: 1, mt: 1, height:'calc(100svh - 100px)'}}>
      <Typography sx={{ padding: 1 }}>HOME PAGE</Typography>
    </Box>
  );
}

export default Home;
