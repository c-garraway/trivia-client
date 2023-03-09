import { Box, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useChoiceChecker from '../../../../hooks/useChoiceChecker';
import { answerButtonStyle, nextButtonStyle, questionBoxStyle } from '../../../../styles/styles';

function MultipleChoiceQuestions({ question, choices, correctAnswer, handleNextQuestion }) {

    const [choice, numOfCorrectAnswers, handleChoice, clearBackground] = useChoiceChecker(correctAnswer);

    const pRef = useRef();
    const paragraphElement = pRef.current

    const buttonNextRef = useRef();
    const nextButtonElement = buttonNextRef.current

    const buttonARef = useRef();
    const buttonBRef = useRef();
    const buttonCRef = useRef();
    const buttonDRef = useRef();
    const buttonElements = [buttonARef.current, buttonBRef.current, buttonCRef.current, buttonDRef.current];
    
    return (
        <Box sx={{padding: 1}}>
            <Typography style={questionBoxStyle} >{question}</Typography>
            <Typography sx={{height: '4em'}}>Selected Answer: {choice}</Typography>
            <Typography sx={{visibility: 'hidden', height: '4em'}} ref={pRef} className='correct-answer'>correct Answer: {correctAnswer}</Typography>
            <Typography >Number of correct Answers: {numOfCorrectAnswers}</Typography>
            <Button style={answerButtonStyle} variant='contained' ref={buttonARef} onClick={(e) => handleChoice(choices[0], e.target, paragraphElement, buttonElements, nextButtonElement)}>{choices[0]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonBRef} onClick={(e) => handleChoice(choices[1], e.target, paragraphElement, buttonElements, nextButtonElement)}>{choices[1]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonCRef} onClick={(e) => handleChoice(choices[2], e.target, paragraphElement, buttonElements, nextButtonElement)}>{choices[2]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonDRef} onClick={(e) => handleChoice(choices[3], e.target, paragraphElement, buttonElements, nextButtonElement)}>{choices[3]}</Button>
            <Button
                style={nextButtonStyle}
                variant='contained' 
                ref={buttonNextRef}
                onClick={()=> {handleNextQuestion(); clearBackground(buttonElements, paragraphElement, nextButtonElement)}}>
                Next Question
            </Button>
        </Box>
    );    
};

MultipleChoiceQuestions.propTypes = {
    question: PropTypes.string.isRequired, 
    choices: PropTypes.array.isRequired, 
    correctAnswer: PropTypes.string.isRequired, 
    handleNextQuestion: PropTypes.func.isRequired,
};

export default MultipleChoiceQuestions;
