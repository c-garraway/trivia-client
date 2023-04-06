import { createSlice } from "@reduxjs/toolkit";


//TODO: remove userType and associated methods

const initialState = () => {
    return {
        isLoggedIn: false,
        currentUser: 'none',
    }
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialState(),
    reducers: {
        resetUserData: () => initialState(),
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setIsLoggedIn: (state) => {
            state.isLoggedIn = true;
        }
    }
});

export const {resetUserData, setCurrentUser, setIsLoggedIn} = userDataSlice.actions;
export const selectUserType = (state) => state.userData.userType;
export const selectCurrentUser = (state) => state.userData.currentUser;
export const selectIsLoggedIn = (state) => state.userData.isLoggedIn;
export default userDataSlice.reducer;