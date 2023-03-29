import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Box } from '@mui/material';
import Home from "../components/main/Home"
import Navbar from "../components/main/Navbar"
import Login from "../components/user/Login"
import Register from "../components/user/Register"
import Profile from "../components/user/Profile"
import GameBoard from "../components/game/GameBoard"
//import Rules from '../components/game/Rules';

function AppRouter() {

    return (
        <Router>
            <Box>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/profile' element={<Profile/>} />
                    {/* <Route path='/rules' element={<Rules/>} /> */}
                    <Route path='/game' element={<GameBoard/>} />       
                </Routes>
            </Box>
        </Router>
    )
}

export default AppRouter;