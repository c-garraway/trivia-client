import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeamPoints } from "../../../features/pointsData/pointsDataSlice";
import TeamStatsGraphic from "../GamePanel/Status/TeamStatsGraphic";

function TeamStats() {
    const teamPoints = useSelector(selectTeamPoints);
    const leadWeek = teamPoints.teamMembers?.lead;
    const partnerWeek = teamPoints.teamMembers?.partner;

    return (
        <Box sx={{ border: '1px solid black',borderRadius: '5px', width: '100%' }}>
            <Typography sx={{ padding: 1 }}>TEAM STATS</Typography>
            <Box>
                <Box sx={{border: '1px solid black', borderRadius: '5px',ml: 1, mr: 1 }}>
                    <Typography sx={{ pl: 1}}>{teamPoints.teamName} </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ pl: 1}}>Rank: {teamPoints.teamRank}  </Typography>
                        <Typography sx={{ pr: 1 }}>Total Points: {teamPoints.teamPointsTotal} </Typography>
                    </Box>
                </Box>
                <Box sx={{ pl: 1, pr: 1 }}>
                    <TeamStatsGraphic
                        userType='Lead'
                        dailyTotalScores={leadWeek?.pointsBlock}
                        totalPoints={leadWeek?.pointsBlockTotal}
                    />
                    <TeamStatsGraphic
                        userType='Partner'
                        dailyTotalScores={partnerWeek?.pointsBlock}
                        totalPoints={partnerWeek?.pointsBlockTotal}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default TeamStats;