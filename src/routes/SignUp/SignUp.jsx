import Header from "../../componenets/Shared/Header/Header";
import NavbarPage from "../../componenets/Shared/NavbarPage/NavbarPage";
import "./SignUp.css"
import TextInput from "../../componenets/Shared/TextInput/TextInput";
import Button from "../../componenets/Shared/Button/Button";
import PasswordInput from "../../componenets/Shared/PasswordInput/PasswordInput";
import { useState } from "react";
import { makeUnauthenticatedPOSTRequest } from "../../utils/serverHelper";
import { useNavigate } from "react-router";
const SignUp = () => {
    const navigate = useNavigate();
    const [popup, setPopup] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Error");
    const [username, setUsername] = useState();
    const [pwd, setPwd] = useState();

    const register = async () => {
        const body = {
            username: username,
            orgName: "Org1"
        }
        const response = await makeUnauthenticatedPOSTRequest("/register", body);

        if (response && response.success) {
            setErrorMsg(null);
            setPopup(false);
            console.log(response);
            localStorage.setItem("token",response?.token);
            window.localStorage.setItem("username",username);
            navigate("/getfiles");
            
        }
        else {
            setErrorMsg(response?.message);
            setPopup(true);
            console.log(response);
        }
    }

    return (
        <div className="signup">
            <Header />
            <NavbarPage path={"/login"} buttonName={"Login"} />
            <div className="signupForm-outerdiv">
                <div className="signupForm">
                    <TextInput label={"User Name"} placeholder={"Set Your User Name  "} value={username} setValue={setUsername} />
                    <PasswordInput label={"Password"} placeholder={"Set Your Password"} value={pwd} setValue={setPwd} />
                </div>
                <Button buttonName={"Register"} action={register} />
            </div>

            {
                popup &&
                <div className="signup-error">
                    <h1>{errorMsg} </h1>
                    <button onClick={() => setPopup(false)}>X</button>
                </div>
            }
        </div>
    )
}

export default SignUp;