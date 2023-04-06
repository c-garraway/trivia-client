import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, loginLocalUser } from "../../apis/auth";
import { validEmail } from "../../utilities/regex";
import { useDispatch } from "react-redux";
import { setCurrentUser, setIsLoggedIn } from "../../features/userData/userDataSlice";
import { getTeam } from "../../apis/team";
import { setTeamData } from "../../features/userData/teamDataSlice";
import { getTeamPoints, getAllTeamRanks} from "../../apis/points";
import { setTeamPoints, setAllTeamRanks } from "../../features/pointsData/pointsDataSlice";
import { theme } from '../../theme/theme';

function Login() {
    const insetColor = theme.palette.inset.main;
    const errorColor = theme.palette.error.main;
    const mattColor = theme.palette.matt.main;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [formMessage, setFormMessage] = useState('none');
    const [visibility, setVisibility] = useState('hidden');
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);
    const [loginDisabled, setLoginDisabled] = useState(true);

    const formStyle = { pl: 2, pr: 2, pt: 1, pb: 2, borderRadius: '5px', '& .MuiTextField-root': { mt: 2, width: '100%' }, backgroundColor: mattColor, width: { xs: "90%", sm: "60%", md: "30%" }, mb: 3, opacity: .9
    };
    const formInsetStyle = {padding: 2, width: {md:'90%'}, border: '1px solid black', borderRadius: '5px', backgroundColor: insetColor, mt: 1}

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
                setVisibility('hidden');
                setFormMessage('none');
                dispatch(setIsLoggedIn(true));
                await getUser().then((user) => dispatch(setCurrentUser(user)));
                await getTeam().then((team) => {
                    if(team?.error) {
                        navigate('/profile')
                        return;
                    }
                    dispatch(setTeamData(team))
                    getTeamPoints().then((teamPoints) => dispatch(setTeamPoints(teamPoints)));
                    getAllTeamRanks().then((allTeamRanks) => dispatch(setAllTeamRanks(allTeamRanks)));
                    setTimeout(() => {
                        navigate('/game');
                    }, 100)
                });
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
            <Box
                component="form"
                sx={formStyle}>
                <Box>
                    <Typography sx={{ padding: 1, color: insetColor, textAlign: 'center' }}>PLAYER LOGIN</Typography>
                    <Typography sx={{ border: '1px solid black', borderRadius: '5px',width: 'fit-content',color: errorColor, textAlign: 'center', visibility: { visibility }, margin: '0 auto', pl: 1, pr: 1, backgroundColor: insetColor, }}>{formMessage}</Typography>
                </Box>
                <Box sx={formInsetStyle}>
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
                        }}
                        onBlur={handleValidate}
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
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
