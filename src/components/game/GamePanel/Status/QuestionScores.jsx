import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectQuestionScores } from "../../../../features/gameData/gameDataSlice";

const style = {
    border: '1px solid black',
    width: 15,
    //height: 15,
    marginTop: 2,
    marginBottom: 2,
    padding: 1,
    textAlign: 'center',
}

function QuestionScores() {
    const questionScores = useSelector(selectQuestionScores)
    console.log(questionScores)
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            {questionScores.map((question, index) => {
                return(
                    <div key={index}>
                        <Box sx={style}>
                            <Typography>{question}</Typography>        
                        </Box>
                    </div>
                )
            })}
        </Box>
    )
}

export default QuestionScores;
