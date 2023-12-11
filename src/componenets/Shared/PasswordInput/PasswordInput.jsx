import "./PasswordInput.css"

const PasswordInput = ({label,placeholder,value,setValue}) => {
    return(
        <div className="passwordInput">
            <label>{label}</label>
            <input type="password" placeholder={placeholder} onChange={(e)=> setValue(e.target.value)} />
        </div>
    )
}

export default PasswordInput;