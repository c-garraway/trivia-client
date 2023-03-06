import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from './theme/theme'
import AppRouter from './routers/AppRouter';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box className="App">
                <AppRouter />
            </Box>
        </ThemeProvider>
    );
}

export default App;
