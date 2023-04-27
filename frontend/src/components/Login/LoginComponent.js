import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO:  login implementation
    }

    return (
        <div className="auth-form">
            <form className="login-form" onSubmit={handleSubmit}>
                <span>SIGN IN</span>
                <div className="input-control mt-3 mb-3">
                    <label htmlFor="floatingInput">Username</label>
                    <input id="floatingInput" type="text" placeholder="username"
                           value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="input-control mb-3">
                    <label htmlFor="floatingPassword">Password</label>
                    <input id="floatingPassword" type="password" placeholder="password"
                           value={password} onChange={handlePasswordChange}/>
                </div>
                <button className="action-button mt-2" type="submit">LOGIN</button>
                <Link to="/register" className="link-btn mt-2">Don't have an account yet? <strong>SIGN UP</strong> </Link>
            </form>
        </div>
    );
}