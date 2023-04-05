import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePageDetails from "./HomePageDetails";
import { selectIsLoggedIn } from "../../features/userData/userDataSlice";
import { useSelector } from "react-redux";

function Home() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/game')

        }
    })

    return (
        <Box sx={{ paddingTop: {xs: 5, md: 15}, mt: 1 }}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HomePageDetails />
            </Box>
        </Box>
    );
}

export default Home;
