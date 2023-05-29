import {NavBarComponent} from "../../components/NavBar/NavBarComponent";
import '../Main/Main.css';
import ProfileContainerComponent from "../../components/ProfileContainer/ProfileContainerComponent";

function Profile() {
    return(
        <div className="page">
            <NavBarComponent/>
            <ProfileContainerComponent/>
        </div>
    );
}

export default Profile;