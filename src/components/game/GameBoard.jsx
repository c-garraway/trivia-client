import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import PersonalPanel from "./StatsPanel/StatsPanel"
import GamePanel from "./GamePanel/GamePanel";
import Status from "./GamePanel/Status/Status";
import { resetUserData } from "../../features/userData/userDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { resetTeamData } from "../../features/userData/teamDataSlice";
import { getAllTeamRanks, getTeamPoints } from "../../apis/points";
import { resetPointsData, setAllTeamRanks, setTeamPoints } from "../../features/pointsData/pointsDataSlice";
import { getUser } from "../../apis/auth";
import { resetNewGameOptionsData } from "../../features/gameData/newGameOptionsDataSlice";
import { resetQuestionData } from "../../features/gameData/questionDataSlice";
import { resetGameData } from "../../features/gameData/gameDataSlice";

function GameBoard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {

        async function checkUser() {
            const getUserResponse = await getUser()
            if(getUserResponse.status === 401) {
                new Promise(resolve => {
                    dispatch(resetUserData());
                    dispatch(resetGameData());
                    dispatch(resetQuestionData());
                    dispatch(resetNewGameOptionsData());
                    dispatch(resetTeamData());
                    dispatch(resetPointsData());
                    resolve();
                })
                .then(() => {
                    navigate('/');
                })
            } else {
                getAllTeamRanks().then((allTeamRanks) => dispatch(setAllTeamRanks(allTeamRanks)));
                getTeamPoints().then((teamPoints) => dispatch(setTeamPoints(teamPoints)));
            }
        }

        checkUser();

    },[navigate, dispatch])

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
