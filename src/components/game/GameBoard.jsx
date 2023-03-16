import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import PersonalPanel from "./StatsPanel/StatsPanel"
import GamePanel from "./GamePanel/GamePanel";
//import GlobalPanel from "./RulesPanel/RulesPanel";
import { selectIsLoggedIn } from "../../features/userData/userDataSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectIsTeamLoaded } from "../../features/userData/teamDataSlice";

function GameBoard() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isTeamLoaded = useSelector(selectIsTeamLoaded);

    useEffect(()=> {
        if(!isLoggedIn) {
            navigate('/')
            return;
        }
        if(!isTeamLoaded) {
            navigate('/profile')
            return;
        }


    },[isLoggedIn, isTeamLoaded])

    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1}
            paddingTop={1}
            justifyContent="space-between">
            <GamePanel />
            <PersonalPanel />
            {/* <GlobalPanel /> */}
        </Stack>
    );
}

export default GameBoard;
