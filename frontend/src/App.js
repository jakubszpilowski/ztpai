import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Register from "./pages/Login/Register"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/home" element={<Main/>}/>
            </Routes>
        </Router>
    );
}

export default App;
