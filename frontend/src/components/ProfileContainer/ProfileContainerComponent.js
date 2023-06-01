import React, {useEffect, useState} from "react";
import {UserProfileComponent} from "../ProfileComponent/UserProfileComponent";
import {ProfileToggleButton} from "../ProfileComponent/ProfileToggleButton";
import './ProfileContainerComponent.css';
import {AddButtonComponent} from "../AddRecipe/AddButtonComponent";
import {AddModalComponent} from "../AddRecipe/AddModalComponent";
import {ProfilePageComponent} from "../GridContainers/Profile/ProfilePageComponent";
import axios from "axios";
import {useParams} from "react-router-dom";

function ProfileContainerComponent() {
    const [user, setUser] = useState({
        id: 0,
        username: '',
        recipes: 0,
        rating: 0,
    });
    const [isUserSet, setUserSet] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const userId = localStorage.getItem("user");
        if(checkUser(userId)) {
            loadUserInfo().then();
        } else {
            window.location.href = `/profile/${userId}`;
        }

    }, [user]);

    const checkUser = (userId) => {
        return id === userId;
    }

    const loadUserInfo = async () => {
        const result = await axios.get(`http://localhost:8080/api/user/${id}`);
        if(result.status === 200) {
            setUser(result.data);
            setUserSet(true);
        }
    }

    return (
        <div className="profile-container">
            <UserProfileComponent user={user}/>
            {isUserSet && <ProfilePageComponent id={user.id}/>}
            <ProfileToggleButton/>
            <AddButtonComponent/>
            <AddModalComponent/>
        </div>
    );
}

export default ProfileContainerComponent;