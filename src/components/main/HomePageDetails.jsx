import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme/theme"
import { loginLocalUser, getUser } from "../../apis/auth";
import { setIsLoggedIn, setCurrentUser } from "../../features/userData/userDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetGameData } from "../../features/gameData/gameDataSlice";
import { setTeamData } from "../../features/userData/teamDataSlice";
import { getTeam } from "../../apis/team";

const style = {
    //border: '1px solid black',
    /*     marginLeft: 1, 
        marginRight: 1, */
    borderRadius: '5px',
    padding: 1
}

function HomePageDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = process.env.REACT_APP_GUEST_EMAIL
    const password = process.env.REACT_APP_GUEST_PW

    async function handleGuestLogin() {
        try {
            const login = await loginLocalUser(email, password)
            if (login) {
                dispatch(setIsLoggedIn(true));
                const user = await getUser();
                dispatch(setCurrentUser(user));
                dispatch(resetGameData())
                const team = await getTeam();
                dispatch(setTeamData(team))
                navigate('/game');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box flex={1.5} sx={style}>
            <Typography
                variant="h3"
                sx={{ color: theme.palette.primary.main, }}>
                Welcome
            </Typography>
            <Typography
                variant="h5"
                sx={{ color: theme.palette.secondary.main }}>
                to <Typography variant="span" sx={{ display: { xs: "inline", sm: "none", md: "none" }, color: 'black', fontSize: "150%" }}>Team Trivia</Typography> the ultimate knowledge contest!
            </Typography>
            <Typography
                variant="h5"
                sx={{ color: theme.palette.primary.main, cursor: 'pointer' }}
                onClick={handleGuestLogin}>
                click here to log in as a guest!
            </Typography>
        </Box>

    );
}

export default HomePageDetails;
