import './UserProfileComponent.css';
import avatar from '../../assets/profile_avt.svg';
import {Link} from "react-router-dom";
import spatula from '../../assets/spatula.svg';
import book from '../../assets/recipe-book.svg';

export const UserProfileComponent = () => {
    return (
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="card card-body user-details-toggled">
                <div className="user-avatar">
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className="user-details">
                    <span className="user-details-username">Jqb</span>
                    <div className="user-stat">
                        <img className="user-icon" src={spatula} alt="spatula"/>
                        4.69
                    </div>
                    <div className="user-stat">
                        <img className="user-icon" src={book} alt="book"/>
                        1
                    </div>
                </div>
                <Link className="settings-link" to={"/profile/1/settings"}></Link>
            </div>
        </div>
    );
}