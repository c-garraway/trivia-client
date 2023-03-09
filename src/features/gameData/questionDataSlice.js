import { createSlice } from "@reduxjs/toolkit";

const questions = [{ "category": "Music", "id": "622a1c397cc59eab6f950d29", "correctAnswer": "The Beatles", "incorrectAnswers": ["Deep Purple", "Feeder", "Uriah Heep"], "question": "Which English rock band released the song 'Let It Be'?", "tags": ["songs", "general_knowledge", "music"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Music", "id": "622a1c397cc59eab6f950d30", "correctAnswer": "The Beatles", "incorrectAnswers": ["Status Quo", "Led Zeppelin", "The Kings"], "question": "Which English rock band released the album 'A Hard Day's Night'?", "tags": ["rock_music", "general_knowledge", "music"], "type": "Multiple Choice", "difficulty": "easy", "regions": [], "isNiche": false }, { "category": "Society & Culture", "id": "6266e6acff2394bd44dee05c", "correctAnswer": "Neuf", "incorrectAnswers": ["Nove", "Negen", "Trois"], "question": "In French, what is the word for for 'nine'?", "tags": ["language", "translations", "society_and_culture"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }, { "category": "Geography", "id": "623741ffcb85f7ce9e949d9f", "correctAnswer": "Romania", "incorrectAnswers": ["Ireland", "Netherlands", "Estonia"], "question": "Bucharest is the capital city of which country?", "tags": ["geography"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "62573f593d2f5c16bfb88330", "correctAnswer": "A secretary checks into a remote motel run by a young man under the domination of his mother.", "incorrectAnswers": ["The story of how the scandal of child molestation within the Boston Catholic church was uncovered.", "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.", "When a heist goes wrong, the surviving criminals suspect that one of them is a police informant."], "question": "What is the plot of the movie Psycho?", "tags": ["film", "film_and_tv"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "63d9531f168979b94b2e4fa1", "correctAnswer": "Bad Boys", "incorrectAnswers": ["Men in Black", "Independence Day", "Wild Wild West"], "question": "What was the name of the popular '90s police film starring Will Smith and Martin Lawrence?", "tags": ["1990's", "film_and_tv", "film"], "type": "Multiple Choice", "regions": [], "isNiche": false }, { "category": "Sport & Leisure", "id": "622a1c357cc59eab6f95001f", "correctAnswer": "Boxing", "incorrectAnswers": ["Karate", "Kickboxing", "Judo"], "question": "With Which Sport Would You Associate A Lonsdale Belt?", "tags": ["sport"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "624db9f9de6018633d31f6ad", "correctAnswer": "Garbage", "incorrectAnswers": ["Shirley Bassey", "Matt Monro", "Sam Smith"], "question": "Who performed the theme song to the James Bond film The World is Not Enough?", "tags": ["james_bond", "film", "soundtracks", "film_and_tv"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }, { "category": "Science", "id": "622a1c3a7cc59eab6f95104c", "correctAnswer": "Rabies", "incorrectAnswers": ["Meningitis", "Syphilis", "Alzeimer's"], "question": "What Is Hydrophobia Better Known As", "tags": ["science"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Science", "id": "6242cb44d543524f1b19c91d", "correctAnswer": "A sedge", "incorrectAnswers": ["A sloth", "A yoke", "An unkindness"], "question": "What is the word for a group of herons?", "tags": ["words", "animals", "birds", "science"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }]

const initialState = () => {
    return {
        questions: questions,
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