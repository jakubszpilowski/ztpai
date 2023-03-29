import React, {useState} from 'react';
import '../styles/Login.css'
import {LoginComponent} from "../components/LoginComponent";
import {RegisterComponent} from "../components/RegisterComponent";
import {LogoComponent} from "../components/LogoComponent";

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