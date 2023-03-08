import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCorrectAnswers } from "../../../features/gameData/gameDataSlice";


function GameStats() {
    const correctAnswers = useSelector(selectCorrectAnswers);

    console.log(correctAnswers)

    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1 }}>Game Stats</Typography>
            <Typography sx={{ padding: 1 }}>Correct Answers: {correctAnswers} </Typography>
        </Box>
    );
}

export default GameStats;
