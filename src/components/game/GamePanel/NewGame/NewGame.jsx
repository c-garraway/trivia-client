import { Box, Typography } from "@mui/material";
import React from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import DifficultyDropdown from "./DifficultyDropdown";
import NewGameButton from "./NewGameButton"

function NewGame() {

    return (
        <Box sx={{border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1, textAlign: 'center' }}>NEW GAME</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: {xs: 'space-evenly'}}}>
                <DifficultyDropdown/>
                <CategoriesDropdown/>
                <NewGameButton/>
            </Box>
        </Box>
    );
}

export default NewGame;
