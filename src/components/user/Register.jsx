import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validEmail } from "../../utilities/regex";
import { registerLocalUser } from "../../apis/auth";
import { theme } from '../../theme/theme';

function Register() {
    const insetColor = theme.palette.inset.main;
    const errorColor = theme.palette.error.main;
    const mattColor = theme.palette.matt.main;

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [formMessage, setFormMessage] = useState('none');
    const [visibility, setVisibility] = useState('hidden');
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
    const [password2ErrorStatus, setPassword2ErrorStatus] = useState(false);
    const [nameErrorStatus, setNameErrorStatus] = useState(false);
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);
    const [loginDisabled, setLoginDisabled] = useState(true);

    const formStyle = { border: '1px solid black', pl: 2, pr: 2, pt: 1, pb: 2, borderRadius: '5px', '& .MuiTextField-root': { mt: 2, width: '100%' }, backgroundColor: mattColor, width: { xs: "90%", sm: "40%", md: "30%" }, mb: 3
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

    async function handleRegister() {
        if (name === undefined || name === "") {
            setFormMessage('Nick Name Required!')
            setVisibility();
            setNameErrorStatus(true)
            return;
        }
        if (password === undefined || password === "") {
            setFormMessage('Password required!')
            setVisibility();
            setPasswordErrorStatus(true)
            return;
        };
        if (password2 === undefined || password2 === "") {
            setFormMessage('Confirm Password required!')
            setVisibility();
            setPassword2ErrorStatus(true)
            return;
        };
        if (password !== password2) {
            setFormMessage('Passwords do not match!')
            setVisibility();
            setPasswordErrorStatus(true)
            setPassword2ErrorStatus(true)
            return;
        }
        if (password.length < 6) {
            setFormMessage('Password should be at least 6 characters!')
            setVisibility();
            setPasswordErrorStatus(true)
            setPassword2ErrorStatus(true)
            return;
        }
        const user = await registerLocalUser(name, email, password, password2)

        try {
            if (user.status === 'error') {
                setFormMessage(user.message);
                setVisibility();
                return;
            } else {
                setVisibility('hidden')
                setFormMessage('none')
                navigate('/login'); //changed to login
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Box
                component="form"
                sx={formStyle}>
                <Box>
                    <Typography sx={{ padding: 1, color: insetColor, textAlign: 'center' }}>USER REGISTRATION</Typography>
                    <Typography sx={{ border: '1px solid black', borderRadius: '5px',width: 'fit-content',color: errorColor, textAlign: 'center', visibility: { visibility }, margin: '0 auto', pl: 1, pr: 1, backgroundColor: insetColor, }}>{formMessage}</Typography>
                </Box>
                <Box sx={formInsetStyle}>
                    <TextField
                        required
                        error={nameErrorStatus}
                        variant="outlined"
                        id="outlined-name-required"
                        label="Nick Name"
                        type='text'
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setName(e.currentTarget.value)
                            setVisibility('hidden')
                            setFormMessage('none')
                            setNameErrorStatus(false)
                        }}
                    />
                    <TextField
                        required
                        error={emailErrorStatus}
                        variant="outlined"
                        id="outlined-email-required"
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
                        helperText="Minimum 6 characters"
                    />
                    <TextField
                        required
                        error={password2ErrorStatus}
                        variant="outlined"
                        id="outlined-password2-input"
                        label="Confirm Password"
                        type="password"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setPassword2(e.currentTarget.value)
                            setVisibility('hidden')
                            setFormMessage('none')
                            setPassword2ErrorStatus(false)
                        }}
                        helperText="Minimum 6 characters"
                    />
                    <Button
                        disabled={loginDisabled}
                        variant="contained"
                        onClick={handleRegister}
                        sx={{
                            display: "block",
                            width: "100%",
                            marginTop: "40px",
                        }}
                        >Register
                    </Button>
                </Box>

            </Box>
        </Box>
    );
}

export default Register;
