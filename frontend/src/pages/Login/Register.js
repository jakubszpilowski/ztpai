import React from 'react';
import './Login.css'
import {RegisterComponent} from "../../components/Register/RegisterComponent";
import {LogoComponent} from "../../components/Logo/LogoComponent";

function Register() {
    return (
        <div className="page-content">
            <RegisterComponent/>
            <LogoComponent/>
        </div>
    );
}

export default Register;