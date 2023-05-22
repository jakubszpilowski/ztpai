import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import {SetToken} from "../../auth/SetToken";

export const LoginComponent = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: "POST",
                body: JSON.stringify({username, password}),
                headers: { 'Content-Type': 'application/json' }
            });

            if(response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem("token", token);
                SetToken(token);
                navigate("/home");
            } else {
                const errData = await response.json();
                setError(errData.message);
            }
        } catch (e) {
            console.log(e);
            setError('Invalid username or password');
        }
    };

    return (
        <div className="auth-form">
            <form className="login-form" onSubmit={handleSubmit}>
                <span>SIGN IN</span>
                {error && <div className="mb-1 form group error-msg">{error}</div>}
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
                <Link to="/register" className="link-btn mt-2 no-decoration">Don't have an account yet? <strong>SIGN UP</strong> </Link>
            </form>
        </div>
    );
}