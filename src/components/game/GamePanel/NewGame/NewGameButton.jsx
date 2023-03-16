import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../../apis/theTriviaApi";
import { selectCategory, selectDifficulty, resetNewGameOptionsData } from "../../../../features/gameData/newGameOptionsDataSlice";
import { replaceQuestionData/* , resetQuestionData  */} from "../../../../features/gameData/questionDataSlice";

function NewGame() {

    const dispatch = useDispatch();
    const selectedDifficulty = useSelector(selectDifficulty)
    const selectedCategory = useSelector(selectCategory)
    const [disabled, setDisabled] = useState(true)

    useEffect(()=> {
        if(selectedDifficulty.length > 0 && selectedCategory.length > 0) {
            setDisabled(false)
            return
        }
        setDisabled(true)

    },[selectedDifficulty, selectedCategory])
 
    async function handleGetQuestions() {
        const questions = await getQuestions(selectedDifficulty, selectedCategory)
        dispatch(replaceQuestionData(questions))
        dispatch(resetNewGameOptionsData())
    }

    return (
        <Button
            disabled={disabled}
            sx={{height: '2.8em', marginTop: 1, width:{xs: '100%', sm: 'fit-content'}}}
            variant='contained' 
            onClick={handleGetQuestions}>
            New Game
        </Button>
    );
}

export default NewGame;
