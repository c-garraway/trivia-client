import { Stack } from "@mui/material";
import React from "react";
import GlobalStats from "./GlobalStats";
import Instructions from "./Instructions";

function GlobalPanel() {
    return (
        <Stack 
            direction={{ xs: "column", md: "column" }} 
            sx={{border: '1px solid black', justifyContent: "flex-start", alignItems: "center", padding: 1}} 
            spacing={1} 
            flex={2.5}>
            <GlobalStats/>
            <Instructions/>
        </Stack>
      );
}
            
export default GlobalPanel;
