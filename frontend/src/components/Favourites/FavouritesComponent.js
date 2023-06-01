import {Link} from "react-router-dom";
import './FavouritesComponent.css';

export const FavouritesComponent = () => {
    //TODO fetch favourites from backend

    return (
        <div className="favourites-container-empty">
            <span className="empty-favourites">
                It seems you didn't add any recipes yet
                <br></br>
                Go add some!
            </span>
            <Link className="link-to-all" to={'/all'}>
                All recipes
            </Link>
        </div>
    );
}