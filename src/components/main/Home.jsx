import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../user/Login";
import HomePageDetails from "./HomePageDetails";
import { selectIsLoggedIn } from "../../features/userData/userDataSlice";
import { useSelector } from "react-redux";

function Home() {
    const navigate = useNavigate();
    const loggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (loggedIn) {
            navigate('/game')

        }
    })

    return (
        <Box sx={{ padding: 2, mt: 1, height: 'calc(100svh - 100px)' }}>
            <Box>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    paddingTop={1}
                    justifyContent="space-evenly"
                    >
                    <HomePageDetails />
                    <Login />
                </Stack>
            </Box>
        </Box>
    );
}

export default Home;
