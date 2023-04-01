import { createTheme } from '@mui/material';


export const theme = createTheme({
    palette: {

        type: 'light',
        primary: {
            main: '#1565c0' // customise your main color here
        },
        secondary: { main: '#673ab7' },
        correctAnswer: { main: 'green' },
        incorrectAnswer: { main: '#ca0909' },
        highlight: {main: '#B0C4DE'},
        difficulty: { hard: '#FFD700', medium: '#C0C0C0', easy: '#CD7F32'},
        error: { main: '#ca0909' },
        sand: { main: '#F4DECB' },
        shell: { main: '#F8EEE7' },
        status: { danger: '#b71c1c' },
        background: {main: '#B0C4DE'},
        matt: {main: 'darkGreen'},
        inset: {main: '#FFFAF0'}
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        //contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        //tonalOffset: 0.2,
    },
});