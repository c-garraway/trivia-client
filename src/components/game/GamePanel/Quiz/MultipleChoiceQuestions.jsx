import { Box, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useChoiceChecker from '../../../../hooks/useChoiceChecker';
import { answerButtonStyle, nextButtonStyle } from '../../../../styles/styles';

function MultipleChoiceQuestions({ question, choices, correctAnswer, handleNextQuestion, questionDifficulty }) {
    // eslint-disable-next-line
    const [choice, numOfCorrectAnswers, handleChoice, clearBackground] = useChoiceChecker(correctAnswer);

    const buttonNextRef = useRef();
    const nextButtonElement = buttonNextRef.current

    const buttonARef = useRef();
    const buttonBRef = useRef();
    const buttonCRef = useRef();
    const buttonDRef = useRef();
    const buttonElements = [buttonARef.current, buttonBRef.current, buttonCRef.current, buttonDRef.current];
    
    return (
        <Box sx={{padding: 1}}>
            <Typography sx={{padding: 1, minHeight: 50}} >[ {questionDifficulty} ] {question}</Typography>
            <Button style={answerButtonStyle} variant='contained' ref={buttonARef} onClick={(e) => handleChoice(choices[0], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[0]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonBRef} onClick={(e) => handleChoice(choices[1], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[1]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonCRef} onClick={(e) => handleChoice(choices[2], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[2]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonDRef} onClick={(e) => handleChoice(choices[3], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[3]}</Button>
            <Button
                style={nextButtonStyle}
                variant='contained' 
                ref={buttonNextRef}
                onClick={()=> {handleNextQuestion(); clearBackground(buttonElements, nextButtonElement)}}>
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

MultipleChoiceQuestions.defaultProps = {
    question: '', 
    choices: [], 
    correctAnswer: '', 
};

export default MultipleChoiceQuestions;
