import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formStyle } from "../../styles/styles";
import { validEmail } from "../../utilities/regex";
import { registerLocalUser } from "../../apis/auth";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [formMessage, setFormMessage] = useState('none');
    const [visibility, setVisibility] = useState('hidden');
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
    const [password2ErrorStatus, setPassword2ErrorStatus] = useState(false);
    const [nameErrorStatus, setNameErrorStatus] = useState(false);
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);
    const [loginDisabled, setLoginDisabled] = useState(true);

    function handleValidate(e) {
        const email = e.target.value

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
                navigate('/login'); //changed to  login
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Box
                component="form"
                sx={formStyle}>
                <Typography sx={{ color: 'red', textAlign: 'center', visibility: { visibility } }}>{formMessage}</Typography>
                <div>
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
                </div>

            </Box>
        </Box>
    );
}

export default Register;
