import { Box, Typography } from "@mui/material";
import React from "react";

function Instructions() {

    const rules = [
        ['One question set per day (10 Questions)'],
        ['Difficulty Points per Question: easy 1pt, medium 2pts, hard 3pts'],
        ['Teams must have two players'],
        ['Global ranking is based on the sum the last seven games of both team members']
    ]

    return (
        <Box sx={{ /* border: '1px solid black', */ width: '100%' }}>
            <Typography sx={{ padding: 1, fontWeight: 'bold', fontSize: 'larger' }}>Select Difficulty and Category above, then select NEW GAME to get started</Typography>
            <Typography sx={{ padding: 1 }}>Rules and Regs... </Typography>
            { rules.map((rule, index) => {
                const ruleNumber = index + 1
                return(
                    <Typography key={index} sx={{ padding: 1 }}>{ruleNumber}. {rule} </Typography>
                )
                })
            }
        </Box>
    );
}

export default Instructions;
