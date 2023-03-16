import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeamData, /* selectIsTeamLoaded */ } from "../../../features/userData/teamDataSlice";


function TeamStats() {
    //const teamLoaded = useSelector(selectIsTeamLoaded);
    const team = useSelector(selectTeamData);
    const teamName = team.name

    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1 }}>TEAM STATS</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                <Typography sx={{ padding: 1}}>Rank: 01 </Typography>
                <Typography sx={{ padding: 1 }}>Name: <span style={{fontWeight: 'bold'}}>{teamName} </span></Typography>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                <Typography sx={{ padding: 1 }}>Daily Points: 63</Typography>
                <Typography sx={{ padding: 1 }}>7 Day Rolling Points:  350</Typography>
            </Box>
        </Box>
    );
}

export default TeamStats;
