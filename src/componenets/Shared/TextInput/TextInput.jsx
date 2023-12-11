import "./TextInput.css";

const TextInput = ({label,placeholder,value,setValue}) => {
    return(
        <div className="textInput">
            <label>{label}</label>
            <input type="text" placeholder={placeholder} onChange={(e)=> setValue(e.target.value)}/>
        </div>
    )
}
export default TextInput;