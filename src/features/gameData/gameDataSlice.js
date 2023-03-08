import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        correctAnswers: 0,
        selectedDifficulty: null,
        totalScore: null
    }
};

const gameDataSlice = createSlice({
    name: 'gameData',
    initialState: initialState(),
    reducers: {
        resetGameData: () => initialState(),
        /* setGameData: (state, action) => {
            state.gameData = action.payload;
        }, */
        addToCorrectAnswers: (state, action) => {
            state.correctAnswers = (state.correctAnswers + 1)
        }
    }
});

export const {resetGameData, addToCorrectAnswers} = gameDataSlice.actions;
export const selectCorrectAnswers = (state) => state.gameData.correctAnswers;
export default gameDataSlice.reducer;