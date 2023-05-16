import React from 'react';
import {NavBarComponent} from "../../components/NavBar/NavBarComponent";
import GridContainerComponent from "../../components/GridContainer/GridContainerComponent";
import "./Main.css";

function Main() {
    return (
        <div className="home-page">
            <NavBarComponent/>
            <GridContainerComponent/>
        </div>
    );
}

export default Main;
