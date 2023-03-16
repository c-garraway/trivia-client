import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        isLoggedIn: false,
        userType: '',
        currentUser: '',
        userPoints: []
    }
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialState(),
    reducers: {
        resetUserData: () => initialState(),
        setUserType: (state, action) => {
            state.userType = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setIsLoggedIn: (state) => {
            state.isLoggedIn = true;
        }
    }
});

export const {resetUserData, setCurrentUser, setIsLoggedIn, setUserType} = userDataSlice.actions;
export const selectUserType = (state) => state.userData.userType;
export const selectCurrentUser = (state) => state.userData.currentUser;
export const selectIsLoggedIn = (state) => state.userData.isLoggedIn;
export default userDataSlice.reducer;