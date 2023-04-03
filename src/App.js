import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from './theme/theme'
import AppRouter from './routers/AppRouter';
import backgroundImage from '../src/images/QuestionMark.png'

const background = theme.palette.background.main

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: '-100', borderRadius: '5px', p: 2, height: 'calc(100svh - 50px)'
            }}/* sx={{backgroundColor: background, borderRadius: '5px', p: 2, height: 'calc(100svh - 50px)'}} */>
                <AppRouter />
            </Box>
        </ThemeProvider>
    );
}

export default App;
