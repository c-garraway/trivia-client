import { Box, Typography } from "@mui/material";
import React from "react";

function GlobalStats() {
    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1 }}>GLOBAL RANKING</Typography>
            <Box sx={{ padding: 1 }}>
                <Typography >1: Living Large [350]</Typography>
                <Typography >2: Lion King [250]</Typography>
                <Typography >3: Team A [200]</Typography>
                <Typography >4: Fireflies [150]</Typography>
                <Typography >5: Dragon's Nest [100]</Typography>
            </Box>

        </Box>
    );
}

export default GlobalStats;
