import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../features/userData/userDataSlice";

function LastGame() {
    const currentDate = new Date().toISOString().slice(0, 10);
    const lastGamePlayedDate = new Date().toISOString().slice(0, 10);
    const user = useSelector(selectCurrentUser);
    const [dateColor, setDateColor] = useState('');

    useEffect(()=> {
        if(currentDate === lastGamePlayedDate) {
            setDateColor('red')
            return
        }
        setDateColor('green')

    },[currentDate, lastGamePlayedDate, setDateColor])
    
    return (
        <Box sx={{ /* border: '1px solid black', */ width: '100%', padding: 1 }} >
            <Typography sx={{fontWeight: 'bold', fontSize: 'large'}}>Welcome Back {user.name} </Typography>
            <Box sx={{display: 'flex'}}>
                <Typography>Current Date: {currentDate} | </Typography>
                <Typography sx={{ml: 1, color: dateColor}}>Last Game: {lastGamePlayedDate}</Typography>
            </Box>           
        </Box>
    );
}

export default LastGame;
