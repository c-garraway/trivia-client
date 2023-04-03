import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import PersonalPanel from "./StatsPanel/StatsPanel"
import GamePanel from "./GamePanel/GamePanel";
import Status from "./GamePanel/Status/Status";
import { selectIsLoggedIn } from "../../features/userData/userDataSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectIsTeamLoaded } from "../../features/userData/teamDataSlice";
import background from '../../images/QuestionMark.png'

const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'block',
    padding: {xs: "15%", sm: "15%", md: "10%"}
    
};

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
    },[isLoggedIn, isTeamLoaded, navigate])

    return (
        <Stack
            direction={{ xs: "column", md: "row"  }}
/*             sx={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: '-100',
            }} */
            spacing={.1}
            paddingTop={1}
            justifyContent="space-around">
            <GamePanel />
            <PersonalPanel />
            <Status />
        </Stack>
    );
}

export default GameBoard;
