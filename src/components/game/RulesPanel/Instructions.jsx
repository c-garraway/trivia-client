import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../features/userData/userDataSlice";
import {theme} from "../../../theme/theme"

function Instructions() {
    const insetColor = theme.palette.inset.main;
    const mattColor = theme.palette.matt.main;
    const errorColor = theme.palette.error.main;
    const user = useSelector(selectCurrentUser);
    const currentDate = new Date().toISOString().slice(0, 10);
    const lastGamePlayedDate = user.lastGame?.slice(0, 10);
    const leadMessage = currentDate === lastGamePlayedDate ? 'Thank you for playing! Come back tomorrow for another round of questions.' : 'Select Difficulty and Category above, then select NEW GAME to get started'
    const leadColor = currentDate === lastGamePlayedDate ? errorColor : mattColor

    const rules = [
        ['One question set per day (10 Questions)'],
        ['Difficulty Points per Question: easy 1pt, medium 2pts, hard 3pts'],
        ['Teams must have two players'],
        ['Global ranking is based on the sum the last seven games of both team members'],
        ['Correct Answers are not shown for incorrect selections']
    ]

    return (
        <Box sx={{ /* width: '100%', */ border: `2px solid ${mattColor}`, borderRadius: '5px', backgroundColor: insetColor }}>
            <Typography sx={{ padding: 1, fontWeight: 'bold', fontSize: 'larger', color: leadColor }}>{leadMessage}</Typography>
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
