import { useDispatch} from 'react-redux';
import { addToCorrectAnswers, addToTotalScore, addToQuestionScores } from '../features/gameData/gameDataSlice';
import {theme} from '../theme/theme'

function useChoiceChecker(correctChoice) {
    const dispatch = useDispatch();

    const handleChoice = (selectedChoice, buttonElement, buttonElements, nextButtonElement, questionDifficulty) => {
        nextButtonElement.disabled = false
        nextButtonElement.style.visibility = 'visible'
        nextButtonElement.style.cursor = 'pointer'
        nextButtonElement.style.opacity = 1

        buttonElements.forEach((buttonElement) => {
            buttonElement.disabled = true
            buttonElement.style.cursor = 'not-allowed'
        });

        if (selectedChoice === correctChoice) {
            buttonElement.style.backgroundColor = theme.palette.correctAnswer.main;
            dispatch(addToCorrectAnswers());
            console.log(questionDifficulty)
            switch(questionDifficulty) {
                case 'easy': {
                    dispatch(addToTotalScore(1))
                    dispatch(addToQuestionScores(1))
                    break;
                }
                case 'medium': {
                    dispatch(addToTotalScore(2))
                    dispatch(addToQuestionScores(2))
                    break;
                }
                default: {
                    dispatch(addToTotalScore(3))
                    dispatch(addToQuestionScores(3))
                }
            }
        } else {
            buttonElement.style.backgroundColor = theme.palette.incorrectAnswer.main;
            dispatch(addToQuestionScores(0))
        }
    };

    function clearBackground(buttonElements, nextButtonElement) {
        buttonElements.forEach((buttonElement) => {
            buttonElement.style.backgroundColor = theme.palette.primary.main;
            buttonElement.disabled = false
            buttonElement.style.cursor = 'pointer'
        });

        nextButtonElement.disabled = true
        nextButtonElement.style.cursor = 'not-allowed'
        nextButtonElement.style.opacity = .6
    }
    return [handleChoice, clearBackground];
}

export default useChoiceChecker;