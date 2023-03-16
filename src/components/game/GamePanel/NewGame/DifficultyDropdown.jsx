import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { setDifficulty } from "../../../../features/gameData/newGameOptionsDataSlice";

function DifficultyDropdown() {
    const dispatch = useDispatch();
    const difficulties = ['easy', 'medium', 'hard', 'mixed']

    return (
        <Box>
            <TextField
                select
                label="Difficulty"
                size="small"
                defaultValue=""
                sx={{width: '13ch', margin: 1}}
                /* helperText="Select Category" */
                onChange={(e) => {dispatch(setDifficulty(e.target.value))}}
                >
                {difficulties.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}

export default DifficultyDropdown;
