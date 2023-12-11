import { useState } from "react";
import Button from "../../componenets/Shared/Button/Button";
import Header from "../../componenets/Shared/Header/Header";
import NavbarPage from "../../componenets/Shared/NavbarPage/NavbarPage";
import PasswordInput from "../../componenets/Shared/PasswordInput/PasswordInput";
import TextInput from "../../componenets/Shared/TextInput/TextInput";
import "./Login.css";
import { makeUnauthenticatedPOSTRequest } from "../../utils/serverHelper";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    
    const [popup, setPopup] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Error");

    const logIn = async() => {
        const body = {
            username:username,
            orgName:"Org1"
        }
        const response  = await makeUnauthenticatedPOSTRequest("/users/login",body);
        
        if(response && response.success){
            console.log(response);
            // alert("Success");
            setErrorMsg(null);
            setPopup(false);
            localStorage.setItem("token",response?.message?.token);
            window.localStorage.setItem("username",username);
            navigate("/getfiles");
        }
        else{
            setErrorMsg(response?.message);
            setPopup(true);
            console.log(response);
        } 
    }

    const [username,setUsername] = useState();
    const [pwd,setPwd] = useState();

    return (
        <div className="login">
            <Header />
            <NavbarPage path={"/signup"} buttonName={"Sign Up"} />
            
            <div className="loginForm-outerdiv">
                <div className="loginForm">
                    <TextInput label={"User Name"} placeholder={"Enter your User Name"} value={username} setValue={setUsername} />
                    <PasswordInput label={"Password"} placeholder={"Enter your password"} value={pwd} setValue={setPwd} />
                </div>
                <Button buttonName={"login"} action={logIn}/>
            </div>
            {
                popup &&
                <div className="login-error">
                    <h1>{errorMsg} </h1>
                    <button onClick={() => setPopup(false)}>X</button>
                </div>
            }
        </div>
    )
}

export default Login;