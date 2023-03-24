import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../../apis/theTriviaApi";
import { addQuestionNumber, setIsGameActive } from "../../../../features/gameData/gameDataSlice";
import { selectCategory, selectDifficulty } from "../../../../features/gameData/newGameOptionsDataSlice";
import { replaceQuestionData/* , resetQuestionData  */} from "../../../../features/gameData/questionDataSlice";
import { selectCurrentUser } from "../../../../features/userData/userDataSlice";

function NewGame() {

    const dispatch = useDispatch();
    const selectedDifficulty = useSelector(selectDifficulty)
    const selectedCategory = useSelector(selectCategory)
    const [disabled, setDisabled] = useState(true)
    const user = useSelector(selectCurrentUser);
    const currentDate = new Date().toISOString().slice(0, 10);
    const lastGamePlayedDate = user.lastGame?.slice(0, 10);
    const dateCheck = lastGamePlayedDate ? lastGamePlayedDate : '2020-01-01';

    useEffect(()=> {
        if(selectedDifficulty.length > 0 && selectedCategory.length > 0 && currentDate > dateCheck) {
            setDisabled(false)
            return
        }
        setDisabled(true)

    },[selectedDifficulty, selectedCategory, currentDate, dateCheck])
 
    async function handleGetQuestions() {
        const questions = await getQuestions(selectedDifficulty, selectedCategory)
        dispatch(replaceQuestionData(questions))
        dispatch(addQuestionNumber(1));
        dispatch(setIsGameActive(true));
        disabled === false ? setDisabled(true) : setDisabled(false)
    }

    return (
        <Button
            disabled={disabled}
            sx={{height: '2.8em', marginTop: 1, ml: 1, width:{xs: '100%', sm: 'fit-content'}}}
            variant='contained' 
            onClick={handleGetQuestions}>
            New Game
        </Button>
    );
}

export default NewGame;
