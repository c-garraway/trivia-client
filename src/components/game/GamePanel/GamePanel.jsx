import { Stack } from "@mui/material";
import React from "react";
import NewGame from "./NewGame";
import GameStats from "./GameStats";
import Quiz from "./Quiz";

function GamePanel() {
  return (
    <Stack 
        direction={{ xs: "column", md: "column" }} 
        sx={{border: '1px solid black', justifyContent: "flex-start", alignItems: "center", padding: 1}}
        spacing={1} 
        flex={5}>
        <NewGame/>
        <Quiz/>
        <GameStats/>
    </Stack>
  );
}

export default GamePanel;
