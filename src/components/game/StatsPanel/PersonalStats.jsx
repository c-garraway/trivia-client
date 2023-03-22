import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectQuestionScores, selectTotalScore} from "../../../features/gameData/gameDataSlice"

function PersonalStats() {
    const totalScore = useSelector(selectTotalScore);
    const questionScores = useSelector(selectQuestionScores);

    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1}}>PERSONAL STATS</Typography>
            <Box>
                <Typography sx={{ padding: 1 }}>Today's Total Points: {totalScore} </Typography>
                <Typography sx={{ padding: 1 }}>Today's Points per Question: {questionScores} </Typography>
            </Box>
        </Box>
    );
}

export default PersonalStats;
