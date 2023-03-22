import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        areTeamPointsLoaded: false,
        areTeamRanksLoaded: false,
        teamPoints: 0,
        allTeamRanks: [0],
    }
};

const pointsDataSlice = createSlice({
    name: 'pointsData',
    initialState: initialState(),
    reducers: {
        resetPointsData: () => initialState(),
        setTeamPoints: (state, action) => {
            state.teamPoints = action.payload;
            if(!action.payload.error) {
                state.areTeamPointsLoaded = true
            };
        },
        setAllTeamRanks: (state, action) => {
            state.allTeamRanks = action.payload;
            if(!action.payload.error) {
                state.areTeamRanksLoaded = true
            };
        }
    }
});

export const {resetPointsData, setTeamPoints, setAllTeamRanks} = pointsDataSlice.actions;
export const selectTeamPoints = (state) => state.pointsData.teamPoints;
export const selectAllTeamRanks = (state) => state.pointsData.allTeamRanks;
export const selectAreTeamPointsLoaded = (state) => state.pointsData.areTeamPointsLoaded;
export const selectAreTeamRanksLoaded = (state) => state.pointsData.areTeamRanksLoaded;
export default pointsDataSlice.reducer;