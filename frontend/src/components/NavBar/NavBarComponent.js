import {MinLogoComponent} from "./MinLogoComponent";
import "./NavBar.css";
import {SearchBarComponent} from "./SearchBarComponent";
import {MenuButtonsComponent} from "./MenuButtonsComponent";
import {MenuTogglerComponent} from "./MenuTogglerComponent";
import axios from "axios";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const NavBarComponent = () => {
    const token = localStorage.getItem("token");
    let navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const { pathId } = useParams();

    console.log(pathId);

    if(!token) {
        navigate('/login');
    } else {
        axios.get('http://localhost:8080/api/users').then(response => {
            setUserId(response.data);
        }).catch(e => {
            console.log(e);
        })
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