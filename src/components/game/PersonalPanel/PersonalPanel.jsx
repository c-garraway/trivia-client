import React from "react";
import PersonalStats from "./PersonalStats";
import FamilyStats from "./FamilyStats";
import { Stack } from "@mui/material";

function PersonalPanel() {
    return (
        <Stack 
            direction={{ xs: "column", md: "column" }} 
            sx={{border: '1px solid black', justifyContent: "flex-start", alignItems: "center", padding: 1}} 
            spacing={1} 
            flex={2.5}>
            <PersonalStats/>
            <FamilyStats/>
        </Stack>
      );
}

export default PersonalPanel;
