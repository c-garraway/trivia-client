import { Box, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useChoiceChecker from '../../../../hooks/useChoiceChecker';
import { selectQuestionNumber, selectQuestionScores, selectTotalScore, toggleIsGameFinished } from '../../../../features/gameData/gameDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeamRanks, getTeamPoints, updateDailyPoints } from '../../../../apis/points';
import { selectCategory, selectDifficulty } from '../../../../features/gameData/newGameOptionsDataSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { setAllTeamRanks, setTeamPoints } from '../../../../features/pointsData/pointsDataSlice';
import { getUser } from '../../../../apis/auth';
import { setCurrentUser } from '../../../../features/userData/userDataSlice';
import { theme } from '../../../../theme/theme';

const answerButtonStyle = {
    width: '100%',
    height: '4em',
    textTransform: 'none',
    marginBottom: 10,
    lineHeight: '95%',
    fontWeight: 'normal',
}

const nextButtonStyle = {
    opacity: .6,
    cursor: 'not-allowed',
    width: '100%',
    height: '4em',
    textTransform: 'none',
    marginTop: 10,
    backgroundColor: theme.palette.secondary.main,
}

function MultipleChoiceQuestions({ question, choices, correctAnswer, handleNextQuestion, questionDifficulty }) {
    const difficultyColor = theme.palette.difficulty
    const insetColor = theme.palette.inset.main;
    const dispatch = useDispatch();
    const questionNumber = useSelector(selectQuestionNumber);
    const dailyPointsBlock = useSelector(selectQuestionScores);
    const dailyPointsTotal = useSelector(selectTotalScore);
    const difficulty = useSelector(selectDifficulty);
    const category = useSelector(selectCategory);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const localCurrentDate = new Date().toLocaleDateString('en-CA', options);
    let isVisible;
    let boxColor;

    const [handleChoice, clearBackground] = useChoiceChecker(correctAnswer);

    switch(questionDifficulty) {
        case 'hard':
            boxColor = difficultyColor.hard
            break;
        case 'medium':
            boxColor = difficultyColor.medium
            break;
        case 'easy':
            boxColor = difficultyColor.easy
            break;
        default:
            boxColor = insetColor
    }

    if(questionNumber === 1) {
        isVisible = 'hidden'
    }

    const buttonNextRef = useRef();
    const nextButtonElement = buttonNextRef.current

    const buttonARef = useRef();
    const buttonBRef = useRef();
    const buttonCRef = useRef();
    const buttonDRef = useRef();
    const buttonElements = [buttonARef.current, buttonBRef.current, buttonCRef.current, buttonDRef.current];
    
    async function handleGameFinished() {
        if(questionNumber === 10) {
            dispatch(toggleIsGameFinished());
            const update = await updateDailyPoints(category, difficulty, dailyPointsTotal, dailyPointsBlock, localCurrentDate)
            if(update) {
                await getTeamPoints().then((teamPoints) => dispatch(setTeamPoints(teamPoints)));
                await getAllTeamRanks().then((allTeamRanks) => dispatch(setAllTeamRanks(allTeamRanks)));
                await getUser().then((user) => dispatch(setCurrentUser(user)));
                return;
            }
            // Failure message alert
            alert('Your daily points were not successfully saved! You must have a teammate.')
            return;
        }
        return;
    }

    return (
        <Box sx={{padding: 1}}>
            <Typography sx={{minHeight: 50, mb: 1}} >
                <Typography variant='span' sx={{backgroundColor: boxColor, color: 'black', mr: 1, pt: .3, pb: .3, pl: 1, pr: 1, borderRadius: '5px', textTransform: 'uppercase'}}> {questionDifficulty}</Typography>
            {question}</Typography>
            <Button style={answerButtonStyle} variant='contained' ref={buttonARef} onClick={(e) => handleChoice(choices[0], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[0]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonBRef} onClick={(e) => handleChoice(choices[1], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[1]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonCRef} onClick={(e) => handleChoice(choices[2], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[2]}</Button>
            <Button style={answerButtonStyle} variant='contained' ref={buttonDRef} onClick={(e) => handleChoice(choices[3], e.target, buttonElements, nextButtonElement, questionDifficulty)}>{choices[3]}</Button>
            <Button
                sx={{visibility: isVisible}}
                style={nextButtonStyle}
                variant='contained' 
                endIcon={<ArrowForwardIosIcon />}
                ref={buttonNextRef}
                onClick={()=> {handleNextQuestion(); clearBackground(buttonElements, nextButtonElement); handleGameFinished()}}>
                NEXT
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
