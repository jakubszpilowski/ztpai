import React, {useEffect, useState} from "react";
import {UserProfileComponent} from "../ProfileComponent/UserProfileComponent";
import {ProfileToggleButton} from "../ProfileComponent/ProfileToggleButton";
import './ProfileContainerComponent.css';
import {AddButtonComponent} from "../AddRecipe/AddButtonComponent";
import {AddModalComponent} from "../AddRecipe/AddModalComponent";
import {ProfilePageComponent} from "../GridContainers/Profile/ProfilePageComponent";
import axios from "axios";

function ProfileContainerComponent() {
    const [user, setUser] = useState({
        id: 0,
        username: '',
        recipes: 0,
        rating: 0,
    });

    useEffect(() => {
        loadUserInfo().then();
    }, [user]);

    const loadUserInfo = async () => {
        const result = await axios.get(`http://localhost:8080/api/user`);
        if(result.status === 200) {
            setUser(result.data);
        }
    }

    return (
        <div className="profile-container">
            <UserProfileComponent user={user}/>
            <ProfilePageComponent/>
            <ProfileToggleButton/>
            <AddButtonComponent/>
            <AddModalComponent/>
        </div>
    );
}

export default ProfileContainerComponent;