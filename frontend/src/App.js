import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
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
                <Route exact path="/" element={!token ? <Login onLogIn={SetToken}/> : <Navigate to={'/home'}/>}/>
                <Route exact path="/login" element={!token ? <Login onLogIn={SetToken}/> : <Navigate to={'/home'}/>}/>
                <Route exact path="/register" element={!token ? <Register onRegister={SetToken}/> : <Navigate to={'/home'}/>}/>
                <Route exact path="/home" element={token ? <Main/> : <Navigate to={'/login'}/>}/>
                <Route exact path="/all" element={token ? <AllRecipes/> : <Navigate to={'/login'}/>}/>
                <Route exact path="/profile" element={token ? <Profile/> : <Navigate to={'/login'}/>}/>
                <Route exact path="/favourites" element={token ? <Favourites/> : <Navigate to={'/login'}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
