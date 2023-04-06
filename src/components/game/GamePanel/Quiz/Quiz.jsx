import { Box } from "@mui/material";
import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addQuestionNumber } from "../../../../features/gameData/gameDataSlice";
import { selectQuestions } from "../../../../features/gameData/questionDataSlice";
import MultipleChoiceQuestions from './MultipleChoiceQuestions';
import {theme} from '../../../../theme/theme'

function Quiz() {
    const insetColor = theme.palette.inset.main;
    const mattColor = theme.palette.matt.main;

    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions);

    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex]?.question
    const questionDifficulty = questions[currentQuestionIndex]?.difficulty
    const correctAnswer = questions[currentQuestionIndex]?.correctAnswer
    let answers = []

    function getAnswers() {
        const incorrectAnswers = questions[currentQuestionIndex]?.incorrectAnswers
        for(let i = 0; i < incorrectAnswers?.length; i++) {
            answers.push(questions[currentQuestionIndex]?.incorrectAnswers[i])
        }
        answers.push(questions[currentQuestionIndex]?.correctAnswer)
        return answers
    };

    function shuffleAnswers (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function setAnswers() {
        answers = []
        shuffleAnswers(getAnswers())
        setShuffledAnswers(answers)
    }

    useEffect(() => {
        setAnswers()
        // eslint-disable-next-line
    }, [currentQuestionIndex, questions])

    function handleNextQuestion() {
        if(currentQuestionIndex === questions.length - 1) {
            return;
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        dispatch(addQuestionNumber(currentQuestionIndex + 2))
    }
    return (
        <Box sx={{border: `2px solid ${mattColor}`, borderRadius: '5px', backgroundColor: insetColor, opacity: '.9'}}>
            <MultipleChoiceQuestions
                question={currentQuestion}
                choices={shuffledAnswers}
                correctAnswer={correctAnswer}
                handleNextQuestion={handleNextQuestion}
                questionDifficulty={questionDifficulty}
            />
        </Box>
    );
}

export default Quiz;