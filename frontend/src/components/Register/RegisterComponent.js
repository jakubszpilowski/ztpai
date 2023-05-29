import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {SetToken} from "../../auth/SetToken";

export const RegisterComponent = () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        checkUsername(username);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPassword(password);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        checkEmail(email);
    };

    const checkUsername = (username) => {
        if (username.length < 4) {
            setError("Username too short");
        } else if (username === '') {
            setError("Username is required");
        } else {
            setError('');
        }
    }

    const checkEmail = (email) => {
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError("Email is invalid");
        } else {
            setError('');
        }
    }

    const checkPassword = (password) => {
        if (password === '') {
            setError('Password is required');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters long');
        } else if (!/\d/.test(password)) {
            setError('Password must contain at least one number');
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one capital letter');
        } else {
            setError('');
        }
    }

    const checkErrors = error !== '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: "POST",
                body: JSON.stringify({username, password, email}),
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
            setError('Network problem');
        }
    }

    return (
        <div className="auth-form">
            <form className="register-form" onSubmit={handleSubmit}>
                <span>SIGN UP</span>
                {error && <div className="mb-1 form group error-msg">{error}</div>}
                <div className="input-control mt-3 mb-1">
                    <label htmlFor="floatingInput">Username</label>
                    <input id="floatingInput" type="text"
                           placeholder="username"
                           value={username}
                           onChange={handleUsernameChange}/>
                </div>
                <div className="input-control mb-1">
                    <label htmlFor="floatingPassword">Password</label>
                    <input id="floatingPassword" type="password" placeholder="password"
                           value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="input-control mb-3">
                    <label htmlFor="floatingInputEmail">Email</label>
                    <input id="floatingInputEmail" type="email" placeholder="email"
                           value={email} onChange={handleEmailChange}/>
                </div>
                <button className="action-button mt-1" type="submit" disabled={checkErrors}>REGISTER</button>
                <Link to="/login" className="link-btn mt-1 no-decoration"> Already have an account?  <strong>LOG IN</strong> </Link>
            </form>
        </div>
    );
}