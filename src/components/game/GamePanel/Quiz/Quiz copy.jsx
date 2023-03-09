import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { addToCorrectAnswers } from "../../../../features/gameData/gameDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../../../features/gameData/questionDataSlice";
import { answerBoxStyle, answerButtonStyle } from "../../../../styles/styles";
/* import theme from "../../../../theme/theme"; */
import Answer from "./Answer";
import useAnswer from "../../../../hooks/useAnswer";
import useButton from "../../../../hooks/useButton";

function Quiz() {
    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [randomAnswers, setRandomAnswers] = useState([]);
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

    const [handleAnswer, backgroundColor, buttonLabel, answer] = useAnswer('testAnswer', 'testAnswer', 3);
    console.log('newAnswer: ' + handleAnswer, backgroundColor, buttonLabel, answer)

/*     const [newerAnswer, setNewerAnswer] = useButton('test');
    console.log(newerAnswer) */

    function getAnswers() {
        answers.push(questions[currentQuestionIndex].incorrectAnswers[0])
        answers.push(questions[currentQuestionIndex].incorrectAnswers[1])
        answers.push(questions[currentQuestionIndex].incorrectAnswers[2])
        answers.push(questions[currentQuestionIndex].correctAnswer)
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
        //console.log('A2 ' + answers)
    }

    function setAnswers() {
        answers = []
        shuffleAnswers(getAnswers())
        setRandomAnswers(answers)
        //console.log('A3 ' + answers)
    }

    useEffect(() => {
        setAnswers()
    }, [currentQuestionIndex])

    function handleAnswerSelection(x) {
        //TODO: check answer and allocate points
        if((currentQuestionIndex + 1) < questions.length) {
            setDisabled(false);
        }
        
        console.log(x)
        if (randomAnswers[x] === questions[currentQuestionIndex].correctAnswer) {

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
        
        setCurrentQuestionIndex(currentQuestionIndex + 1)
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
            <Typography sx={{ padding: 1, textAlign: 'center', fontSize: 'x-large' }}>QUESTION {currentQuestionIndex + 1} of 10</Typography>
            <Stack direction='row' spacing={1} sx={{/* border: '1px solid black',  */justifyContent: "space-around", alignItems: "center", padding: 1 }}>
                <Typography sx={{ padding: 1 }}>CAT: {questions[currentQuestionIndex].category}</Typography>
                <Typography sx={{ padding: 1 }}>DIF: {questions[currentQuestionIndex].difficulty}</Typography>
            </Stack>
            <Typography sx={{ padding: 1, textAlign: 'center', fontSize: 'larger', minHeight: '3em'}}>{questions[currentQuestionIndex].question}</Typography>
            <Stack direction='column' spacing={1} sx={{padding: 1 }}>
                {randomAnswers.map((answer, index) => {
                    return (
                        <div key={index}>
                            <Answer
                                answer={answer} />
                        </div>
                    )
                })} {/* disabled, onClick, backgroundColor, answer */}
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
