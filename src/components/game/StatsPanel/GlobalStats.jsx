import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllTeamRanks } from "../../../features/pointsData/pointsDataSlice";
import GlobalRankingTable from "../GamePanel/Status/GlobalRankingTable"

function GlobalStats() {
    const teamRanks = useSelector(selectAllTeamRanks)

    return (
        <Box sx={{ border: '1px solid black',borderRadius: '5px', width: '100%' }}>
            <Typography sx={{ padding: 1 }}>GLOBAL RANKING</Typography>
            <Box sx={{border: '1px solid black', borderRadius: '5px',ml: 1, mr: 1, mb: 1 }}>
                <GlobalRankingTable
                    teamRanks={teamRanks}
                />
            </Box>
        </Box>
    );
}

export default GlobalStats;
