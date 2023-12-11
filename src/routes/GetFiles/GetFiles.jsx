import { useEffect, useState } from "react";
import "./GetFiles.css";
import axios from "axios";
import Header from "../../componenets/Shared/Header/Header";
import Navbar from "../../componenets/Navbar/Navbar";
import RecordsDashboard from "../../componenets/Shared/RecordsDashboard/RecordsDashboard";
import { useLocation } from "react-router";
import Nav from "../../componenets/Shared/Nav/Nav";
import Button from "../../componenets/Shared/Button/Button";
import { useNavigate } from "react-router";




const GetFiles = () => {
    const username = window.localStorage.getItem("username");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [allFiles, setAllFiles] = useState([]);

    useEffect(() => {
        console.log(username);
        if(username){
            fetchAllFiles();
        }
        else{
            navigate("/")
        }
    }, [])

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const fetchAllFiles = async () => {
        console.log(username);
        const response = await axios.get(`http://localhost:4000/channels/mychannel/chaincodes/basic?args=["${username}"]&fcn=ReadAssetByOwner`, config);
        console.log(response);
        if (!response?.data?.error) {
            // console.log(response?.data?.result);
            setAllFiles(response?.data?.result)
            setIsLoading(true);
        }
    }

    console.log("All Files: ", allFiles)

    

    const goToUpload = () => {
        navigate("/upload")
    }

    return (
        <div className="getFiles-mainDiv">
            <Header />
            <Nav action={goToUpload} actionName={"Upload Files"}  />
            <h1 className="greeting">Hello, Adv. {username?.slice(0,1).toUpperCase()}{username?.substring(1,username?.length)}</h1>
            {
                isLoading
                    ? <div className="getFiles-midDiv">
                        {
                            allFiles.length > 0
                                ? allFiles.map((fileObj, index) => {
                                    // console.log("File Obj", fileObj);
                                    return (
                                        <RecordsDashboard key={fileObj?.Key} fileObj={fileObj} index={index + 1} />
                                    )
                                })
                                : <div className="getFiles-no-records">No Records Added Yet</div>

                        }
                    </div>
                    : <h1>Loading...</h1>
            }

        </div>
    )
}

export default GetFiles;