import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCorrectAnswers, selectQuestionNumber, selectTotalScore } from "../../../features/gameData/gameDataSlice";
import {theme} from '../../../theme/theme'

function GameStats() {
    const correctAnswers = useSelector(selectCorrectAnswers);
    const questionNumber = useSelector(selectQuestionNumber);
    const totalScore = useSelector(selectTotalScore);

    //console.log('QN: ' + questionNumber)

    return (
        <Box sx={{ border: '1px solid black', borderRadius: '5px', width: '100%', mb: 1 }}>
            <Typography sx={{ padding: 1, textAlign: 'center' }}>GAME STATS</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyItems: 'center', backgroundColor: theme.palette.highlight.main, borderRadius: '0 0 5px 5px'}}>
                <Typography sx={{ padding: 1 }}>Question {questionNumber}/10 </Typography>
                <Typography sx={{ padding: 1 }}>Correct: {correctAnswers} </Typography>
                <Typography sx={{ padding: 1 }}>Points: {totalScore} </Typography>
            </Box>
        </Box>
    );
}

export default GameStats;
