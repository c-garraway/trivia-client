import { Box, Typography } from "@mui/material";
import React from "react";

function PersonalStats() {
    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1}}>PERSONAL STATS</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                <Typography sx={{ padding: 1 }}>Daily Points: 33</Typography>
                <Typography sx={{ padding: 1}}>7 Day Rolling Points:  150</Typography>
            </Box>
        </Box>
    );
}

export default PersonalStats;
