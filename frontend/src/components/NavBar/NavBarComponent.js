import {MinLogoComponent} from "./MinLogoComponent";
import "./NavBar.css";
import {SearchBarComponent} from "./SearchBarComponent";
import {MenuButtonsComponent} from "./MenuButtonsComponent";
import {MenuTogglerComponent} from "./MenuTogglerComponent";
import {useEffect, useState} from "react";
import axios from "axios";

export const NavBarComponent = () => {
    const [userId, setUserId] = useState('');
    const [isUserSet, setIsUserSet] = useState(false);

    useEffect(() => {
        if(!isUserSet) {
            loadUserID();
        }
    }, [userId]);

    const loadUserID = async () => {
        if(!localStorage.getItem("user") || localStorage.getItem("user") === '') {
            const result = await axios.get('http://localhost:8080/api/users');
            setIsUserSet(true);
            localStorage.setItem("user", result.data);
            setUserId(result.data);
        }
             else {
            setUserId(localStorage.getItem("user"));
            setIsUserSet(true);
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