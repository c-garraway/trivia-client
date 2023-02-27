import { Stack } from "@mui/system";
import React from "react";
import PersonalPanel from "./PersonalPanel/PersonalPanel"
import GamePanel from "./GamePanel/GamePanel";
import GlobalPanel from "./GlobalPanel/GlobalPanel";

function GameBoard() {
  return (
    <Stack 
      direction={{ xs: "column", md: "row" }} 
      spacing={1} 
      paddingTop={1}
      justifyContent="space-between">
      <GamePanel/>
      <PersonalPanel/>
      <GlobalPanel/>
    </Stack>
    );
}

export default GameBoard;
