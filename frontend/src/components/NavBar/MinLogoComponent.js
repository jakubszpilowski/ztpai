import logo from "../../assets/cooking 2.svg";
import desc from "../../assets/COOLinaria.svg";
import {useNavigate} from "react-router-dom";

export const MinLogoComponent = () => {
    let navigate = useNavigate();
    function goHome() {
        navigate("/home");
    }

    return (
        <div className="logo-home" onClick={goHome}>
            <img className="desc" src={desc} alt="desc"/>
            <img className="pic" src={logo} alt="pic"/>
        </div>
    );
}