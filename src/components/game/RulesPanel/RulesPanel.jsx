import { Stack } from "@mui/material";
import React from "react";
import Instructions from "./Instructions";

function RulesPanel() {
    return (
        <Stack 
            direction={{ xs: "column", md: "column" }} 
            sx={{border: '1px solid black', justifyContent: "flex-start", alignItems: "center", padding: 1}} 
            spacing={1} 
            flex={2.5}>
            <Instructions/>
        </Stack>
      );
}
            
export default RulesPanel;
