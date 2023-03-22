import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        isTeamLoaded: false,
        currentTeam: 'none',
    }
};

const teamDataSlice = createSlice({
    name: 'teamData',
    initialState: initialState(),
    reducers: {
        resetTeamData: () => initialState(),
        setTeamData: (state, action) => {
            state.currentTeam = action.payload;
            if(!action.payload.error) {
                state.isTeamLoaded = true
            };
        }
    }
});

export const {resetTeamData, setTeamData} = teamDataSlice.actions;
export const selectTeamData = (state) => state.teamData.currentTeam;
export const selectIsTeamLoaded = (state) => state.teamData.isTeamLoaded;
export default teamDataSlice.reducer;