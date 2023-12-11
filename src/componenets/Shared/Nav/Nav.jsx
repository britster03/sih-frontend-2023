import Button from "../Button/Button"
import styles from "./Nav.module.css"
import { Avatar } from "@mui/material"
import { useNavigate } from "react-router"
const Nav = ({action,actionName}) => {
    const navigate = useNavigate();
    const logOutUser = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username");

        navigate("/");
    }

    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <h1>ID - <h4>CL001</h4></h1>
                <h1>Case ID - <h4>MH00401</h4></h1>
            </div>
            <div className={styles.right}>
                <Button buttonName={actionName} action={action} />
                <Button buttonName="Logout" action={logOutUser} />
                <Avatar sx={{width: "4rem", height: "4rem"}} alt="Username" src="/static/images/avatar/1.jpg" />
            </div>
        </div>
    )
}

export default Nav