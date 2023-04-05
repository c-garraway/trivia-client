import { Box, Button, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../../apis/auth";
import { resetUserData, selectCurrentUser, selectIsLoggedIn } from "../../features/userData/userDataSlice";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Logout } from "@mui/icons-material";
import { resetGameData } from "../../features/gameData/gameDataSlice";
import { resetQuestionData } from "../../features/gameData/questionDataSlice";
import { resetNewGameOptionsData } from "../../features/gameData/newGameOptionsDataSlice";
import { resetTeamData } from "../../features/userData/teamDataSlice";
import { resetPointsData } from "../../features/pointsData/pointsDataSlice";
import { theme } from "../../theme/theme"

function Navbar() {
    const insetColor = theme.palette.inset.main;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const currentUser = useSelector(selectCurrentUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const currentUserName = currentUser.name;
    const open = Boolean(anchorEl);
    const userMenuVisibility = isLoggedIn ? 'visible' : 'hidden'
    const currentPath = useLocation();
    const homeVisibility = currentPath.pathname === '/' ? 'hidden' : 'visible'
    const loginDisplay = currentPath.pathname === '/login' ? 'none' : ''
    const registerDisplay = currentPath.pathname === '/register' ? 'none' : ''

    //console.log(currentPath)

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
            dispatch(resetGameData());
            dispatch(resetQuestionData());
            dispatch(resetNewGameOptionsData());
            dispatch(resetTeamData());
            dispatch(resetPointsData());
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

    function handleProfile() {
        handleCloseMenu();
        navigate('/profile')
    }

    return (
        <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{ display: "flex", alignItems: 'flex-end' }}>
                <Typography
                    variant="h4"
                    sx={{ cursor: 'pointer', color: insetColor, /* fontWeight: 'bold', */ fontFamily: ['Bebas Neue'] }}
                    onClick={handleHome}>
                    Team Trivia
                </Typography>
            </Box>
            { !isLoggedIn ?
                <Box flex={1.5} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end' }} >
                    <Typography
                        variant="h6"
                        onClick={handleHome}
                        sx={{
                            cursor: 'pointer', visibility: homeVisibility, color: insetColor
                        }}
                    >Home
                    </Typography>
                    <Typography
                        variant="h6"
                        onClick={handleLogin}
                        sx={{
                            cursor: 'pointer', paddingLeft: 4, display: loginDisplay, color: insetColor
                        }}
                    >Login
                    </Typography>
                    <Typography
                        variant="h6"
                        onClick={handleRegister}
                        sx={{
                            cursor: 'pointer', paddingLeft: 4, display: registerDisplay, color: insetColor
                        }}
                    >Register
                    </Typography>
                </Box>
                :
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end' }} >
                    <Button
                        id="customized-button"
                        variant="text"
                        disableElevation
                        onClick={handleOpenMenu}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            visibility: { userMenuVisibility }, cursor: 'pointer', height: 'fit-content', color: 'white', /* textTransform: 'capitalize' */
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
            }
        </Box>
    );
}

export default Navbar;
