import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        teamData: ''
    }
};

const teamDataSlice = createSlice({
    name: 'teamData',
    initialState: initialState(),
    reducers: {
        resetTeamData: () => initialState(),
        setTeamData: (state, action) => {
            state.teamData = action.payload;
        }
    }
});

export const {resetTeamData, setTeamData} = teamDataSlice.actions;
export const selectTeamData = (state) => state.teamData;
export default teamDataSlice.reducer;