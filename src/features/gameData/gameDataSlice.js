import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        correctAnswers: 0,
        selectedDifficulty: null,
        totalScore: 0,
        questionScores: [0],
        questionNumber: 0,
        isGameFinished: false
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
        addToQuestionScores: (state, action) => {
            state.questionScores.push(action.payload)
        },
        addQuestionNumber: (state, action) => {
            state.questionNumber = action.payload;
        },
        toggleIsGameFinished: (state, action) => {
            state.isGameFinished = !state.isGameFinished
        }
    }
});

export const {resetGameData, addToCorrectAnswers, addToTotalScore, addQuestionNumber, toggleIsGameFinished, addToQuestionScores} = gameDataSlice.actions;
export const selectCorrectAnswers = (state) => state.gameData.correctAnswers;
export const selectTotalScore = (state) => state.gameData.totalScore;
export const selectQuestionNumber = (state) => state.gameData.questionNumber;
export const selectIsGameFinished = (state) => state.gameData.isGameFinished;
export const selectQuestionScores = (state) => state.gameData.questionScores;
export default gameDataSlice.reducer;