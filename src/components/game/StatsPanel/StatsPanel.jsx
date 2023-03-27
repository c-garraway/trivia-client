import React from "react";
import PersonalStats from "./PersonalStats";
import TeamStats from "./TeamStats";
import GlobalStats from "./GlobalStats";
import { Stack } from "@mui/material";

function StatsPanel() {
    return (
        <Stack 
            direction={{ xs: "column", md: "column" }} 
            sx={{/* border: '1px solid black', */ justifyContent: "flex-start", alignItems: "center", padding: 1}} 
            spacing={1} 
            flex={2.5}>
            <PersonalStats/>
            <TeamStats/>
            <GlobalStats/>
        </Stack>
      );
}

export default StatsPanel;
