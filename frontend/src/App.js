import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}>
                </Route>
                <Route exact path="/login" element={<Login/>}>
                </Route>
                <Route exact path="/home" element={<Main/>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
