import { Link } from "react-router-dom";
import "./NavbarPage.css"
const NavbarPage = ({path,buttonName}) => {
    return(
        <div className="navbarPage">
                <Link to={path}>{buttonName}</Link>
        </div>
    )
}

export default NavbarPage;