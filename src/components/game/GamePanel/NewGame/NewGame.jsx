import { Box, Typography } from "@mui/material";
import React from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import DifficultyDropdown from "./DifficultyDropdown";
import NewGameButton from "./NewGameButton"

function NewGame() {

    return (
        <Box sx={{border: '1px solid black', borderRadius: '5px', width: '100%' }}>
            <Typography sx={{ pt: 1, pb: 1, textAlign: 'center' }}>NEW GAME</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'/* {xs: 'space-evenly'} */}}>
                <DifficultyDropdown/>
                <CategoriesDropdown/>
                <NewGameButton/>
            </Box>
        </Box>
    );
}

export default NewGame;
