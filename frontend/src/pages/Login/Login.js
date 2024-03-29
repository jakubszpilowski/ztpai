import React from 'react';
import './Login.css'
import {LoginComponent} from "../../components/Login/LoginComponent";
import {LogoComponent} from "../../components/Logo/LogoComponent";

function Login() {
    return (
        <div className="page-content">
            <LoginComponent/>
            <LogoComponent/>
        </div>
    );
}

export default Login;