import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCorrectAnswers, selectQuestionNumber, selectTotalScore } from "../../../features/gameData/gameDataSlice";
import {theme} from '../../../theme/theme'

function GameStats() {
    const insetColor = theme.palette.inset.main;
    const highlightColor = theme.palette.highlight.main;
    const mattColor = theme.palette.matt.main;

    const correctAnswers = useSelector(selectCorrectAnswers);
    const questionNumber = useSelector(selectQuestionNumber);
    const totalScore = useSelector(selectTotalScore);

    return (
        <Box sx={{ border: `2px solid ${mattColor}`, borderRadius: '5px', /* width: '100%', */ mb: 1, backgroundColor: insetColor, opacity: '.9' }}>
            <Typography sx={{ padding: 1, textAlign: 'center' }}>GAME STATS</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyItems: 'center', backgroundColor: highlightColor, borderRadius: '0 0 2px 2px'}}>
                <Typography sx={{ padding: 1 }}>Question {questionNumber}/10 </Typography>
                <Typography sx={{ padding: 1 }}>Correct: {correctAnswers} </Typography>
                <Typography sx={{ padding: 1 }}>Points: {totalScore} </Typography>
            </Box>
        </Box>
    );
}

export default GameStats;
