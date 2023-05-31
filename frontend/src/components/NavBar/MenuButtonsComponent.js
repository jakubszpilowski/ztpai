import spatula from "../../assets/spatula.svg";
import profile from "../../assets/user.svg";
import logout from "../../assets/logout.svg";
import cookbook from  "../../assets/recipe-book.svg";
import {Link, useNavigate} from "react-router-dom";

export const MenuButtonsComponent = ({userId}) => {
    let navigate = useNavigate();

    function Logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        navigate("/login");
    }

    return (
            <div className="collapse navbar-collapse pages-href" id="navbarNav">
                <ul className="navbar-nav navigation">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/all"}>
                            <img className="image" src={cookbook} alt="cookbook"/>
                            <span>All Recipes</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to={`/fav/${userId}`}>
                            <img className="image" src={spatula} alt="spatula"/>
                            <span>Favourites</span>
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/profile/${userId}`}>
                            <img className="image" src={profile} alt="profile"/>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" type="button" onClick={Logout}>
                            <img className="image" src={logout} alt="logout"/>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
    );
}
