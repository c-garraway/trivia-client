import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { addToCorrectAnswers } from "../../../features/gameData/gameDataSlice";
import { useDispatch } from "react-redux";

const questions = [{ "category": "Music", "id": "622a1c397cc59eab6f950d29", "correctAnswer": "The Beatles", "incorrectAnswers": ["Deep Purple", "Feeder", "Uriah Heep"], "question": "Which English rock band released the song 'Let It Be'?", "tags": ["songs", "general_knowledge", "music"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Music", "id": "622a1c397cc59eab6f950d30", "correctAnswer": "The Beatles", "incorrectAnswers": ["Status Quo", "Led Zeppelin", "The Kings"], "question": "Which English rock band released the album 'A Hard Day's Night'?", "tags": ["rock_music", "general_knowledge", "music"], "type": "Multiple Choice", "difficulty": "easy", "regions": [], "isNiche": false }, { "category": "Society & Culture", "id": "6266e6acff2394bd44dee05c", "correctAnswer": "Neuf", "incorrectAnswers": ["Nove", "Negen", "Trois"], "question": "In French, what is the word for for 'nine'?", "tags": ["language", "translations", "society_and_culture"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }, { "category": "Geography", "id": "623741ffcb85f7ce9e949d9f", "correctAnswer": "Romania", "incorrectAnswers": ["Ireland", "Netherlands", "Estonia"], "question": "Bucharest is the capital city of which country?", "tags": ["geography"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "62573f593d2f5c16bfb88330", "correctAnswer": "A secretary checks into a remote motel run by a young man under the domination of his mother.", "incorrectAnswers": ["The story of how the scandal of child molestation within the Boston Catholic church was uncovered.", "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.", "When a heist goes wrong, the surviving criminals suspect that one of them is a police informant."], "question": "What is the plot of the movie Psycho?", "tags": ["film", "film_and_tv"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "63d9531f168979b94b2e4fa1", "correctAnswer": "Bad Boys", "incorrectAnswers": ["Men in Black", "Independence Day", "Wild Wild West"], "question": "What was the name of the popular '90s police film starring Will Smith and Martin Lawrence?", "tags": ["1990's", "film_and_tv", "film"], "type": "Multiple Choice", "regions": [], "isNiche": false }, { "category": "Sport & Leisure", "id": "622a1c357cc59eab6f95001f", "correctAnswer": "Boxing", "incorrectAnswers": ["Karate", "Kickboxing", "Judo"], "question": "With Which Sport Would You Associate A Lonsdale Belt?", "tags": ["sport"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Film & TV", "id": "624db9f9de6018633d31f6ad", "correctAnswer": "Garbage", "incorrectAnswers": ["Shirley Bassey", "Matt Monro", "Sam Smith"], "question": "Who performed the theme song to the James Bond film The World is Not Enough?", "tags": ["james_bond", "film", "soundtracks", "film_and_tv"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }, { "category": "Science", "id": "622a1c3a7cc59eab6f95104c", "correctAnswer": "Rabies", "incorrectAnswers": ["Meningitis", "Syphilis", "Alzeimer's"], "question": "What Is Hydrophobia Better Known As", "tags": ["science"], "type": "Multiple Choice", "difficulty": "medium", "regions": [], "isNiche": false }, { "category": "Science", "id": "6242cb44d543524f1b19c91d", "correctAnswer": "A sedge", "incorrectAnswers": ["A sloth", "A yoke", "An unkindness"], "question": "What is the word for a group of herons?", "tags": ["words", "animals", "birds", "science"], "type": "Multiple Choice", "difficulty": "hard", "regions": [], "isNiche": false }]


function Quiz() {
    const dispatch = useDispatch();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [randomAnswers, setRandomAnswers] = useState('');
    const [borderColor0, setBorderColor0] = useState('');
    const [borderColor1, setBorderColor1] = useState('');
    const [borderColor2, setBorderColor2] = useState('');
    const [borderColor3, setBorderColor3] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [disabled0, setDisabled0] = useState(false);
    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);
    let answers;

    const answerBoxStyle = {
        display: 'flex',
        border: '1px solid black',
        padding: 10,
        width: '100%',
        minHeight: 50,
        borderRadius: 5,
        marginLeft: 10,
        alignItems: 'center'
    }
    
    const answerButtonStyle = {
        width: 'fit-content',
    }

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

    function handleAnswerSelection(x) {
        //TODO: check answer and allocate points
        if((currentQuestion + 1) < questions.length) {
            setDisabled(false);
        }
        
        console.log(x)
        if (randomAnswers[x] === questions[currentQuestion].correctAnswer) {

            dispatch(addToCorrectAnswers());

            if(x === 0){
                setBorderColor0('palegreen')
                setDisabled1(true);
                setDisabled2(true);
                setDisabled3(true);
                return;
            }
            if(x === 1){
                setBorderColor1('palegreen')
                setDisabled0(true);
                setDisabled2(true);
                setDisabled3(true);
                return;
            }
            if(x === 2){
                setBorderColor2('palegreen')
                setDisabled0(true);
                setDisabled1(true);
                setDisabled3(true);
                return;
            }
            if(x === 3){
                setBorderColor3('palegreen')
                setDisabled0(true);
                setDisabled1(true);
                setDisabled2(true);
                return;
            }
            
        }

        if(x === 0){
            setBorderColor0('lightpink')
            setDisabled1(true);
            setDisabled2(true);
            setDisabled3(true);
            return;
        }
        if(x === 1){
            setBorderColor1('lightpink')
            setDisabled0(true);
            setDisabled2(true);
            setDisabled3(true);
            return;
        }
        if(x === 2){
            setBorderColor2('lightpink')
            setDisabled0(true);
            setDisabled1(true);
            setDisabled3(true);
            return;
        }
        if(x === 3){
            setBorderColor3('lightpink')
            setDisabled0(true);
            setDisabled1(true);
            setDisabled2(true);
            return;
        }
    }

    function handleNextQuestion() {
        
        setCurrentQuestion(currentQuestion + 1)
        setBorderColor0('');
        setBorderColor1('');
        setBorderColor2('');
        setBorderColor3('');
        setDisabled0(false);
        setDisabled1(false);
        setDisabled2(false);
        setDisabled3(false);
        setDisabled(true);
    }


    return (
        <Box sx={{ border: '1px solid black', width: '100%' }}>
            <Typography sx={{ padding: 1, textAlign: 'center', fontSize: 'x-large' }}>QUESTION {currentQuestion + 1} of 10</Typography>
            <Stack direction='row' spacing={1} sx={{/* border: '1px solid black',  */justifyContent: "space-around", alignItems: "center", padding: 1 }}>
                <Typography sx={{ padding: 1 }}>CAT: {questions[currentQuestion].category}</Typography>
                <Typography sx={{ padding: 1 }}>DIF: {questions[currentQuestion].difficulty}</Typography>
            </Stack>
            <Typography sx={{ padding: 1, textAlign: 'center', fontSize: 'larger', minHeight: '3em'}}>{questions[currentQuestion].question}</Typography>
            <Stack direction='column' spacing={1} sx={{padding: 1 }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Button
                        disabled={disabled0}
                        variant="contained"
                        style={answerButtonStyle}
                        onClick={()=> handleAnswerSelection(0)}> A
                    </Button>
                    <Typography style={answerBoxStyle} sx={{backgroundColor: borderColor0}}>
                        {randomAnswers[0]}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Button
                        disabled={disabled1}
                        variant="contained"
                        style={answerButtonStyle}
                        onClick={()=> handleAnswerSelection(1)}> B
                    </Button>
                    <Typography style={answerBoxStyle} sx={{backgroundColor: borderColor1}}>
                        {randomAnswers[1]}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Button
                        disabled={disabled2}
                        variant="contained"
                        style={answerButtonStyle}
                        onClick={()=> handleAnswerSelection(2)}> C
                    </Button>
                    <Typography style={answerBoxStyle} sx={{backgroundColor: borderColor2}}>
                        {randomAnswers[2]}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Button
                        disabled={disabled3}
                        variant="contained"
                        style={answerButtonStyle}
                        onClick={()=> handleAnswerSelection(3)}> D
                    </Button>
                    <Typography style={answerBoxStyle} sx={{backgroundColor: borderColor3}}>
                        {randomAnswers[3]}
                    </Typography>
                </Box>
                
            </Stack>
            <Button
                disabled={disabled}
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{ display: "flex", margin: 'auto', marginTop: 1, marginBottom: 1 }}
                onClick={handleNextQuestion}>
                Next Question
            </Button>
        </Box>
    );
}

export default Quiz;
