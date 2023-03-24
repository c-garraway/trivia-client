import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeamPoints } from "../../../features/pointsData/pointsDataSlice";
import { selectCurrentUser } from "../../../features/userData/userDataSlice";

function PersonalStats() {
    const user = useSelector(selectCurrentUser);
    const userType = user.userType;
    const currentDate = new Date().toISOString().slice(0, 10);
    const lastGamePlayedDate = user.lastGame?.slice(0, 10);
    const teamPoints = useSelector(selectTeamPoints);
    const lastGameData = teamPoints ? teamPoints.teamMembers[userType].dailyPoints[lastGamePlayedDate] : ''
    
    console.log(teamPoints)
    console.log(lastGameData)

    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1}}>PERSONAL STATS</Typography>
            <Box>
                <Typography sx={{ pl: 1 }}>Team {userType}</Typography>
                <Typography sx={{ pl: 1 }}>Current Date: {currentDate} </Typography>
                <Typography sx={{ pl: 1 }}>Last Game Date: {lastGamePlayedDate}</Typography>
                <Typography sx={{ pl: 1 }}>Category (Last Game): {lastGameData?.category}</Typography>
                <Typography sx={{ pl: 1 }}>Difficulty (Last Game): {lastGameData?.difficulty}</Typography>
                <Typography sx={{ pl: 1 }}>Points (Last Game): {lastGameData?.dailyPointsTotal} </Typography>
                <Typography sx={{ pl: 1, pb: 1 }}>Question Points (Last Game): {lastGameData?.dailyPointsBlock} </Typography>
            </Box>
        </Box>
    );
}

export default PersonalStats;
