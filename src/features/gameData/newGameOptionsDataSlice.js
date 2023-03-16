import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        category: '',
        difficulty: '',
    }
};

const newGameOptionsDataSlice = createSlice({
    name: 'newGameOptionsData',
    initialState: initialState(),
    reducers: {
        resetNewGameOptionsData: () => initialState(),
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setDifficulty: (state, action) => {
            state.difficulty = action.payload
        },
    }
});

export const {resetNewGameOptionsData, setCategory, setDifficulty } = newGameOptionsDataSlice.actions;
export const selectCategory = (state) => state.newGameOptionsData.category;
export const selectDifficulty = (state) => state.newGameOptionsData.difficulty;
export default newGameOptionsDataSlice.reducer;