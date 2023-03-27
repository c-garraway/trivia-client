import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import { selectIsGameFinished, resetGameData, selectTotalScore } from '../../../../features/gameData/gameDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { resetQuestionData } from '../../../../features/gameData/questionDataSlice';
import QuestionScores from './QuestionScores';
import { resetNewGameOptionsData, selectCategory } from '../../../../features/gameData/newGameOptionsDataSlice';
import { selectQuestionScores } from "../../../../features/gameData/gameDataSlice";
import { selectQuestions } from "../../../../features/gameData/questionDataSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: "80%", sm: "50%", md: "30%"},
    maxHeight: '80%',
    backgroundColor: 'white',
    border: '2px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    padding: 1,
};


function Status() {
    const dispatch = useDispatch();
    const isGameFinished = useSelector(selectIsGameFinished)
    const totalScore = useSelector(selectTotalScore);
    const category = useSelector(selectCategory);
    const questionScores = useSelector(selectQuestionScores);
    const questions = useSelector(selectQuestions);
    const [open, setOpen] = useState(false);

    useEffect(()=> {
        if(isGameFinished) {
            setOpen(true)
        }
    },[isGameFinished])

    function handleClose() {
        setOpen(false);
        dispatch(resetGameData());
        dispatch(resetQuestionData());
        dispatch(resetNewGameOptionsData())
    }

    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose} >
            <Box
                sx={style} >
                <Typography sx={{fontWeight: 'bold'}}>Today's Game Result</Typography>
                <Typography>See you tomorrow for more exciting questions.</Typography>
                {/* <Typography>Total Score: {totalScore}</Typography> */}
                <Typography>See points distribution below.</Typography>
                {/* <Box sx={{border: '1px solid black', borderRadius: '5px', p: 1, mt: 1, mb: 1}}>
                    <Typography sx={{mb: 0}}>{category}</Typography> */}
                    <QuestionScores
                        questionScores={questionScores}
                        questions={questions}
                        category={category}
                        totalPoints={totalScore}
                    />
                {/* </Box> */}
                <Box sx={{display: 'flex'/* , justifyContent: 'center' */}}>
                    <Button
                        disabled
                        variant="contained">
                        Share
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleClose}
                        sx={{ml: 1}}>
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
        </div>
    );
}

export default Status;