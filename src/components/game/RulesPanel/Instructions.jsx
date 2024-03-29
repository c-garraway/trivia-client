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
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const localCurrentDate = new Date().toLocaleDateString('en-CA', options);
    //const currentDate = new Date().toISOString().slice(0, 10);
    const lastGamePlayedDate = user.lastGame?.slice(0, 10);
    const leadMessage = localCurrentDate === lastGamePlayedDate ? 'Thank you for playing! Come back tomorrow for another round of questions.' : 'Select Difficulty and Category above, then select NEW GAME to get started'
    const leadColor = localCurrentDate === lastGamePlayedDate ? errorColor : mattColor

    const rules = [
        ['One question set per day (10 Questions)'],
        ['Difficulty points/question: easy(1), medium(2), hard(3)'],
        ['Teams consists of two players (required)'],
        ['Global ranking is based on the sum of the last seven games of both team members'],
        ['Correct answers will not be revealed when an incorrect answer in chosen']
    ]

    return (
        <Box sx={{ pb: 1, border: `2px solid ${mattColor}`, borderRadius: '5px', backgroundColor: insetColor, opacity: .9 }}>
            <Typography sx={{ padding: 1, fontWeight: 'bold', fontSize: 'larger', color: leadColor }}>{leadMessage}</Typography>
            <Typography sx={{ padding: 1 }}>Rules and Regs... </Typography>
            { rules.map((rule, index) => {
                const ruleNumber = index + 1
                return(
                    <Box key={index} sx={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Typography  sx={{ padding: 1 }}>{ruleNumber}.</Typography>
                        <Typography sx={{ pt: 1, pr: 1 }}>{rule}</Typography> 
                    </Box>
                )
                })
            }
        </Box>
    );
}

export default Instructions;
