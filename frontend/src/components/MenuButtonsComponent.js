import spatula from "../img/spatula.svg";
import profile from "../img/user.svg";
import logout from "../img/logout.svg";

export const MenuButtonsComponent = () => {
    return (
            <div className="collapse navbar-collapse pages-href" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                       <a className="nav-link" href="#">
                            <img src={spatula} alt="spatula"/>
                            <span>Recipes</span>
                       </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src={profile} alt="profile"/>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src={logout} alt="logout"/>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
    );
}