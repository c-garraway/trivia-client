import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from './theme/theme'
import AppRouter from './routers/AppRouter';

const background = theme.palette.background.main

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: background, borderRadius: '5px', p: 2, height: 'calc(100svh - 50px)'}}>
                <AppRouter />
            </Box>
        </ThemeProvider>
    );
}

export default App;
