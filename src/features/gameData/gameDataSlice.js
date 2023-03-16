import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        correctAnswers: 0,
        selectedDifficulty: null,
        totalScore: 0,
        questionNumber: 1
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
        },
        addToTotalScore: (state, action) => {
            state.totalScore = (state.totalScore + action.payload)
        },
        addQuestionNumber: (state, action) => {
            state.questionNumber = action.payload;
        }
    }
});

export const {resetGameData, addToCorrectAnswers, addToTotalScore, addQuestionNumber} = gameDataSlice.actions;
export const selectCorrectAnswers = (state) => state.gameData.correctAnswers;
export const selectTotalScore = (state) => state.gameData.totalScore;
export const selectQuestionNumber = (state) => state.gameData.questionNumber;
export default gameDataSlice.reducer;