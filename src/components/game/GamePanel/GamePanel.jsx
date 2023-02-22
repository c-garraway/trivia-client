import { Stack } from "@mui/material";
import React from "react";
import NewGame from "./NewGame";
import GameStats from "./GameStats";
import Quiz from "./Quiz";

function GamePanel() {
  return (
    <Stack direction={{ xs: "column", md: "column" }} spacing={1} justifyContent="space-between">
        <NewGame/>
        <GameStats/>
        <Quiz/>
    </Stack>
  );
}

export default GamePanel;
