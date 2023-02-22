import React from "react";
import PersonalStats from "./PersonalStats";
import FamilyStats from "./FamilyStats";
import { Stack } from "@mui/material";

function PersonalPanel() {
    return (
        <Stack direction={{ xs: "column", md: "column" }} spacing={1} justifyContent="space-between">
            <PersonalStats/>
            <FamilyStats/>
        </Stack>
      );
}

export default PersonalPanel;
