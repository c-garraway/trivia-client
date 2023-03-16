import { useState } from 'react';
import { useDispatch/* , useSelector */ } from 'react-redux';
import { /* selectCorrectAnswers, */ addToCorrectAnswers, addToTotalScore } from '../features/gameData/gameDataSlice';
import {theme} from '../theme/theme'

function useChoiceChecker(correctChoice) {
    //const correctAnswers = useSelector(selectCorrectAnswers); //TODO: To be removed
    const dispatch = useDispatch();

    const [choice, setChoice] = useState('Select Choice Below');
    const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0); //TODO: To be removed

    const handleChoice = (selectedChoice, buttonElement, /* paragraphElement, */ buttonElements, nextButtonElement, questionDifficulty) => {
        setChoice(selectedChoice)
        nextButtonElement.disabled = false
        nextButtonElement.style.cursor = 'pointer'
        nextButtonElement.style.opacity = 1

        buttonElements.forEach((buttonElement) => {
            buttonElement.disabled = true
            buttonElement.style.cursor = 'not-allowed'
        });

        if (selectedChoice === correctChoice) {
            buttonElement.style.backgroundColor = theme.palette.correctAnswer.main;
            setNumOfCorrectAnswers(numOfCorrectAnswers + 1) //TODO: To be removed
            dispatch(addToCorrectAnswers());
            //addToPoints diff 1, 2, 3
            console.log(questionDifficulty)
            switch(questionDifficulty) {
                case 'easy': {
                    dispatch(addToTotalScore(1))
                    break;
                }
                case 'medium': {
                    dispatch(addToTotalScore(2))
                    break;
                }
                default: {
                    dispatch(addToTotalScore(3))
                }
            }
        } else {
            buttonElement.style.backgroundColor = theme.palette.incorrectAnswer.main;
            /* paragraphElement.style.visibility = 'visible' */
        }
    };

    function clearBackground(buttonElements, /* paragraphElement,*/ nextButtonElement) {
        buttonElements.forEach((buttonElement) => {
            buttonElement.style.backgroundColor = theme.palette.primary.main;
            buttonElement.disabled = false
            buttonElement.style.cursor = 'pointer'
        });

        /* paragraphElement.style.visibility = 'hidden' */
        nextButtonElement.disabled = true
        nextButtonElement.style.cursor = 'not-allowed'
        nextButtonElement.style.opacity = .6

        setChoice('Select Choice Below')
    }
    return [choice, numOfCorrectAnswers, handleChoice, clearBackground]; //TODO: numOfCorrectAnswers To be removed
}

export default useChoiceChecker;