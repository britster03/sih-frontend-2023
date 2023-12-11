import Button from "../Button/Button";
import styles from "./RecordsDashboard.module.css"
import axios from "axios";
import { useState } from "react";
import fileDownload from "js-file-download";

const RecordsDashboard = ({ fileObj, index }) => {
    
    const [fileUrl, setFileUrl] = useState('');

    const config = {
        responseType:'blob',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const downloadFile = async (fileName) => {
        const response = await axios.get(`http://localhost:4000/download/${fileName}`, config);
        // fileDownload(response.data,fileName)
        
        console.log(response.data);

        console.log(response);
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);

        // Trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}`; // Specify the file name
        a.click();

        // Clean up the temporary URL
        window.URL.revokeObjectURL(url);

    }
    return (
        <div className={styles.recordDashboard}>
            <h1>Record {index}</h1>
            <button onClick={() => downloadFile(fileObj?.Record?.FileName)}>Download</button>
            <div className={styles.recordDashboard_midDiv}>
                <div>
                    <p> <b>Record Name</b> : {fileObj?.Record?.FileName} </p>
                    <p> <b>Record Owner</b> : {fileObj?.Record?.Owner} </p>
                </div>
                <div>
                    <p> <b>Record Id</b> : {fileObj?.Record?.Id}</p>
                    <p> <b>Record Hash</b> : {fileObj?.Record?.FileHash}</p>
                </div>
            </div>


        </div>
    )
}

export default RecordsDashboard;