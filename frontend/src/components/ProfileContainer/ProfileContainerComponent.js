import React from "react";
import {UserProfileComponent} from "../ProfileComponent/UserProfileComponent";
import {ProfileToggleButton} from "../ProfileComponent/ProfileToggleButton";
import './ProfileContainerComponent.css';
import {AddButtonComponent} from "../AddRecipe/AddButtonComponent";
import {AddModalComponent} from "../AddRecipe/AddModalComponent";

function ProfileContainerComponent() {
    return (
        <div className="profile-container">
            <UserProfileComponent/>
            <ProfileToggleButton/>
            <AddButtonComponent/>
            <AddModalComponent/>
        </div>
    );
}

export default ProfileContainerComponent;