import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Register from "./pages/Login/Register"
import {SetToken} from "./auth/SetToken";
import Profile from "./pages/Profile/Profile";
import Favourites from "./pages/Favourites/Favourites";
import AllRecipes from "./pages/All/AllRecipes";

function App() {
    const token = localStorage.getItem("token");
    if(token) {
        SetToken(token);
    }

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/home" element={<Main/>}/>
                <Route exact path="/all" element={<AllRecipes/>}/>
                <Route exact path="/profile/:id" element={<Profile/>}/>
                <Route exact path="/fav/:id" element={<Favourites/>}/>
            </Routes>
        </Router>
    );
}

export default App;
