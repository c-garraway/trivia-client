import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import PersonalPanel from "./StatsPanel/StatsPanel"
import GamePanel from "./GamePanel/GamePanel";
import Status from "./GamePanel/Status/Status";
import { selectIsLoggedIn } from "../../features/userData/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectIsTeamLoaded } from "../../features/userData/teamDataSlice";
import { getAllTeamRanks, getTeamPoints } from "../../apis/points";
import { setAllTeamRanks, setTeamPoints } from "../../features/pointsData/pointsDataSlice";

function GameBoard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isTeamLoaded = useSelector(selectIsTeamLoaded);

    console.log(window.location.hostname)

    useEffect(()=> {
        if(!isLoggedIn) {
            navigate('/')
            return;
        }
        if(!isTeamLoaded) {
            navigate('/profile')
            return;
        }
        getAllTeamRanks().then((allTeamRanks) => dispatch(setAllTeamRanks(allTeamRanks)));
        getTeamPoints().then((teamPoints) => dispatch(setTeamPoints(teamPoints)));

    },[isLoggedIn, isTeamLoaded, navigate, dispatch])

    return (
        <Stack
            direction={{ xs: "column", md: "row"  }}
            spacing={.1}
            paddingTop={1}
            justifyContent="space-around">
            <GamePanel />
            <PersonalPanel />
            <Status /> {/* popup status screen */}
        </Stack>
    );
}

export default GameBoard;
