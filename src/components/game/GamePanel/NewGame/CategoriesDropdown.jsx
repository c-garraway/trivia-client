import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getQuestionCategories } from "../../../../apis/theTriviaApi";
import { setCategory } from "../../../../features/gameData/newGameOptionsDataSlice";

function CategoriesDropdown() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        async function getCategories() {
            try {
                const cats = await getQuestionCategories()
                if(cats) {
                    const temp = []
                    for(let key in cats) {
                        temp.push(key)
                    }
                    setCategories(temp)
                    return;
                }
                throw new Error('no category returned')

            } catch (error) {
                console.error(error.message)
            }
        };
        getCategories();
    },[])

    return (
        <Box>
            <TextField
                select
                label="Categories"
                size="small"
                defaultValue=""
                sx={{width: '25ch', margin: 1}}
                onChange={(e) => {dispatch(setCategory(e.target.value))}}
                >
                {categories.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}

export default CategoriesDropdown;
