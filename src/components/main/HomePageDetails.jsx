import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme/theme"
import { loginLocalUser, getUser } from "../../apis/auth";
import { setIsLoggedIn, setCurrentUser } from "../../features/userData/userDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { resetGameData } from "../../features/gameData/gameDataSlice";
import { setTeamData } from "../../features/userData/teamDataSlice";
import { getTeam } from "../../apis/team";
import { setAllTeamRanks, setTeamPoints } from "../../features/pointsData/pointsDataSlice";
import { getAllTeamRanks, getTeamPoints } from "../../apis/points";



function HomePageDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = process.env.REACT_APP_GUEST_EMAIL
    const password = process.env.REACT_APP_GUEST_PW

    const style = {
        width: { xs: "100%", sm: "70%", md: "40%" },
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: 2,
        opacity: .9,
        textAlign: 'center'
    } 
    async function handleGuestLogin() {
        try {
            const login = await loginLocalUser(email, password)
            if (login) { 
                dispatch(setIsLoggedIn(true));
                await getUser().then((user) => dispatch(setCurrentUser(user)));
                await getTeam().then((team) => dispatch(setTeamData(team)));
                await getTeamPoints().then((teamPoints) => dispatch(setTeamPoints(teamPoints)));
                await getAllTeamRanks().then((allTeamRanks) => dispatch(setAllTeamRanks(allTeamRanks)))
                navigate('/game');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={style}>
            <Typography
                variant="h3"
                sx={{ color: theme.palette.primary.main, }}>
                Welcome
            </Typography>
            <Typography
                variant="h5"
                sx={{ color: theme.palette.secondary.main }}>
                to the ultimate knowledge contest.
            </Typography>
            <Typography
                variant="h5"
                sx={{ color: theme.palette.secondary.main }}>
                Compete with your friends to reach the top of the Leader Board!
            </Typography>
            <Button
                variant="contained"
                sx={{display: 'block', margin: '10px auto', textTransform: 'capitalize'}}
                onClick={handleGuestLogin}>
                Curious? Click Here To Have a Look around
            </Button>
            <Typography
                variant="h6"
                sx={{ color: theme.palette.secondary.main }}>
                Login or Register to play
            </Typography>
        </Box>

    );
}

export default HomePageDetails;
