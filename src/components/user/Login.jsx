import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser, loginLocalUser } from "../../apis/auth";
import { validEmail } from "../../utilities/regex";
import { formStyle } from "../../styles/styles";
import { useDispatch } from "react-redux";
import { setCurrentUser, setIsLoggedIn } from "../../features/userData/userDataSlice";
import { getTeam } from "../../apis/team";
import { setTeamData } from "../../features/userData/teamDataSlice";
import { getTeamPoints, getAllTeamRanks} from "../../apis/points";
import { setTeamPoints, setAllTeamRanks } from "../../features/pointsData/pointsDataSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    //console.log(location)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [formMessage, setFormMessage] = useState('none');
    const [visibility, setVisibility] = useState('hidden');
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);
    const [loginDisabled, setLoginDisabled] = useState(true);

    const loginPath = location.pathname.length > 1 ? "login" : "home"
    const xsDisplay = loginPath === 'home' ? "none" : "flex"

    //console.log(loginPath)

    function handleValidate() {

        if (email === '') {
            return;
        }

        if (!validEmail.test(email)) {
            setFormMessage('Invalid email address!')
            setVisibility();
            setEmailErrorStatus(true)
            setLoginDisabled(true)
            return;
        }

        setLoginDisabled(false)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && loginDisabled === false) {
            handleLogin();
        };
    }

    async function handleLogin() {
        if (password === undefined || password === "") {
            setFormMessage('Password required!')
            setVisibility();
            setPasswordErrorStatus(true)
            return;
        };
        try {
            const login = await loginLocalUser(email, password)
            if (login.status === 'error') {
                setFormMessage(login.message);
                setVisibility();
                return;
            } else {
                //TODO: refactor get and update statements
                setVisibility('hidden');
                setFormMessage('none');
                dispatch(setIsLoggedIn(true));
                const user = await getUser();
                dispatch(setCurrentUser(user));
                const team = await getTeam();
                dispatch(setTeamData(team));
                const teamPoints = await getTeamPoints();
                console.log(teamPoints);
                dispatch(setTeamPoints(teamPoints));
                const allTeamRanks = await getAllTeamRanks();
                console.log(allTeamRanks);
                dispatch(setAllTeamRanks(allTeamRanks));
                navigate('/game');
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Box flex={1} sx={{ justifyContent: 'center', mt: 3, display: { xs: xsDisplay, md: "flex" } }}>
            <Box
                component="form"
                sx={formStyle}>
                <Typography sx={{ color: 'red', textAlign: 'center', visibility: { visibility } }}>{formMessage}</Typography>
                <div>
                    <TextField
                        required
                        error={emailErrorStatus}
                        variant="outlined"
                        id="outlined-required"
                        label="Email"
                        type='email'
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setEmail(e.currentTarget.value)
                            setVisibility('hidden')
                            setFormMessage('none')
                            setEmailErrorStatus(false)
                            /* setLoginDisabled(true) */
                        }}
                        onBlur={handleValidate}
                        /* onKeyDown={handleKeyDown} */
                    />
                    <TextField
                        required
                        error={passwordErrorStatus}
                        variant="outlined"
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setPassword(e.currentTarget.value)
                            setVisibility('hidden')
                            setFormMessage('none')
                            setPasswordErrorStatus(false)
                        }}
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        disabled={loginDisabled}
                        variant="contained"
                        onClick={handleLogin}
                        sx={{
                            display: "block",
                            width: "100%",
                            marginTop: "40px",
                        }}
                        >Login
                    </Button>
                </div>
            </Box>
        </Box>
    );
}

export default Login;
