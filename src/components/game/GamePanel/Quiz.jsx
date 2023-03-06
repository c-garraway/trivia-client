import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const questions = [{ "category": "Music", "id": "622a1c397cc59eab6f950d29", "correctAnswer": "The Beatles", "incorrectAnswers": ["Deep Purple", "Feeder", "Uriah Heep"], "question": "Which English rock band released the song 'Let It Be'?", "tags": ["songs", "general_knowledge", "music"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Music", "id": "622a1c397cc59eab6f950d30", "correctAnswer": "The Beatles", "incorrectAnswers": ["Status Quo", "Led Zeppelin", "The Kings"], "question": "Which English rock band released the album 'A Hard Day's Night'?", "tags": ["rock_music", "general_knowledge", "music"], "type": "Multiple Choice", "difficulty": "easy", "regions": [], "isNiche": false }, { "category": "Society & Culture", "id": "6266e6acff2394bd44dee05c", "correctAnswer": "Neuf", "incorrectAnswers": ["Nove", "Negen", "Trois"], "question": "In French, what is the word for for 'nine'?", "tags": ["language", "translations", "society_and_culture"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }, { "category": "Geography", "id": "623741ffcb85f7ce9e949d9f", "correctAnswer": "Romania", "incorrectAnswers": ["Ireland", "Netherlands", "Estonia"], "question": "Bucharest is the capital city of which country?", "tags": ["geography"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "62573f593d2f5c16bfb88330", "correctAnswer": "A secretary checks into a remote motel run by a young man under the domination of his mother.", "incorrectAnswers": ["The story of how the scandal of child molestation within the Boston Catholic church was uncovered.", "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.", "When a heist goes wrong, the surviving criminals suspect that one of them is a police informant."], "question": "What is the plot of the movie Psycho?", "tags": ["film", "film_and_tv"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "63d9531f168979b94b2e4fa1", "correctAnswer": "Bad Boys", "incorrectAnswers": ["Men in Black", "Independence Day", "Wild Wild West"], "question": "What was the name of the popular '90s police film starring Will Smith and Martin Lawrence?", "tags": ["1990's", "film_and_tv", "film"], "type": "Multiple Choice", "regions": [], "isNiche": false }, { "category": "Sport & Leisure", "id": "622a1c357cc59eab6f95001f", "correctAnswer": "Boxing", "incorrectAnswers": ["Karate", "Kickboxing", "Judo"], "question": "With Which Sport Would You Associate A Lonsdale Belt?", "tags": ["sport"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "624db9f9de6018633d31f6ad", "correctAnswer": "Garbage", "incorrectAnswers": ["Shirley Bassey", "Matt Monro", "Sam Smith"], "question": "Who performed the theme song to the James Bond film The World is Not Enough?", "tags": ["james_bond", "film", "soundtracks", "film_and_tv"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }, { "category": "Science", "id": "622a1c3a7cc59eab6f95104c", "correctAnswer": "Rabies", "incorrectAnswers": ["Meningitis", "Syphilis", "Alzeimer's"], "question": "What Is Hydrophobia Better Known As", "tags": ["science"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Science", "id": "6242cb44d543524f1b19c91d", "correctAnswer": "A sedge", "incorrectAnswers": ["A sloth", "A yoke", "An unkindness"], "question": "What is the word for a group of herons?", "tags": ["words", "animals", "birds", "science"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }]

const answerBoxStyle = {
    width: '40%',
    height: '2.em'
}

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [randomAnswers, setRandomAnswers] = useState('');
    //const [questionNumber, setQuestionNumber] = useState(3);
    let answers;

    console.log(questions)

    function getAnswers() {
        answers.push(questions[currentQuestion].incorrectAnswers[0])
        answers.push(questions[currentQuestion].incorrectAnswers[1])
        answers.push(questions[currentQuestion].incorrectAnswers[2])
        answers.push(questions[currentQuestion].correctAnswer)
        console.log('A1 ' + answers)
        return answers
    };

    const shuffleAnswers = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log('A2 ' + answers)
    }

    function setAnswers() {
        answers = []
        shuffleAnswers(getAnswers())
        setRandomAnswers(answers)
        console.log('A3 ' + answers)
    }

    useEffect(() => {
        setAnswers()
    }, [currentQuestion])

    function handleAnswerSelection(e) {
        //TODO: check answer and allocate points
        if (e.target.value = questions[currentQuestion].correctAnswer) { }
    }

    function handleNextQuestion() {
        setCurrentQuestion(currentQuestion + 1)
        console.log('current question: ' + currentQuestion)
    }


    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1, textAlign: 'center', fontSize: 'x-large' }}>QUESTION {currentQuestion + 1} of 10</Typography>
            <Stack direction='row' spacing={1} sx={{/* border: '1px solid black',  */justifyContent: "space-around", alignItems: "center", padding: 1 }}>
                <Typography sx={{ padding: 1 }}>CATEGORY: {questions[currentQuestion].category}</Typography>
                <Typography sx={{ padding: 1 }}>DIFFICULTY: {questions[currentQuestion].difficulty}</Typography>
            </Stack>
            <Typography sx={{ padding: 1, textAlign: 'center', fontSize: 'larger' }}>{questions[currentQuestion].question}</Typography>
            <Stack direction='row' spacing={1} sx={{/* border: '1px solid black',  */justifyContent: "space-around", alignItems: "center", padding: 1 }}>
                <Button
                    variant="contained"
                    style={answerBoxStyle}
                    startIcon="(A)"
                    onClick={handleAnswerSelection}>
                    {randomAnswers[0]}
                </Button>
                <Button
                    variant="contained"
                    style={answerBoxStyle}
                    startIcon="(B)"
                    onClick={handleAnswerSelection}>
                    {randomAnswers[1]}
                </Button>
            </Stack>
            <Stack direction='row' spacing={1} sx={{/* border: '1px solid black',  */justifyContent: "space-around", alignItems: "center", padding: 1 }}>
                <Button
                    variant="contained"
                    style={answerBoxStyle}
                    startIcon="(C)"
                    onClick={handleAnswerSelection}>
                    {randomAnswers[2]}
                </Button>
                <Button
                    variant="contained"
                    style={answerBoxStyle}
                    startIcon="(D)"
                    onClick={handleAnswerSelection}>
                    {randomAnswers[3]}
                </Button>
            </Stack>
            <Button
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{ display: "flex", width: '30ch', margin: 'auto', marginBottom: 1 }}
                onClick={handleNextQuestion}>
                Next Question
            </Button>
        </Box>
    );
}

export default Quiz;
