import React from 'react';
import {NavBarComponent} from "../../components/NavBar/NavBarComponent";
import HomepageComponent from "../../components/GridContainers/Homepage/HomepageComponent";
import "./Main.css";

function Main() {
    return (
        <div className="home-page">
            <NavBarComponent/>
            <HomepageComponent/>
        </div>
    );
}

export default Main;
