import {MinLogoComponent} from "./MinLogoComponent";
import "./NavBar.css";
import {SearchBarComponent} from "./SearchBarComponent";
import {MenuButtonsComponent} from "./MenuButtonsComponent";
import {MenuTogglerComponent} from "./MenuTogglerComponent";
import axios from "axios";
import {useEffect, useState} from "react";

export const NavBarComponent = () => {
    const [userId, setUserId] = useState('');

    useEffect(() => {
        loadUserID().then();
    }, []);

    const loadUserID = async () => {
        if(!localStorage.getItem("user_id") || localStorage.getItem("user_id") === '') {
            const result = await axios.get('http://localhost:8080/api/users');
            setUserId(result.data);
            localStorage.setItem("user_id", userId);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg main-header">
            <MinLogoComponent/>
            <SearchBarComponent/>
            <MenuTogglerComponent/>
            <MenuButtonsComponent userId={userId}/>
        </nav>
    );
}