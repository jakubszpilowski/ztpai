import React from 'react';
import {NavBarComponent} from "../../components/NavBar/NavBarComponent";
import "../Main/Main.css";
import {AllGridContainer} from "../../components/GridContainers/AllPage/AllGridContainer";

function AllRecipes() {
    return (
        <div className="page">
            <NavBarComponent/>
            <AllGridContainer/>
        </div>
    );
}

export default AllRecipes;