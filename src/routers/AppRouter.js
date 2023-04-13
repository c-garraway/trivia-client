import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Box } from '@mui/material';
import Home from "../components/main/Home"
import Navbar from "../components/main/Navbar"
import Login from "../components/user/Login"
import Register from "../components/user/Register"
import Profile from "../components/user/Profile"
import GameBoard from "../components/game/GameBoard"
import ProtectedRoutes from './ProtectedRoutes';
import PublicOnlyRoutes from './PublicOnlyRoutes';


function AppRouter() {

    return (
        <Router>
            <Box>
                <Navbar/>
                <Routes>
                    <Route element={<PublicOnlyRoutes />} > 
                        <Route path='/' element={<Home/>} exact/>
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                    </Route>
                    <Route element={<ProtectedRoutes/>} > 
                        <Route path='/profile' element={<Profile/>} />
                        <Route path='/game' element={<GameBoard/>} /> 
                    </Route>
                </Routes>
            </Box>
        </Router>
    )
}

export default AppRouter;