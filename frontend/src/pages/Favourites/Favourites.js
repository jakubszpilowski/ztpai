import '../Main/Main.css';
import {NavBarComponent} from "../../components/NavBar/NavBarComponent";
import {FavouritesComponent} from "../../components/Favourites/FavouritesComponent";

function Favourites() {
    return(
        <div className="page">
            <NavBarComponent/>
            <FavouritesComponent/>
        </div>
    );
}

export default Favourites;