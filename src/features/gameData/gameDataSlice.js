import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        correctAnswers: 0,
        totalScore: 0,
        questionScores: [],
        questionNumber: 0,
        isGameFinished: false,
        isGameActive: false,
    }
};

const gameDataSlice = createSlice({
    name: 'gameData',
    initialState: initialState(),
    reducers: {
        resetGameData: () => initialState(),
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
        },
        setIsGameActive: (state, action) => {
            state.isGameActive = action.payload
        }
    }
});

export const {resetGameData, addToCorrectAnswers, addToTotalScore, addQuestionNumber, toggleIsGameFinished, addToQuestionScores, setIsGameActive} = gameDataSlice.actions;
export const selectCorrectAnswers = (state) => state.gameData.correctAnswers;
export const selectTotalScore = (state) => state.gameData.totalScore;
export const selectQuestionNumber = (state) => state.gameData.questionNumber;
export const selectIsGameFinished = (state) => state.gameData.isGameFinished;
export const selectIsGameActive = (state) => state.gameData.isGameActive;
export const selectQuestionScores = (state) => state.gameData.questionScores;
export default gameDataSlice.reducer;