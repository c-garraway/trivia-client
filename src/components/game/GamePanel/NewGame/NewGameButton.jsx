import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../../apis/theTriviaApi";
import { addQuestionNumber, selectIsGameActive, setIsGameActive } from "../../../../features/gameData/gameDataSlice";
import { selectCategory, selectDifficulty } from "../../../../features/gameData/newGameOptionsDataSlice";
import { replaceQuestionData} from "../../../../features/gameData/questionDataSlice";
import { selectCurrentUser } from "../../../../features/userData/userDataSlice";

function NewGame() {

    const dispatch = useDispatch();
    const selectedDifficulty = useSelector(selectDifficulty)
    const selectedCategory = useSelector(selectCategory)
    const gameIsActive = useSelector(selectIsGameActive)
    const [disabled, setDisabled] = useState(true)
    const user = useSelector(selectCurrentUser);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const localCurrentDate = new Date().toLocaleDateString('en-CA', options);
    //const currentDate = new Date().toISOString().slice(0, 10);
    const lastGamePlayedDate = user.lastGame?.slice(0, 10);
    const dateCheck = lastGamePlayedDate ? lastGamePlayedDate : '2020-01-01';

    useEffect(()=> {
        if(selectedDifficulty.length > 0 && selectedCategory.length > 0 && localCurrentDate > dateCheck && gameIsActive === false ) {
            setDisabled(false)
            return
        }
        setDisabled(true)

    },[selectedDifficulty, selectedCategory, localCurrentDate, dateCheck, gameIsActive])
 
    async function handleGetQuestions() {
        await getQuestions(selectedDifficulty, selectedCategory).then((questions) => dispatch(replaceQuestionData(questions)));

        dispatch(addQuestionNumber(1));
        dispatch(setIsGameActive(true));
        disabled === false ? setDisabled(true) : setDisabled(false)
    }

    return (
        <Button
            disabled={disabled}
            sx={{height: '2.8em', marginTop: 1, ml:1, mr: 1, mb: 1, width:{xs: '100%', sm: 'fit-content'}}}
            variant='contained' 
            onClick={handleGetQuestions}>
            New Game
        </Button>
    );
}

export default NewGame;
