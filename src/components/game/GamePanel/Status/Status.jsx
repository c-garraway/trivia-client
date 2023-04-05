import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React, { useEffect, useRef, useState } from "react";
import { selectIsGameFinished, resetGameData, selectTotalScore } from '../../../../features/gameData/gameDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { resetQuestionData } from '../../../../features/gameData/questionDataSlice';
import QuestionScores from './QuestionScores';
import { resetNewGameOptionsData, selectCategory } from '../../../../features/gameData/newGameOptionsDataSlice';
import { selectQuestionScores } from "../../../../features/gameData/gameDataSlice";
import { selectQuestions } from "../../../../features/gameData/questionDataSlice";
import html2canvas from 'html2canvas';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: "90%", sm: "50%", md: "30%"},
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
    const shareScoresRef = useRef();
    const currentDate = new Date().toISOString().slice(0, 10);

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

    async function handleShare() {
        const canvas = await html2canvas(shareScoresRef.current);
        canvas.toBlob(async (blob) => {
          const file = new File([blob], 'share-scores.png', { type: 'image/png' });
          if ( navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                files: [file],
                title: 'Team Trivia',
                text: `${currentDate}`
              });
              console.log('Thanks for sharing!');
            } catch (error) {
              console.error('There was an error sharing the file:', error);
            }
          } else {
            console.log('Your system does not support sharing files.');
          }
        });
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
                <Typography>See points distribution below.</Typography>
                    <div ref={shareScoresRef}>
                        <QuestionScores
                            questionScores={questionScores}
                            questions={questions}
                            category={category}
                            totalPoints={totalScore}
                        />
                    </div>
                <Box sx={{display: 'flex'}}>
                    <Button
                        variant="contained"
                        onClick={handleShare}
                        >
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