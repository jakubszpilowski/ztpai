import spatula from "../../assets/spatula.svg";
import profile from "../../assets/user.svg";
import logout from "../../assets/logout.svg";
import {Link, useNavigate} from "react-router-dom";

export const MenuButtonsComponent = () => {
    let navigate = useNavigate();

    function Logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
            <div className="collapse navbar-collapse pages-href" id="navbarNav">
                <ul className="navbar-nav navigation">
                    <li className="nav-item">
                       <Link className="nav-link" to={`/fav/1`}>
                            <img className="image" src={spatula} alt="spatula"/>
                            <span>Recipes</span>
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/profile/1`}>
                            <img className="image" src={profile} alt="profile"/>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={Logout}>
                            <img className="image" src={logout} alt="logout"/>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
    );
}
