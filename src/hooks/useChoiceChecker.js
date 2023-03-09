import { useState } from 'react';
import {theme} from '../theme/theme'

function useChoiceChecker(correctChoice) {
    const [choice, setChoice] = useState('Select Choice Below');
    const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

    const handleChoice = (selectedChoice, buttonElement, paragraphElement, buttonElements, nextButtonElement) => {
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
            setNumOfCorrectAnswers(numOfCorrectAnswers + 1)
        } else {
            buttonElement.style.backgroundColor = theme.palette.incorrectAnswer.main;
            paragraphElement.style.visibility = 'visible'
        }
    };

    function clearBackground(buttonElements, paragraphElement, nextButtonElement) {
        buttonElements.forEach((buttonElement) => {
            buttonElement.style.backgroundColor = theme.palette.primary.main;
            buttonElement.disabled = false
            buttonElement.style.cursor = 'pointer'
        });

        paragraphElement.style.visibility = 'hidden'
        nextButtonElement.disabled = true
        nextButtonElement.style.cursor = 'not-allowed'
        nextButtonElement.style.opacity = .6

        setChoice('Select Choice Below')
    }
    return [choice, numOfCorrectAnswers, handleChoice, clearBackground];
}

export default useChoiceChecker;