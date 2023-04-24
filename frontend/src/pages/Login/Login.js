import React, {useState} from 'react';
import './Login.css'
import {LoginComponent} from "../../components/Login/LoginComponent";
import {RegisterComponent} from "../../components/Register/RegisterComponent";
import {LogoComponent} from "../../components/Logo/LogoComponent";

function Login() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    };

    return (
        <div className="page-content">
            {
                currentForm === 'login' ?  <LoginComponent onFormSwitch={toggleForm}/> : <RegisterComponent onFormSwitch={toggleForm}/>
            }
            <LogoComponent/>
        </div>
    );
}

export default Login;