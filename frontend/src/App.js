import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Test from "./pages/Test";
import Main from "./pages/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Test/>}>
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
