import { Box, Typography } from "@mui/material";
import React from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import DifficultyDropdown from "./DifficultyDropdown";
import NewGameButton from "./NewGameButton"
import { theme } from "../../../../theme/theme";

function NewGame() {
    const insetColor = theme.palette.inset.main;
    const mattColor = theme.palette.matt.main;

    return (
        <Box sx={{border: `2px solid ${mattColor}`, borderRadius: '5px', /* width: '100%', */ backgroundColor: insetColor, opacity: .9 }}>
            <Typography sx={{ pt: 1, pb: 1, textAlign: 'center'/* , color: mattColor  */}}>NEW GAME</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'/* {xs: 'space-evenly'} */}}>
                <DifficultyDropdown/>
                <CategoriesDropdown/>
                <NewGameButton/>
            </Box>
        </Box>
    );
}

export default NewGame;
