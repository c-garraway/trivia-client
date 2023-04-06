import { createTheme } from '@mui/material';


export const theme = createTheme({
    palette: {

        type: 'light',
        primary: {
            main: '#1565c0'
        },
        secondary: { main: '#673ab7' },
        correctAnswer: { main: 'green' },
        incorrectAnswer: { main: '#ca0909' },
        highlight: {main: '#B0C4DE'},
        difficulty: { hard: '#FFD700', medium: '#C0C0C0', easy: '#CD7F32'},
        error: { main: '#ca0909' },
        status: { danger: '#b71c1c' },
        background: {main: '#B0C4DE'},
        matt: {main: 'darkGreen'},
        inset: {main: '#FFFAF0'}
    },
});