import { Stack } from "@mui/material";
import React from "react";
import GlobalStats from "./GlobalStats";
import Instructions from "./Instructions";

function GlobalPanel() {
    return (
        <Stack direction={{ xs: "column", md: "column" }} spacing={1} justifyContent="space-between">
            <GlobalStats/>
            <Instructions/>
        </Stack>
      );
}

export default GlobalPanel;
