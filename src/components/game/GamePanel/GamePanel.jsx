import { Box, Stack } from "@mui/material";
import React from "react";
import NewGame from "./NewGame/NewGame";
import GameStats from "./GameStats";
import Quiz from "./Quiz/Quiz";
import Instructions from "../RulesPanel/Instructions"
import { useSelector } from "react-redux";
import { selectIsGameActive} from "../../../features/gameData/gameDataSlice";

function GamePanel() {
    const isGameActive = useSelector(selectIsGameActive);

    return (
        <Stack
            direction={{ xs: "column", md: "column" }}
            sx={{ justifyContent: "flex-start", alignItems: "center", padding: 1 }}
            spacing={1}
            flex={5}>
            <NewGame />
            { isGameActive ? 
                <Box sx={{width: '100%'}}>
                    <GameStats />
                    <Quiz /> 
                </Box>
                :
                <Box sx={{width: '100%'}}>
                    <Instructions />
                </Box>
            }
        </Stack>
    );
}

export default GamePanel;
