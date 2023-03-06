import { Box, Button, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../apis/auth";
import { resetUserData, selectCurrentUser, selectIsLoggedIn } from "../../features/userData/userDataSlice";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Logout } from "@mui/icons-material";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const loggedIn = useSelector(selectIsLoggedIn);
    const currentUser = useSelector(selectCurrentUser);
    const currentUserName = currentUser.name;
    const open = Boolean(anchorEl);
    const visibility = loggedIn ? 'visible' : 'hidden'
    const visibility2 = loggedIn ? 'hidden' : 'visible'


    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function handleHome() {
        navigate('/')
    }

    async function handleLogout() {
        try {
            await logoutUser();
            dispatch(resetUserData());
            handleCloseMenu();
            navigate('/');

        } catch (error) {
            console.log(error)
        }
    }

    function handleLogin() {
        navigate('/login')
    }

    function handleRegister() {
        navigate('/register')
    }

    function handleRules() {
        navigate('/rules')
    }

    function handleProfile() {
        handleCloseMenu();
        navigate('/profile')
    }

    return (
        <Box
            sx={{ padding: 1, display: 'flex', }}>
            <Box flex={1} sx={{ display: { xs: "none", sm: "flex", md: "flex" }, alignItems: 'flex-end' }}>
                <Typography
                    variant="h4"
                    sx={{ cursor: 'pointer' }}
                    onClick={handleHome}>
                    Team Trivia
                </Typography>
            </Box>
            <Box flex={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', visibility: visibility2 }} >
                <Typography
                    variant="h6"
                    onClick={handleHome}
                    sx={{
                        cursor: 'pointer'
                    }}
                >Home
                </Typography>
                <Typography
                    variant="h6"
                    onClick={handleRules}
                    sx={{
                        cursor: 'pointer', paddingLeft: 4
                    }}
                >Rules
                </Typography>
                <Typography
                    variant="h6"
                    onClick={handleLogin}
                    sx={{
                        cursor: 'pointer', paddingLeft: 4, display: { xs: "flex", sm: "flex", md: "none" }
                    }}
                >Login
                </Typography>
                <Typography
                    variant="h6"
                    onClick={handleRegister}
                    sx={{
                        cursor: 'pointer', paddingLeft: 4
                    }}
                >Register
                </Typography>
            </Box>
            <Box flex={1} sx={{ display: 'flex', justifyContent: 'right' }} >
                <Button
                    id="customized-button"
                    variant="contained"
                    disableElevation
                    onClick={handleOpenMenu}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                        visibility: { visibility }, cursor: 'pointer',
                    }}
                    >
                    {currentUserName}
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    >
                    <MenuItem
                        onClick={handleProfile} >
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        Profile
                    </MenuItem>
                    <MenuItem
                        onClick={handleLogout} >
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
}

export default Navbar;
