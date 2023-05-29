import {NavBarComponent} from "../../components/NavBar/NavBarComponent";
import './Profile.css';
import ProfileContainerComponent from "../../components/ProfileContainer/ProfileContainerComponent";

function Profile() {
    return(
        <div className="profile-page">
            <NavBarComponent/>
            <ProfileContainerComponent/>
        </div>
    );
}

export default Profile;