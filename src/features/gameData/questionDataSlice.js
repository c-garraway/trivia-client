import { createSlice } from "@reduxjs/toolkit";

const questions2 = [{ "category": "Music", "id": "622a1c397cc59eab6f950d29", "correctAnswer": "", "incorrectAnswers": [" ", "", ""], "question": "Select Category and Difficulty Above", "tags": ["songs", "general_knowledge", "music"], "type": "Multiple Choice", "difficulty": "", "regions": [], "isNiche": false }]

const initialState = () => {
    return {
        questions: questions2, //TODO: change to empty array
    }
};

const questionDataSlice = createSlice({
    name: 'questionData',
    initialState: initialState(),
    reducers: {
        resetQuestionData: () => initialState(),
        replaceQuestionData: (state, action) => {
            state.questions = action.payload
        }
    }
});

export const {resetQuestionData, replaceQuestionData} = questionDataSlice.actions;
export const selectQuestions = (state) => state.questionData.questions;
export default questionDataSlice.reducer;