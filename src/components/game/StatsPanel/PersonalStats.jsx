import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeamPoints } from "../../../features/pointsData/pointsDataSlice";
import { selectCurrentUser } from "../../../features/userData/userDataSlice";
import QuestionScores from '../GamePanel/Status/QuestionScores';

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
        <Box sx={{ border: '1px solid black', borderRadius: '5px', width: '100%' }}>
            <Typography sx={{ padding: 1}}>PERSONAL STATS</Typography>
            <Box id='container'>
                <Box sx={{border: '1px solid black', borderRadius: '5px',ml: 1, mr: 1 }}>
                    <Typography sx={{ pl: 1 }}>{user.name} ({userType})</Typography>
                    <Typography sx={{ pl: 1 }}>Current Date: {currentDate} </Typography>
                    <Typography sx={{ pl: 1 }}>Last Game Date: {lastGamePlayedDate}</Typography>
                    {/* <Typography sx={{ pl: 1 }}>Last GameDifficulty: {lastGameData?.difficulty}</Typography> */}
                    <Typography sx={{ pl: 1 }}>Last Game Points Distribution Below</Typography>
                </Box>
                <Box sx={{ pl: 1, pr: 1 }}>
                    <QuestionScores 
                        questionScores={lastGameData?.dailyPointsBlock}
                        //questions={questions}
                        category={lastGameData?.category}
                        totalPoints={lastGameData?.dailyPointsTotal}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default PersonalStats;
