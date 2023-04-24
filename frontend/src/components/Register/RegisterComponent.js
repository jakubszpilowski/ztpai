import React, {useState} from "react";

export const RegisterComponent = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO:  register implementation
    }

    return (
        <div className="auth-form">
            <form className="register-form" onSubmit={handleSubmit}>
                <span>SIGN UP</span>
                <div className="input-control mt-3 mb-1">
                    <label htmlFor="floatingInput">Username</label>
                    <input id="floatingInput" type="text" placeholder="username"
                           value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="input-control mb-1">
                    <label htmlFor="floatingPassword">Password</label>
                    <input id="floatingPassword" type="password" placeholder="password"
                           value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="input-control mb-3">
                    <label htmlFor="floatingInput">Email</label>
                    <input id="floatingInput" type="email" placeholder="email"
                           value={email} onChange={handleEmailChange}/>
                </div>
                <button className="action-button mt-1" type="submit">REGISTER</button>
                <button className="action-button mt-1" onClick={() => props.onFormSwitch('login')}> back </button>
            </form>
        </div>
    );
}