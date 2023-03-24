import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeamPoints } from "../../../features/pointsData/pointsDataSlice";

function TeamStats() {
    const teamPoints = useSelector(selectTeamPoints);
    const leadWeek = teamPoints.teamMembers?.lead;
    const partnerWeek = teamPoints.teamMembers?.partner;

    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1 }}>TEAM STATS</Typography>
            <Box>
                <Typography sx={{ pl: 1}}>Team Rank: {teamPoints.teamRank}  </Typography>
                <Typography sx={{ pl: 1 }}>Team Name: {teamPoints.teamName} </Typography>
                <Typography sx={{ pl: 1 }}>Team Points: {teamPoints.teamPointsTotal} </Typography>
                <Typography sx={{ pl: 1 }}>Lead: Total({leadWeek?.pointsBlockTotal}) | Last 7({leadWeek?.pointsBlock}) </Typography>
                <Typography sx={{ pl: 1, pb: 1 }}>Partner: Total({partnerWeek?.pointsBlockTotal}) | Last 7({partnerWeek?.pointsBlock}) </Typography>
            </Box>
        </Box>
    );
}

export default TeamStats;
