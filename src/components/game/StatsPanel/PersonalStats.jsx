import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeamPoints } from "../../../features/pointsData/pointsDataSlice";
import { selectCurrentUser } from "../../../features/userData/userDataSlice";
import QuestionScores from '../GamePanel/Status/QuestionScores';

function PersonalStats() {
    const currentDate = new Date().toISOString().slice(0, 10);
    const user = useSelector(selectCurrentUser);
    const teamPoints = useSelector(selectTeamPoints);
    const userType = user.userType ? user.userType : 'User Type Not Selected';
    const lastGamePlayedDate = user.lastGame ? user.lastGame.slice(0, 10) : 'none';
    const lastGameData = typeof teamPoints === 'object' ? teamPoints.teamMembers[userType].dailyPoints[lastGamePlayedDate] : ''
    
    return (
        <Box sx={{ border: '1px solid black', borderRadius: '5px', width: '100%', backgroundColor: 'darkgreen' }}>
            <Typography sx={{ padding: 1, color: 'white'}}>PERSONAL STATS</Typography>
            <Box id='container'>
                <Box sx={{border: '1px solid black', borderRadius: '5px',ml: 1, mr: 1, mb: 1, backgroundColor: 'white' }}>
                    <Typography sx={{ pl: 1 }}>{user.name} ({userType})</Typography>
                    <Typography sx={{ pl: 1 }}>Current Date: {currentDate} </Typography>
                    <Typography sx={{ pl: 1 }}>Last Game Date: {lastGamePlayedDate }</Typography>
                    { lastGamePlayedDate === 'none' ? '' :
                        <Typography sx={{ pl: 1 }}>Last Game Points Distribution Below</Typography>
                    }
                </Box>
                { lastGamePlayedDate === 'none' ? '' :
                    <Box sx={{ pl: 1, pr: 1 }}>
                        <QuestionScores 
                            questionScores={lastGameData?.dailyPointsBlock}
                            category={lastGameData?.category}
                            totalPoints={lastGameData?.dailyPointsTotal}
                        />
                    </Box>
                }
            </Box>
        </Box>
    );
}

export default PersonalStats;
