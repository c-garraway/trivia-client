import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../features/userData/userDataSlice";

function LastGame() {
    const user = useSelector(selectCurrentUser);
    
    return (
        <Box sx={{ /* border: '1px solid black', */ width: '100%', padding: 1 }} >
            <Typography sx={{fontWeight: 'bold', fontSize: 'large'}}>Welcome {user.name} </Typography>      
        </Box>
    );
}

export default LastGame;
