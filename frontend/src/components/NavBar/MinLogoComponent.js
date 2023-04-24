import logo from "../../assets/cooking 2.svg";
import desc from "../../assets/COOLinaria.svg";

export const MinLogoComponent = () => {
    return (
        <div className="logo-home">
            <img className="desc" src={desc} alt="desc"/>
            <img className="pic" src={logo} alt="pic"/>
        </div>
    );
}