import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        themeType: 'light',
    }
};

const themeDataSlice = createSlice({
    name: 'themeData',
    initialState: initialState(),
    reducers: {
        resetThemeData: () => initialState(),
        toggleThemeType: (state, action) => {
            state.type = !state.type
        }
    }
});

export const {resetThemeData, toggleThemeType} = themeDataSlice.actions;
export const selectThemeType = (state) => state.themeData.themeType;
export default themeDataSlice.reducer;