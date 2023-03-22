import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllTeamRanks, selectAreTeamPointsLoaded, selectAreTeamRanksLoaded } from "../../../features/pointsData/pointsDataSlice";
import { selectTeamData } from "../../../features/userData/teamDataSlice";


function GlobalStats() {
    
    const teamRanks = useSelector(selectAllTeamRanks)
    const currentTeam = useSelector(selectTeamData)


    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1 }}>GLOBAL RANKING</Typography>
            <Box sx={{ padding: 1 }}>
                { teamRanks.map((team, index) => {
                    const boldTeam = currentTeam.name === team.teamName ? 'bold' : 'normal'
                    return (
                        <Typography
                            key={index}
                            sx={{fontWeight: boldTeam}}>
                            {team.teamRank}: {team.teamName} [ {team.teamPointsTotal} pts. ]
                        </Typography>

                    )
                })}
                
            </Box>

        </Box>
    );
}

export default GlobalStats;
