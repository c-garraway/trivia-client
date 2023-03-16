import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../user/Login";
import HomePageDetails from "./HomePageDetails";
//import GlobalStats from "../game/StatsPanel/GlobalStats";
import { selectIsLoggedIn } from "../../features/userData/userDataSlice";
import { useSelector } from "react-redux";
//import {theme} from '../../theme/theme'

function Home() {
    const navigate = useNavigate();
    const loggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (loggedIn) {
            navigate('/game')

        }
    })

    return (
        <Box sx={{/* border: '1px solid black', */ padding: 2, mt: 1, height: 'calc(100svh - 100px)', /* backgroundColor: theme.palette.shell.main */ }}>
            {/* <Typography variant="h4" sx={{ display: { xs: "flex", sm: "none", md: "none"}, padding: 1 }}>Team Trivia</Typography> */}
            <Box>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    paddingTop={1}
                    justifyContent="space-evenly"
                    >
                    <HomePageDetails />
                    <Login />
                    {/* <GlobalStats/> */}
                </Stack>
            </Box>
        </Box>
    );
}

export default Home;
