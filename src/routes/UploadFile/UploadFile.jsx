import { useEffect, useState } from "react"
import styles from "./UploadFile.module.css"
import Button from "../../componenets/Shared/Button/Button"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router"
import Header from "../../componenets/Shared/Header/Header"
import Nav from "../../componenets/Shared/Nav/Nav"
import { useLocation } from "react-router";
// import Button from "../../componenets/Shared/Button/Button"
const UploadFile = () => {
    const navigate = useNavigate();
    const [uploaded,setUploaded] = useState();

    const [popup, setPopup] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Error");

    const username= window.localStorage.getItem("username");

    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
     

    async function handleSubmit() {
        // console.log(file);
        if(!file) {
            setErrorMsg("Please Upload A File");
            setPopup(true);
            return;
        }
        setErrorMsg(null);
        setPopup(false);
        const formData = new FormData()
        formData.append('file', file)
        
        const response = await axios.post('http://localhost:4000/upload',formData,config)

        if(response?.data?.success){
            setErrorMsg(response?.data?.message);
            setPopup(true);
        }


        const formBody = {
            fcn: "CreateAsset",
            chaincodeName:"basic",
            channelName: "mychannel",
            args: [ uuidv4() , username, file?.name, "File Content"]
        }

        const getHash = await axios.post('http://localhost:4000/channels/mychannel/chaincodes/basic',formBody,config);
        console.log(JSON.parse(getHash?.data?.result?.txid));
    }

    const seeFiles = () => {
        navigate("/getfiles");
    }

    useEffect(() => {
        if(!username) navigate("/");
    },[])

    return (
        <div className={styles.main}>
            <Header />
            <Nav actionName="See Files" action={seeFiles} />
            <div className={styles.upload}>
                <div className={styles.uploadContainer}>
                    <h1>Upload Documents</h1>
                    <input className={styles.uploadFilesInput} type="file" onChange={handleChange} />

                    <Button buttonName={"Upload"} action={handleSubmit} />
                </div>
            </div>
            {
                popup &&
                <div className={styles.uploadError}>
                    <h1>{errorMsg} </h1>
                    <button onClick={() => setPopup(false)}>X</button>
                </div>
            }
            
        </div>
    )
}

export default UploadFile;