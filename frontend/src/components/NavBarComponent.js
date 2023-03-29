import {MinLogoComponent} from "./MinLogoComponent";
import "../styles/NavBar.css";
import {SearchBarComponent} from "./SearchBarComponent";
import {MenuButtonsComponent} from "./MenuButtonsComponent";
import {MenuTogglerComponent} from "./MenuTogglerComponent";

export const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg main-header">
            <MinLogoComponent/>
            <SearchBarComponent/>
            <MenuTogglerComponent/>
            <MenuButtonsComponent/>
        </nav>
    );
}