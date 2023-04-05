import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { theme } from "../../../../theme/theme";
import PropTypes from 'prop-types';

function QuestionScores({questionScores, questions, category, totalPoints}) {
    const difficultyColor = theme.palette.difficulty
    const insetColor = theme.palette.inset.main;

    return (
        <Box sx={{border: '1px solid black', borderRadius: '5px', p: 1, mt: 1, mb: 1, backgroundColor: insetColor}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{mb: 0}}>{category}</Typography>
                <Typography sx={{mb: 0}}>Total Points: {totalPoints}</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: {xs: 'space-between', sm: 'space-evenly', md: 'space-between'}}}>
                {questionScores.map((questionScore, index) => {
                    let boxColor;
                    let questionDifficulty = [];
                    questions.forEach(dif => {
                        questionDifficulty.push(dif.difficulty)
                    })
                    const difficulty = questionDifficulty[index]
                    switch(difficulty) {
                        case 'hard':
                            boxColor = difficultyColor.hard
                            break;
                        case 'medium':
                            boxColor = difficultyColor.medium
                            break;
                        case 'easy':
                            boxColor = difficultyColor.easy
                            break;
                        default:
                            boxColor = insetColor
                    }

                    return(
                        <div key={index}>
                            <Box sx={{
                                border: `.5px solid black`,
                                borderRadius: '5px',
                                width: 15,
                                padding: 1,
                                textAlign: 'center',
                                backgroundColor: boxColor,
                            }}>
                                <Typography sx={{fontSize: 'larger'}}>{questionScore}</Typography>        
                            </Box>
                        </div>
                    )
                })}
            </Box>
        </Box>
    )
}

QuestionScores.propTypes = {
    questionScores: PropTypes.array.isRequired, 
    questions: PropTypes.array, 
    category: PropTypes.string.isRequired, 
    totalPoints: PropTypes.number.isRequired,
};

QuestionScores.defaultProps = {
    questionScores: [], 
    questions: [], 
    category: '', 
    totalPoints: 0, 
};

export default QuestionScores;