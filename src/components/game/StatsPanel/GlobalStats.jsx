import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllTeamRanks } from "../../../features/pointsData/pointsDataSlice";
import GlobalRankingTable from "../GamePanel/Status/GlobalRankingTable"
import {theme} from '../../../theme/theme'

function GlobalStats() {
    const teamRanks = useSelector(selectAllTeamRanks)
    const insetColor = theme.palette.inset.main;
    const mattColor = theme.palette.matt.main;

    return (
        <Box sx={{ borderRadius: '5px', width: '100%', backgroundColor: mattColor, opacity: .9 }}>
            <Typography sx={{ padding: 1, color: insetColor }}>GLOBAL RANKING</Typography>
            <Box sx={{border: '1px solid black', borderRadius: '5px',ml: 1, mr: 1, mb: 1 }}>
                <GlobalRankingTable
                    teamRanks={teamRanks}
                />
            </Box>
        </Box>
    );
}

export default GlobalStats;
