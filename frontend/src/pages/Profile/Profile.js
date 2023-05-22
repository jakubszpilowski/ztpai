import {NavBarComponent} from "../../components/NavBar/NavBarComponent";
import './Profile.css';
import GridContainerProfile from "../../components/GridContainer/GridContainerProfileComponent";

function Profile() {
    return(
        <div className="profile-page">
            <NavBarComponent/>
            <GridContainerProfile/>
        </div>
    );
}

export default Profile;