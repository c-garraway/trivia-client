import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


const formStyle = {
  position: 'absolute',
  top: {xs: "25%", sm: "30%", md: "35%"},
  left: '50%',
  transform: 'translate(-50%, -40%)',
  width: {xs: "70%", sm: "70%", md: "30%"},
  maxHeight: '80%',
  bgcolor: 'background.paper',
/*   border: '1px solid #000', */
  boxShadow: 10,
  p: 4,
  borderRadius: '5px',
  opacity: '95%',
  '& .MuiTextField-root': { mt: 2, width: '100%' },
};

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  return (
    <Box /* sx={{border: '1px solid black', padding: 1, width: '30%', margin: 'auto', mt: 1}} */>
      <Box
        component="form"
        sx={formStyle}>
        {/* <Typography sx={{ padding: 1 }}>LOGIN</Typography> */}
          <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            type='email'
            size="small"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => {
                setEmail(e.currentTarget.value)
                setErrorMessage('')
            }}
            />
            <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            size="small"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => {
                setPassword(e.currentTarget.value)
                setErrorMessage('')
            }}
            /* onKeyDown={handleKeyDown} */
            />
            <Button 
                variant="contained" 
                /* onClick={handleLogin} */
                sx={{
                    display: "block",
                    width: "100%",
                    marginTop: "10px",
                }}
                >Login
            </Button>
          </div>

      </Box>
    </Box>
  );
}

export default Login;
