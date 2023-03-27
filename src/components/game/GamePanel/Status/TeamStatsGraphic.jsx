import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from 'prop-types';

function TeamStatsGraphic({userType, dailyTotalScores, totalPoints}) {
    const updatedDailyTotalScores = [...dailyTotalScores]
    while(updatedDailyTotalScores.length < 7 ) {
        updatedDailyTotalScores.push(0)
    }

    return (
        <Box sx={{border: '1px solid black', borderRadius: '5px', p: 1, mt: 1, mb: 1}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{mb: 0}}>{userType} (Last 7 Games)</Typography>
                <Typography sx={{mb: 0}}>Total Points: {totalPoints}</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                {updatedDailyTotalScores.map((dailyScore, index) => {
                    
                    return(
                        <div key={index}>
                            <Box sx={{
                                border: `.5px solid black`,
                                borderRadius: '5px',
                                width: 25,
                                padding: 1,
                                textAlign: 'center',
                            }}>
                                <Typography sx={{fontSize: 'larger'}}>{dailyScore}</Typography>        
                            </Box>
                        </div>
                    )
                })}
            </Box>
        </Box>
    )
}

TeamStatsGraphic.propTypes = {
    userType: PropTypes.string,
    dailyTotalScores: PropTypes.array, 
    totalPoints: PropTypes.number,
};

TeamStatsGraphic.defaultProps = {
    dailyTotalScores: [], 
    totalPoints: 0,
};

export default TeamStatsGraphic;
