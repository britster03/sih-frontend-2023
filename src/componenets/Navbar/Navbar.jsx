import { Link } from "react-router-dom";
import "./Navbar.css"
import { Icon } from '@iconify/react';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-feilds">
                <div className="navbar-icons">
                   <Icon icon="tdesign:home" />
                    Home
                </div>
                <div className="navbar-icons">
                <Icon icon="ant-design:notification-twotone" />
                    Notifications
                </div>
                <div className="navbar-icons">
                <Icon icon="uil:book-open" />
                    Act & Rules
                </div>
            </div>

            <div className="navbar-buttons">
                <div className="navbar-button">
                    <Link to="/login" >Login</Link>
                </div> 

                <div className="navbar-button">
                    <Link to="/signup" >Sign Up</Link>
                </div>
            </div>

        </div>
    )
}   

export default Navbar;