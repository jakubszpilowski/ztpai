import './UserProfileComponent.css';
import avatar from '../../assets/profile_avt.svg';
import {Link} from "react-router-dom";
import spatula from '../../assets/spatula.svg';
import book from '../../assets/recipe-book.svg';

export const UserProfileComponent = ({user}) => {
    //TODO
    // get user avatar from backend

    return (
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="card card-body user-details-toggled">
                <div className="user-avatar">
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className="user-details">
                    <span className="user-details-username">{user.username}</span>
                    <div className="user-stat">
                        <img className="user-icon" src={spatula} alt="spatula"/>
                        {user.rating}
                    </div>
                    <div className="user-stat">
                        <img className="user-icon" src={book} alt="book"/>
                        {user.recipes}
                    </div>
                </div>
                <Link className="settings-link" to={`/profile/${user.id}/settings`}></Link>
            </div>
        </div>
    );
}